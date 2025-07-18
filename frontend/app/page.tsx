import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  MessageCircle,
  Globe,
  Leaf,
  Users,
  TrendingUp,
  Shield,
  Star,
  Lightbulb,
  ArrowRight,
  Target,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with nature theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234CAF50%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Leaf className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-charcoal">AI-Powered Climate Assistant</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-charcoal mb-6 leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">EcoSage</span>
              <br />
              Your Wise Climate Companion
            </h1>

            <p className="text-xl md:text-2xl text-charcoal/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get climate tips, weather alerts, and eco-friendly advice instantly. Take meaningful action against
              climate change with personalized AI guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/chat">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Start Chat
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-poppins font-semibold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { number: "10K+", label: "Active Users", icon: Users },
                { number: "50K+", label: "Climate Actions", icon: Target },
                { number: "25%", label: "Avg. Carbon Reduction", icon: TrendingUp },
              ].map(({ number, label, icon: Icon }, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Icon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-3xl font-poppins font-bold text-charcoal">{number}</div>
                  <div className="text-sm text-charcoal/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-green-200/30 rounded-full flex items-center justify-center">
            <Leaf className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="w-20 h-20 bg-blue-200/30 rounded-full flex items-center justify-center">
            <Globe className="h-10 w-10 text-blue-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal mb-4">
              Why Choose <span className="text-green-500">EcoSage</span>?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Discover how our AI-powered companion makes climate action accessible, personalized, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Personalized Guidance",
                description: "Get tailored advice based on your lifestyle, location, and climate goals.",
                color: "from-green-400 to-green-600",
              },
              {
                icon: TrendingUp,
                title: "Track Your Impact",
                description: "Monitor your carbon footprint reduction and celebrate your progress.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Shield,
                title: "Science-Based",
                description: "All recommendations backed by the latest climate science and research.",
                color: "from-teal-400 to-teal-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal mb-6">
                How EcoSage Helps You Take Climate Action
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Leaf,
                    title: "Daily Eco Tips",
                    description: "Get practical, actionable advice for reducing your environmental impact every day.",
                  },
                  {
                    icon: Users,
                    title: "Community Connection",
                    description: "Connect with like-minded individuals and join local climate action initiatives.",
                  },
                  {
                    icon: MessageCircle,
                    title: "24/7 Support",
                    description: "Ask questions anytime and get instant, intelligent responses about climate action.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-poppins font-semibold text-charcoal mb-2">{benefit.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center shadow-xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-charcoal mb-4">Ready to Make a Difference?</h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Join thousands of users already taking climate action with EcoSage.
                </p>
                <Link href="/chat">
                  <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full px-6 py-3 font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Ask EcoSage Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Facts Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-teal-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lightbulb className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Did You Know?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            If every household in the US replaced just one regular light bulb with an LED, we would save enough energy
            to light 3 million homes for a year and prevent 9 billion pounds of greenhouse gas emissions annually.
          </p>
          <Link href="/resources">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-6 py-3 font-poppins font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Learn More Climate Facts
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal mb-4">What Our Users Say</h2>
            <p className="text-xl text-charcoal/70">Real stories from people making a difference with EcoSage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Environmental Educator",
                content:
                  "EcoSage helped me reduce my carbon footprint by 30% in just 3 months. The personalized tips are incredibly practical!",
                avatar: "S",
              },
              {
                name: "Mike R.",
                role: "Father of Two",
                content:
                  "As a busy parent, EcoSage makes it easy to teach my kids about climate action. We love the family challenges!",
                avatar: "M",
              },
              {
                name: "Dr. Lisa K.",
                role: "Climate Researcher",
                content:
                  "The climate alerts feature helped me prepare for extreme weather events. EcoSage is truly comprehensive!",
                avatar: "L",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white font-poppins font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-charcoal">{testimonial.name}</div>
                      <div className="text-sm text-charcoal/60">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
