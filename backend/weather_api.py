import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Get the OpenWeatherMap API key from environment variables
WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")

def get_weather_info(city):
    """
    Fetches current weather for the given city from OpenWeatherMap API.
    Returns a dictionary with temperature, feels_like, humidity, wind_speed, visibility, and condition.
    """
    if not WEATHER_API_KEY:
        return {"error": "OpenWeatherMap API key not found."}
    if not city:
        return {"error": "No city provided."}
    try:
        url = (
            f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={WEATHER_API_KEY}&units=metric"
        )
        response = requests.get(url, timeout=10)
        if response.status_code != 200:
            return {"error": f"Weather API error: {response.status_code} {response.reason}"}
        data = response.json()
        # Parse all required fields
        temp = data.get("main", {}).get("temp")
        feels_like = data.get("main", {}).get("feels_like")
        humidity = data.get("main", {}).get("humidity")
        wind_speed = data.get("wind", {}).get("speed")
        visibility = data.get("visibility", None)
        condition = data.get("weather", [{}])[0].get("description")
        # Return the weather info as a dictionary
        return {
            "city": city,
            "temperature": temp,
            "feels_like": feels_like,
            "humidity": humidity,
            "wind_speed": wind_speed,
            "visibility": visibility,
            "condition": condition,
        }
    except Exception as e:
        return {"error": f"Weather API error: {str(e)}"} 