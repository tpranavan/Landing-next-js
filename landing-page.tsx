"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Rocket,
  Globe,
  BarChart3,
  Menu,
  Sparkles,
  X,
  PlugZap,
  PaintbrushVertical,
  BriefcaseBusiness,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function StartupLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
                
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                FortronX
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
                              <a
                href="tel:+94740696389"
                className="inline-flex items-center justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">Get Started</Button></a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link href="#about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                              <a
                href="tel:+94740696389"
                className="inline-flex items-center justify-center">
                <div className="flex flex-col space-y-2 pt-4">

                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">Get Started</Button>
                </div>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden ">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-0">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Trusted by 20+ Clients
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              <span className="block text-gray-900 mb-1 sm:mb-2">We</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Supercharge
              </span>
              <span className="block text-gray-900">Your Business</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Transform your digital presence with our comprehensive marketing, design, and technology solutions. We're
              your trusted partner for sustainable growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
              <a
                href="tel:+94740696389"
                className="inline-flex items-center justify-center"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              </Button>
            </div>
          </div>
        </div>
        
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools and features designed to accelerate your startup journey from idea to
              IPO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Built for speed with modern architecture and optimized performance.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security with end-to-end encryption and compliance.",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Scale",
                description: "Deploy worldwide with our top level engineering",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Advanced Analytics",
                description: "Deep insights and real-time analytics to drive growth.",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Collaboration",
                description: "Seamless collaboration for distributed goals.",
                color: "from-indigo-400 to-purple-500",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Auto Scaling",
                description: "Automatically scale resources based on demand.",
                color: "from-red-400 to-pink-500",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>{" "}
              drives your success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology, strategic marketing, and exceptional design to transform your vision into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technology Column */}
            <div className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <PlugZap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4">Technology</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Building robust, scalable solutions with cutting-edge technologies that power your growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Globe className="w-5 h-5" />,
                        title: "Web Development",
                        desc: "Full-stack applications with modern frameworks",
                      },
                      {
                        icon: <BarChart3 className="w-5 h-5" />,
                        title: "Data Analytics",
                        desc: "AI-powered insights and business intelligence",
                      },
                      {
                        icon: <Shield className="w-5 h-5" />,
                        title: "Cloud Infrastructure",
                        desc: "Scalable, secure cloud architecture",
                      },
                      {
                        icon: <Rocket className="w-5 h-5" />,
                        title: "API Development",
                        desc: "Robust integrations and microservices",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      >
                        <div className="text-blue-500 mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600">
                    Explore Tech Solutions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Digital Marketing Column */}
            <div className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BriefcaseBusiness className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4">Digital Marketing</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Strategic marketing campaigns that amplify your brand and drive measurable growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Users className="w-5 h-5" />,
                        title: "Social Media Marketing",
                        desc: "Engaging campaigns across all platforms",
                      },
                      {
                        icon: <Globe className="w-5 h-5" />,
                        title: "SEO & Content",
                        desc: "Organic growth through strategic content",
                      },
                      {
                        icon: <Zap className="w-5 h-5" />,
                        title: "Paid Advertising",
                        desc: "ROI-focused PPC and social ads",
                      },
                      {
                        icon: <BarChart3 className="w-5 h-5" />,
                        title: "Analytics & Insights",
                        desc: "Data-driven marketing optimization",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                      >
                        <div className="text-purple-500 mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                    Boost Your Marketing
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Design Column */}
            <div className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <PaintbrushVertical className="w-10 h-10 text-white" />
                    
                  </div>
                  <CardTitle className="text-2xl mb-4">Design</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    Beautiful, user-centered designs that create memorable experiences and drive conversions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Users className="w-5 h-5" />,
                        title: "UI/UX Design",
                        desc: "Intuitive interfaces that users love",
                      },
                      {
                        icon: <Globe className="w-5 h-5" />,
                        title: "Brand Identity",
                        desc: "Memorable logos and brand systems",
                      },
                      {
                        icon: <Rocket className="w-5 h-5" />,
                        title: "Product Design",
                        desc: "End-to-end product experiences",
                      },
                      {
                        icon: <Star className="w-5 h-5" />,
                        title: "Design Systems",
                        desc: "Scalable design frameworks",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                      >
                        <div className="text-emerald-500 mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600">
                    See Our Designs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Full-service solutions tailored to your needs</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to transform your startup?</h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              Join thousands of successful startups who've accelerated their growth with FortronX. Start your free
              trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="tel:+94740696389"
                className="inline-flex items-center justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                Lets Make an Appoinment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              </a>
            </div>
            <div className="flex items-center justify-center space-x-8 pt-8 text-purple-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Best at service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>80% customer retaination</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>24x7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
               <span className="text-xl font-bold">FortronX</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering startups to build, scale, and succeed with cutting-edge tools and expert guidance.
              </p>
              <div className="flex space-x-4">

                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                >
                  LinkedIn
                </Button>

              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} FortronX. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
