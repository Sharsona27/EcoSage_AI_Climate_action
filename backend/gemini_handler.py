import os
from dotenv import load_dotenv

# Try to import google.generativeai, else mock the response
try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False

# Load environment variables from .env
load_dotenv()

# Get the Gemini API key from environment variables
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize the Gemini model globally for performance
if GEMINI_AVAILABLE and GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    GEMINI_MODEL = genai.GenerativeModel('models/gemini-1.5-flash-latest')
else:
    GEMINI_MODEL = None

def get_gemini_response(user_input):
    """
    Sends the prompt to Gemini API and returns the AI-generated reply using streaming.
    If google.generativeai is not installed, returns a mock response.
    """
    if not GEMINI_API_KEY:
        return "[Error: Gemini API key not found.]"
    if not user_input:
        return "[Error: No prompt provided.]"
    if not GEMINI_AVAILABLE or GEMINI_MODEL is None:
        # Mock response if google.generativeai is not installed
        return f"[Mock Gemini reply to: {user_input}]"
    try:
        # Compose the system prompt for short, friendly, emoji-rich answers
        system_prompt = f'''
You are EcoSage, a friendly and wise chatbot that helps users take climate action.

Always reply in short, friendly, clear sentences (maximum 3–5 lines). Avoid large blocks of text.
Use emojis to make it more engaging and positive.

If the answer is too long, summarize it and end with:
👉 "Want more details? Just ask!"

User question: "{user_input}"

Reply now:
'''
        # Use streaming to get the response as it is generated
        response_stream = GEMINI_MODEL.generate_content(system_prompt, stream=True)
        # Concatenate the streamed parts into a single string
        full_response = ""
        for chunk in response_stream:
            if hasattr(chunk, 'text') and chunk.text:
                full_response += chunk.text
        return full_response if full_response else "[Gemini API error: No response text received.]"
    except Exception as e:
        return f"[Gemini API error: {str(e)}]" 