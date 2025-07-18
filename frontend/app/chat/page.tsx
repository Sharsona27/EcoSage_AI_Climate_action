"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Leaf, User, Zap, Globe, TrendingUp } from "lucide-react"

// Function to call Flask backend for chat reply
const fetchBackendReply = async (message: string) => {
  try {
    const res = await fetch("https://ecosage-ai-climate-action.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch chat response");
    }
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.reply;
  } catch (err) {
    throw err;
  }
};

export default function ChatPage() {
  // State for chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm EcoSage, your wise climate companion. How can I help you take action against climate change today? 🌱",
    },
  ])
  // State for user input
  const [input, setInput] = useState("")
  // State to show typing indicator
  const [isTyping, setIsTyping] = useState(false)
  // State for error messages
  const [error, setError] = useState("")

  // Sends user message to Flask backend and updates chat
  const handleSend = async () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: input,
    }

    setMessages([...messages, newMessage])
    setInput("")
    setIsTyping(true)
    setError("")

    try {
      // Call Flask backend for real reply
      const reply = await fetchBackendReply(input)
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: reply || "Sorry, I couldn't get a response from EcoSage.",
      }
      setMessages((prev) => [...prev, botResponse])
    } catch (err) {
      setError("Failed to connect to EcoSage backend.")
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          type: "bot",
          content: "Sorry, there was a problem reaching the EcoSage server.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const quickActions = [
    { icon: Zap, title: "Daily Tips", description: "Get personalized eco-friendly tips" },
    { icon: TrendingUp, title: "Carbon Footprint", description: "Calculate and reduce your impact" },
    { icon: Globe, title: "Local Actions", description: "Find climate initiatives near you" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-4">
            <Leaf className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-charcoal">AI-Powered Climate Assistant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal mb-4">
            Talk to{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">EcoSage</span>
          </h1>
          <p className="text-lg text-charcoal/70">
            Ask me anything about climate action, sustainability, or environmental protection.
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm mb-8">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <div className="p-2 rounded-full bg-white/20">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="font-poppins">EcoSage Chat</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                      message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                          : "bg-gradient-to-r from-green-400 to-teal-500 text-white"
                      }`}
                    >
                      {message.type === "user" ? <User className="h-5 w-5" /> : <Leaf className="h-5 w-5" />}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl shadow-lg ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : "bg-white text-charcoal border border-green-100"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white flex items-center justify-center shadow-lg">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-white text-charcoal border border-green-100 shadow-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-green-100 p-4 bg-gray-50/50">
              <div className="flex space-x-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask EcoSage about climate action..."
                  className="flex-1 rounded-full border-green-200 focus:border-green-400 focus:ring-green-400"
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSend}
                  disabled={isTyping}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {/* Show error if any */}
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm cursor-pointer group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-charcoal mb-1">{action.title}</h3>
                <p className="text-sm text-charcoal/70">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
