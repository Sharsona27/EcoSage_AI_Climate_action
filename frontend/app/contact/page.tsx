"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Leaf } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-6">
            <Mail className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-charcoal">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-charcoal mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about climate action or need help with EcoSage? We'd love to hear from you. Get in touch and
            let's work together towards a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-charcoal">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-poppins font-medium text-charcoal mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-poppins font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-poppins font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you with climate action..."
                    rows={6}
                    className="w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-green-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl py-3 font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-green-400 to-teal-500 shadow-lg">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-charcoal">Chat with EcoSage</h3>
                    <p className="text-charcoal/70">Get instant answers to your climate questions</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Chat Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-lg font-poppins font-semibold text-charcoal mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: "sharma57sona@gmail.com", color: "from-green-400 to-green-600" },
                    { icon: Phone, text: "+1 (555) 123-4567", color: "from-blue-400 to-blue-600" },
                    { icon: MapPin, text: "Gujarat , India", color: "from-teal-400 to-teal-600" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-charcoal/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-teal-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-charcoal">Office Hours</h3>
                </div>
                <div className="space-y-3 text-charcoal/80">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <p className="text-sm text-charcoal/70">
                    <strong>Note:</strong> EcoSage AI chat is available 24/7 for instant climate guidance!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-lg font-poppins font-semibold text-charcoal mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: "How accurate is EcoSage's advice?",
                      answer: "All recommendations are based on peer-reviewed climate science and updated regularly.",
                    },
                    {
                      question: "Is EcoSage free to use?",
                      answer:
                        "Yes! Basic climate guidance is completely free. Premium features available for advanced users.",
                    },
                    {
                      question: "Can I suggest new features?",
                      answer: "We love user feedback and regularly implement community suggestions.",
                    },
                  ].map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-poppins font-medium text-charcoal mb-1">{faq.question}</h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 rounded-full bg-orange-200">
                <Leaf className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-orange-800">Climate Emergency Resources</h3>
            </div>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              For immediate climate-related emergencies or severe weather alerts, contact your local emergency services.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-100 rounded-full bg-white/80 backdrop-blur-sm font-poppins font-medium"
              >
                Emergency: 911
              </Button>
              <Button
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-100 rounded-full bg-white/80 backdrop-blur-sm font-poppins font-medium"
              >
                Weather Service: 1-800-WEATHER
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
