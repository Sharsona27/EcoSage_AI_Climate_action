from flask import Blueprint, request, jsonify
from gemini_handler import get_gemini_response
from weather_api import get_weather_info

# Create a blueprint for API routes
api_bp = Blueprint('api', __name__)

@api_bp.route('/chat', methods=['POST'])
def chat():
    """
    Receives a JSON body with a 'message' field and returns a chatbot response from Gemini API.
    Returns a clean JSON response with error handling.
    """
    try:
        data = request.get_json()
        user_message = data.get('message', '') if data else ''
        response_text = get_gemini_response(user_message)
        return jsonify({'reply': response_text})
    except Exception as e:
        # Return a fallback error message
        return jsonify({'error': f'Chat endpoint error: {str(e)}'}), 500

@api_bp.route('/weather', methods=['GET'])
def weather():
    """
    Receives a 'city' query parameter and returns weather info from OpenWeatherMap API.
    Returns a clean JSON response with error handling.
    """
    try:
        city = request.args.get('city', '')
        weather_data = get_weather_info(city)
        return jsonify(weather_data)
    except Exception as e:
        # Return a fallback error message
        return jsonify({'error': f'Weather endpoint error: {str(e)}'}), 500 