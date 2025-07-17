import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Target, Award, Leaf } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      description:
        "Climate scientist with 15+ years of experience in environmental research and sustainable technology development.",
      avatar: "S",
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "Alex Rodriguez",
      role: "CTO",
      description:
        "AI engineer specializing in natural language processing and machine learning applications for environmental solutions.",
      avatar: "A",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Maya Patel",
      role: "Head of Sustainability",
      description:
        "Environmental policy expert with extensive experience in corporate sustainability and climate action initiatives.",
      avatar: "M",
      gradient: "from-teal-400 to-teal-600",
    },
  ]

  const values = [
    {
      icon: Globe,
      title: "Science-Based",
      description:
        "All our recommendations are grounded in the latest climate science and research from leading environmental organizations.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Users,
      title: "Inclusive",
      description:
        "Climate action should be accessible to everyone, regardless of background, income, or location. We design for diversity and inclusion.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Award,
      title: "Empowering",
      description:
        "We believe in empowering individuals with knowledge and tools to make informed decisions about their environmental impact.",
      color: "from-teal-400 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full px-4 py-2 shadow-lg mb-6">
            <Leaf className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-charcoal">About Our Mission</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-charcoal mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">EcoSage</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals and communities to take meaningful climate action through AI-powered guidance and
            personalized sustainability solutions.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-charcoal mb-6">Our Mission</h2>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                EcoSage was created with a simple yet powerful mission: to make climate action accessible, personalized,
                and effective for everyone. We believe that every individual has the power to make a difference in the
                fight against climate change.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Through advanced AI technology, we provide smart, informed guidance that helps people take practical
                steps toward sustainability. From daily habits to major life decisions, EcoSage is your trusted
                companion on the journey to a more sustainable future.
              </p>
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-charcoal">Supporting UN SDG 13</h3>
                  <p className="text-charcoal/70">Climate Action - Take urgent action to combat climate change</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center shadow-xl">
                <Globe className="h-12 w-12 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-poppins font-bold text-charcoal mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "10K+", label: "Active Users" },
                    { number: "50K+", label: "Climate Actions" },
                    { number: "25%", label: "Avg. Carbon Reduction" },
                    { number: "100+", label: "Partner Organizations" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="text-2xl font-poppins font-bold text-green-600">{stat.number}</div>
                      <div className="text-xs text-charcoal/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-poppins font-bold text-charcoal text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-poppins font-bold text-charcoal text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center shadow-xl text-white text-2xl font-poppins font-bold group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-charcoal mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 shadow-2xl">
          <div className="text-center">
            <h2 className="text-4xl font-poppins font-bold text-charcoal mb-6">Our Partners</h2>
            <p className="text-lg text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              We collaborate with leading environmental organizations, research institutions, and climate action groups
              to ensure our guidance is accurate and impactful.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {["UN Environment", "Climate Action Network", "Green Tech Alliance", "Sustainability Institute"].map(
                (partner, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-sm font-poppins font-medium text-charcoal">{partner}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
