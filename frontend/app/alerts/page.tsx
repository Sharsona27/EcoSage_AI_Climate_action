"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Cloud, Sun, Droplets, Wind, MapPin, Search, Thermometer, CloudRain, Zap } from "lucide-react"

// Define the type for weather data returned from the backend
// Add or remove fields as needed to match your backend response

type WeatherData = {
  temperature: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  condition: string;
  visibility: number;
};

export default function ClimateAlertsPage() {
  // State for location input (not used for API call)
  const [location, setLocation] = useState("")
  // State for selected city
  const [selectedCity, setSelectedCity] = useState("Delhi")
  // State for fetched weather data
  const [weather, setWeather] = useState<WeatherData | null>(null)
  // State for weather fetch error
  const [weatherError, setWeatherError] = useState("")

  // List of Indian cities for selection
  const indianCities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Patna",
    "Bhopal",
  ]

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Fetch weather info from backend when selectedCity changes
  useEffect(() => {
    async function fetchWeather() {
      setWeather(null)
      setWeatherError("")
      try {
        // Call live backend /weather endpoint
        const res = await fetch(`${backendUrl}/weather?city=${selectedCity}`)
        if (!res.ok) {
          throw new Error("Failed to fetch weather from backend.");
        }
        const data = await res.json();
        if (data.error) {
          setWeatherError(data.error);
        } else {
          setWeather(data);
        }
      } catch (err) {
        setWeatherError("Failed to fetch weather from backend.")
      }
    }
    fetchWeather()
  }, [selectedCity])

  const alerts = [
    {
      id: 1,
      type: "heatwave",
      severity: "high",
      location: "Delhi, India",
      title: "Extreme Heat Warning",
      description: "Temperatures expected to reach 45°C (113°F) for the next 3 days. Heat wave conditions prevailing.",
      icon: Sun,
      color: "text-red-600",
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
    },
    {
      id: 2,
      type: "monsoon",
      severity: "medium",
      location: "Mumbai, India",
      title: "Heavy Monsoon Alert",
      description: "Heavy rainfall expected, potential for urban flooding in low-lying areas. Monsoon intensity high.",
      icon: CloudRain,
      color: "text-blue-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      id: 3,
      type: "cyclone",
      severity: "high",
      location: "Chennai, India",
      title: "Cyclone Warning",
      description: "Tropical cyclone approaching. Strong winds up to 120 km/h expected along coastal areas.",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
    },
    {
      id: 4,
      type: "dust_storm",
      severity: "medium",
      location: "Jaipur, India",
      title: "Dust Storm Advisory",
      description: "Dust storm conditions expected with reduced visibility. Winds 40-50 km/h with dust.",
      icon: Wind,
      color: "text-yellow-600",
      bgColor: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-100"
      case "medium":
        return "text-orange-600 bg-orange-100"
      case "low":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-6">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-charcoal">Real-Time India Weather Monitoring</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-charcoal mb-6">
            Get Real-Time Weather{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent">Alerts</span>
            <br />
            Across India
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed mb-4">
            Stay informed about extreme weather events and climate-related alerts across major Indian cities. Get
            real-time updates to help you prepare and stay safe.
          </p>
          <p className="text-lg text-green-600 font-medium">
            Stay prepared with accurate local forecasts powered by EcoSage
          </p>
        </div>

        {/* Location Search and City Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-charcoal">
                <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins">Search by Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Input
                  placeholder="Enter Indian city or pin code..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 rounded-full border-green-200 focus:border-green-400 focus:ring-green-400"
                />
                <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-charcoal">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins">Select Major City</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full rounded-full border-green-200 focus:border-green-400 focus:ring-green-400">
                  <SelectValue placeholder="Choose an Indian city" />
                </SelectTrigger>
                <SelectContent>
                  {indianCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Current Weather Data for Selected City */}
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-charcoal font-poppins text-2xl flex items-center space-x-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <span>Current Weather in {selectedCity}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {weatherError ? (
              <p className="text-red-600 text-center py-4">{weatherError}</p>
            ) : weather ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: Thermometer,
                    value: `${weather.temperature}°C`,
                    label: "Temperature",
                    color: "from-red-400 to-red-600",
                    subtext: `Feels like ${weather.feels_like}°C`,
                  },
                  {
                    icon: Droplets,
                    value: `${weather.humidity}%`,
                    label: "Humidity",
                    color: "from-blue-400 to-blue-600",
                    subtext: "High humidity",
                  },
                  {
                    icon: Wind,
                    value: `${weather.wind_speed} km/h`,
                    label: "Wind Speed",
                    color: "from-green-400 to-green-600",
                    subtext: "SW direction",
                  },
                  {
                    icon: Sun,
                    value: weather.condition,
                    label: "Condition",
                    color: "from-yellow-400 to-yellow-600",
                    subtext: `Visibility ${weather.visibility}km`,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-poppins font-bold text-charcoal">{item.value}</div>
                    <div className="text-sm text-charcoal/70 mb-1">{item.label}</div>
                    <div className="text-xs text-charcoal/50">{item.subtext}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-4">Loading weather data...</p>
            )}
          </CardContent>
        </Card>

        {/* Current Alerts */}
        <div className="mb-12">
          <h2 className="text-3xl font-poppins font-bold text-charcoal mb-8">Active Weather Alerts Across India</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alerts.map((alert) => {
              const IconComponent = alert.icon
              return (
                <Card
                  key={alert.id}
                  className={`border-2 ${alert.borderColor} bg-gradient-to-br ${alert.bgColor} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 rounded-2xl bg-white shadow-lg">
                        <IconComponent className={`h-8 w-8 ${alert.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-poppins font-semibold text-charcoal">{alert.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getSeverityColor(alert.severity)}`}
                          >
                            {alert.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/70 mb-3 font-medium">{alert.location}</p>
                        <p className="text-charcoal/80 leading-relaxed">{alert.description}</p>
                        <div className="mt-4 flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-charcoal/70">Follow local weather department guidelines</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Emergency Preparedness for India */}
        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-800">
              <div className="p-2 rounded-full bg-orange-200">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <span className="font-poppins">Weather Emergency Preparedness for India</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-charcoal/80">
              {[
                "Keep emergency supplies: water, food, flashlight, first aid kit, and battery-powered radio",
                "Stay updated with IMD (India Meteorological Department) forecasts and warnings",
                "Know your local disaster management helpline numbers and evacuation routes",
                "During monsoons: avoid waterlogged areas and stay away from electrical installations",
                "Heat wave precautions: stay hydrated, avoid direct sunlight during peak hours (11 AM - 4 PM)",
                "Cyclone safety: secure loose objects, stay indoors, and keep away from windows",
                "Download official weather apps: Mausam (IMD), Disaster Management apps for your state",
              ].map((tip, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
              <p className="text-sm text-charcoal/70">
                <strong>Emergency Contacts:</strong> National Disaster Response Force (NDRF): 011-26701700-800 | State
                Disaster Helpline: 1077 | Fire: 101 | Police: 100 | Ambulance: 108
              </p>
            </div>
          </CardContent>
        </Card>

        {/* API Integration Note */}
        <Card className="mt-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-teal-50 shadow-xl">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 rounded-full bg-green-200">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-green-800">Powered by Real-Time Weather Data</h3>
            </div>
            <p className="text-charcoal/80 leading-relaxed">
              This page is designed to integrate with OpenWeather API for real-time weather data across India. Live
              weather updates, forecasts, and alerts will be available once the API integration is complete.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
