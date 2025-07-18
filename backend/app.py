import os
from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from gemini_handler import get_gemini_response
from weather_api import get_weather_info

# Load environment variables from .env file
load_dotenv()

# Path to the static frontend build
FRONTEND_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'frontend')

# Create the Flask app
app = Flask(__name__, static_folder=FRONTEND_FOLDER, static_url_path='')

# Enable CORS for API endpoints
CORS(app)

# Serve index.html for the root and all frontend routes

@app.route('/')
@app.route('/about')
@app.route('/chat')
@app.route('/alerts')
@app.route('/contact')
@app.route('/resources')
def serve_index():
    """
    Serve the main React index.html for the root and all frontend routes.
    """
    return send_from_directory(FRONTEND_FOLDER, 'index.html')

# Serve static files (JS, CSS, images, etc.)
@app.route('/<path:path>')
def serve_static(path):
    """
    Serve static files generated by the React build (Next.js export).
    """
    file_path = os.path.join(FRONTEND_FOLDER, path)
    if os.path.isfile(file_path):
        return send_from_directory(FRONTEND_FOLDER, path)
    else:
        # For client-side routing, serve index.html
        return send_from_directory(FRONTEND_FOLDER, 'index.html')

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")


@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '') if data else ''
        response_text = get_gemini_response(user_message)
        return jsonify({'reply': response_text})
    except Exception as e:
        return jsonify({'error': f'Chat endpoint error: {str(e)}'}), 500

@app.route('/weather', methods=['GET'])
def weather():
    try:
        city = request.args.get('city', '')
        weather_data = get_weather_info(city)
        return jsonify(weather_data)
    except Exception as e:
        return jsonify({'error': f'Weather endpoint error: {str(e)}'}), 500

@app.route('/healthcheck', methods=['GET'])
def healthcheck():
    return jsonify({'status': 'ok', 'message': 'Service is healthy.'})

if __name__ == "__main__":
    # Run the app on 0.0.0.0:5000 for external access
    app.run(host="0.0.0.0", port=5000, debug=True) 