import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText, Video, BookOpen, Lightbulb, Leaf } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Complete Guide to Home Energy Efficiency",
      description: "Learn how to reduce your home energy consumption by up to 40% with practical tips and strategies.",
      type: "PDF Guide",
      icon: FileText,
      category: "Energy",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      title: "Sustainable Transportation Handbook",
      description: "Explore eco-friendly transportation options and calculate your carbon savings.",
      type: "PDF Guide",
      icon: FileText,
      category: "Transportation",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      title: "Zero Waste Living Starter Kit",
      description: "Step-by-step guide to reducing household waste and living more sustainably.",
      type: "PDF Guide",
      icon: FileText,
      category: "Lifestyle",
      gradient: "from-green-400 to-green-600",
    },
    {
      id: 4,
      title: "Climate Action Video Series",
      description: "Educational videos covering climate science, solutions, and personal action steps.",
      type: "Video Series",
      icon: Video,
      category: "Education",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      id: 5,
      title: "Renewable Energy for Homeowners",
      description: "Comprehensive guide to solar panels, wind power, and other renewable energy options.",
      type: "eBook",
      icon: BookOpen,
      category: "Energy",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      id: 6,
      title: "Sustainable Gardening Guide",
      description: "Create an eco-friendly garden that supports biodiversity and reduces water usage.",
      type: "PDF Guide",
      icon: FileText,
      category: "Gardening",
      gradient: "from-emerald-400 to-emerald-600",
    },
  ]

  const climateLinks = [
    {
      title: "IPCC Climate Reports",
      description: "Latest scientific assessments on climate change",
      url: "https://www.ipcc.ch",
      category: "Science",
    },
    {
      title: "NASA Climate Change",
      description: "Climate data, research, and educational resources",
      url: "https://climate.nasa.gov",
      category: "Science",
    },
    {
      title: "Climate Action Tracker",
      description: "Track global climate action and commitments",
      url: "https://climateactiontracker.org",
      category: "Policy",
    },
    {
      title: "Project Drawdown",
      description: "Solutions to reverse global warming",
      url: "https://drawdown.org",
      category: "Solutions",
    },
    {
      title: "Carbon Trust",
      description: "Business sustainability and carbon reduction",
      url: "https://www.carbontrust.com",
      category: "Business",
    },
    {
      title: "Climate Reality Project",
      description: "Climate education and advocacy resources",
      url: "https://www.climaterealityproject.org",
      category: "Advocacy",
    },
  ]

  const tips = [
    {
      title: "Reduce Energy Consumption",
      description: "Switch to LED bulbs, unplug devices when not in use, and use programmable thermostats.",
      icon: Lightbulb,
    },
    {
      title: "Choose Sustainable Transportation",
      description: "Walk, bike, use public transit, or consider electric vehicles for longer trips.",
      icon: Lightbulb,
    },
    {
      title: "Eat More Plant-Based Meals",
      description: "Reduce meat consumption and choose locally sourced, seasonal produce when possible.",
      icon: Lightbulb,
    },
    {
      title: "Reduce, Reuse, Recycle",
      description: "Minimize waste by buying less, reusing items, and properly recycling materials.",
      icon: Lightbulb,
    },
    {
      title: "Conserve Water",
      description: "Fix leaks, take shorter showers, and use water-efficient appliances and fixtures.",
      icon: Lightbulb,
    },
    {
      title: "Support Renewable Energy",
      description: "Choose green energy plans or install solar panels if possible.",
      icon: Lightbulb,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Energy":
        return "bg-yellow-100 text-yellow-800"
      case "Transportation":
        return "bg-blue-100 text-blue-800"
      case "Lifestyle":
        return "bg-green-100 text-green-800"
      case "Education":
        return "bg-purple-100 text-purple-800"
      case "Gardening":
        return "bg-emerald-100 text-emerald-800"
      case "Science":
        return "bg-blue-100 text-blue-800"
      case "Policy":
        return "bg-purple-100 text-purple-800"
      case "Solutions":
        return "bg-green-100 text-green-800"
      case "Business":
        return "bg-orange-100 text-orange-800"
      case "Advocacy":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full px-4 py-2 shadow-lg mb-6">
            <Leaf className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-charcoal">Climate Action Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-charcoal mb-6">
            Climate{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of guides, tools, and resources to help you take meaningful climate
            action. Download PDFs, explore useful links, and discover practical tips for sustainable living.
          </p>
        </div>

        {/* Downloadable Resources */}
        <section className="mb-20">
          <h2 className="text-4xl font-poppins font-bold text-charcoal mb-12">Downloadable Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon
              return (
                <Card
                  key={resource.id}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getCategoryColor(resource.category)}`}
                      >
                        {resource.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-poppins text-charcoal">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal/70 mb-4 leading-relaxed">{resource.description}</p>
                    <div className="text-sm text-charcoal/50 mb-6">{resource.type}</div>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white flex-1 rounded-full font-poppins font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-full bg-white/80 backdrop-blur-sm"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Climate Tips */}
        <section className="mb-20">
          <h2 className="text-4xl font-poppins font-bold text-charcoal mb-12">Quick Climate Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <Card
                  key={index}
                  className="border-0 bg-gradient-to-br from-green-50 to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-poppins font-semibold text-charcoal mb-3">{tip.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Useful Links */}
        <section className="mb-16">
          <h2 className="text-4xl font-poppins font-bold text-charcoal mb-12">Useful Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {climateLinks.map((link, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-poppins font-semibold text-charcoal">{link.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getCategoryColor(link.category)}`}
                    >
                      {link.category}
                    </span>
                  </div>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">{link.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full bg-white/80 backdrop-blur-sm font-poppins font-medium"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-poppins font-bold mb-4">Need More Personalized Guidance?</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Chat with EcoSage for personalized climate action recommendations based on your specific situation and
            goals.
          </p>
          <Button
            className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-3 font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Chat with EcoSage
          </Button>
        </section>
      </div>
    </div>
  )
}
