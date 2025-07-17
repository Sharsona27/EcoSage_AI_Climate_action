import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Globe, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-50 to-blue-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-poppins font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                EcoSage
              </span>
            </div>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Your wise climate companion, powered by AI to help you take meaningful action against climate change. Get
              climate tips, weather alerts, and eco-friendly advice instantly.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-600" },
                { icon: Twitter, href: "#", color: "hover:text-sky-500" },
                { icon: Instagram, href: "#", color: "hover:text-pink-600" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
              ].map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`p-2 rounded-full bg-white shadow-md text-charcoal ${color} transition-all duration-300 hover:shadow-lg hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold text-charcoal mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/chat", label: "Chat with EcoSage" },
                { href: "/about", label: "About Us" },
                { href: "/resources", label: "Resources" },
                { href: "/alerts", label: "Climate Alerts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal/70 hover:text-green-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold text-charcoal mb-4">Climate Organizations</h3>
            <ul className="space-y-3">
              {[
                { href: "https://unfccc.int", label: "UN Climate Change" },
                { href: "https://www.ipcc.ch", label: "IPCC" },
                { href: "https://www.greenpeace.org", label: "Greenpeace" },
                { href: "https://350.org", label: "350.org" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-green-600 transition-colors duration-200 hover:translate-x-1 inline-block flex items-center space-x-1"
                  >
                    <span>{link.label}</span>
                    <Globe className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-8 text-center">
          <p className="text-charcoal/60 flex items-center justify-center space-x-1">
            <span>© 2024 EcoSage. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for our planet. Supporting UN SDG 13 - Climate Action.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
