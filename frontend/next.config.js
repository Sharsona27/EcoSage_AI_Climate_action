// next.config.js

/**
 * @type {import('next').NextConfig}
 * This configuration sets up a reverse proxy so that API requests to /api/chat and /api/weather
 * are forwarded to the Flask backend running on https://ecosage-ai-climate-action.onrender.com.
 * This avoids CORS issues and lets the frontend and backend work as one app.
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/chat',
        destination: 'https://ecosage-ai-climate-action.onrender.com/chat', // Proxy to Flask backend
      },
      {
        source: '/weather',
        destination: 'https:/ecosage-ai-climate-action.onrender.com/weather', // Proxy to Flask backend
      },
    ]
  },
}

module.exports = nextConfig; 