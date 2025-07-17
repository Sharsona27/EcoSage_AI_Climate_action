// next.config.js

/**
 * @type {import('next').NextConfig}
 * This configuration sets up a reverse proxy so that API requests to /api/chat and /api/weather
 * are forwarded to the Flask backend running on http://localhost:5000.
 * This avoids CORS issues and lets the frontend and backend work as one app.
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: 'http://localhost:5000/chat', // Proxy to Flask backend
      },
      {
        source: '/api/weather',
        destination: 'http://localhost:5000/weather', // Proxy to Flask backend
      },
    ]
  },
}

module.exports = nextConfig; 