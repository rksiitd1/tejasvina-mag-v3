"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Calendar,
  User,
  Heart,
  Star,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Zap,
  Globe,
  NotebookIcon as Lotus,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TejasvinaMagazine() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const featuredArticles = [
    {
      id: 1,
      title: "The Sacred Geometry of Modern Consciousness",
      excerpt:
        "Exploring how ancient Indian mathematical principles illuminate contemporary spiritual awakening and digital mindfulness practices.",
      author: "Dr. Kavitha Menon",
      date: "Dec 15, 2024",
      category: "Philosophy",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "12 min read",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 2,
      title: "Raga in the Age of AI: Music's Eternal Soul",
      excerpt:
        "How classical Indian music theory provides a framework for understanding artificial intelligence and human creativity.",
      author: "Maestro Ravi Shankar Jr.",
      date: "Dec 12, 2024",
      category: "Arts & Technology",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "15 min read",
      color: "from-indigo-600 to-purple-700",
    },
    {
      id: 3,
      title: "The Quantum Vedanta: Science Meets Spirituality",
      excerpt: "Bridging ancient Vedantic wisdom with quantum physics to understand consciousness in the 21st century.",
      author: "Prof. Ananda Krishnan",
      date: "Dec 10, 2024",
      category: "Science & Spirituality",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "18 min read",
      color: "from-emerald-500 to-teal-600",
    },
  ]

  const issues = [
    {
      id: 1,
      title: "Śiśira 2024 - The Awakening Winter",
      subtitle: "शिशिर - The Season of Inner Fire",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "A profound exploration of consciousness, creativity, and the eternal dance between tradition and innovation.",
      articles: 16,
      featured: true,
      color: "from-rose-500 to-pink-600",
    },
    {
      id: 2,
      title: "Śarad 2024 - Autumn's Wisdom",
      subtitle: "शरद् - The Harvest of Knowledge",
      cover: "/placeholder.svg?height=400&width=300",
      description:
        "Stories of transformation, ancient wisdom meeting modern challenges, and the beauty of intellectual growth.",
      articles: 14,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 3,
      title: "Grīṣma 2024 - Summer's Radiance",
      subtitle: "ग्रीष्म - The Fire of Creation",
      cover: "/placeholder.svg?height=400&width=300",
      description: "Celebrating the luminous spirit of innovation, artistic expression, and cultural renaissance.",
      articles: 18,
      color: "from-yellow-500 to-amber-600",
    },
  ]

  const renderHome = () => (
    <div className="relative">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-50 to-indigo-100">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="mandala" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="10" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala)" />
          </svg>
        </div>
      </div>

      <div className="space-y-0 relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Dynamic Gradient Background */}
          <div
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              background: `radial-gradient(circle at ${(mousePosition.x / window.innerWidth) * 100}% ${(mousePosition.y / window.innerHeight) * 100}%, 
                rgba(251, 191, 36, 0.15) 0%, 
                rgba(239, 68, 68, 0.1) 25%, 
                rgba(99, 102, 241, 0.15) 50%, 
                rgba(16, 185, 129, 0.1) 75%, 
                rgba(0, 0, 0, 0.9) 100%)`,
            }}
          />

          {/* Floating Geometric Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute animate-float opacity-20`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              >
                <div
                  className={`w-16 h-16 border-2 border-gradient-to-r from-amber-400 to-rose-500 rounded-full opacity-30`}
                >
                  <div className="w-full h-full border border-indigo-400 rounded-full animate-spin-slow">
                    <div className="w-full h-full border border-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <div className="mb-12">
              {/* Sanskrit-inspired Logo */}
              <div className="mb-8 relative">
                <h1 className="text-8xl md:text-[12rem] font-bold mb-4 relative">
                  <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent font-serif tracking-wider">
                    तेजस्विना
                  </span>
                </h1>
                <div className="text-3xl md:text-5xl font-light tracking-[0.3em] text-amber-200 mb-2">TEJASVINĀ</div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
              </div>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-light max-w-4xl mx-auto">
                Where Ancient Wisdom Meets Contemporary Brilliance
                <br />
                <span className="text-lg text-amber-200 font-serif">प्राचीन ज्ञान और आधुनिक प्रतिभा का संगम</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 border border-amber-400/30"
                >
                  <Lotus className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Explore Consciousness
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400/50 text-amber-100 hover:bg-amber-400/10 hover:text-white px-12 py-4 text-lg bg-transparent backdrop-blur-sm rounded-full font-medium"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Subscribe to Wisdom
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-amber-200">
              <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center mb-2">
                <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <span className="text-xs font-light tracking-wider">SCROLL TO ENLIGHTEN</span>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
                <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 px-6 py-2 text-sm font-medium">
                  Featured Illuminations
                </Badge>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif">
                Narratives of Awakening
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Curated explorations where timeless wisdom meets contemporary insight, crafted for the intellectually
                curious and spiritually awakened
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white overflow-hidden relative hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${article.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                  >
                    <div className="absolute inset-[2px] bg-white rounded-lg"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={300}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                      <div className="absolute top-6 left-6">
                        <Badge className={`bg-gradient-to-r ${article.color} text-white border-0 shadow-lg`}>
                          {article.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <ArrowRight className="h-5 w-5 text-slate-700" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-700 transition-colors duration-300 leading-tight font-serif">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed font-light">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <span className="text-amber-600 font-medium">{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="lotus" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path
                    d="M12.5 5 L17.5 12.5 L12.5 20 L7.5 12.5 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.6"
                  />
                  <circle cx="12.5" cy="12.5" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lotus)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent font-serif">
                Our Philosophy
                <br />
                <span className="text-2xl md:text-3xl text-amber-200 font-light">हमारा दर्शन</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Lotus className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-200">सत्यम्</h3>
                <h4 className="text-xl font-semibold mb-4">Truth</h4>
                <p className="text-gray-300 leading-relaxed font-light">
                  We seek the eternal truths that transcend time, culture, and circumstance, illuminating the path to
                  authentic understanding.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-200">शिवम्</h3>
                <h4 className="text-xl font-semibold mb-4">Goodness</h4>
                <p className="text-gray-300 leading-relaxed font-light">
                  Every story we share aims to elevate consciousness, inspire positive action, and contribute to the
                  collective good of humanity.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-200">सुन्दरम्</h3>
                <h4 className="text-xl font-semibold mb-4">Beauty</h4>
                <p className="text-gray-300 leading-relaxed font-light">
                  We celebrate the aesthetic dimension of existence, finding beauty in ideas, expressions, and the
                  profound interconnectedness of all things.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  75K+
                </div>
                <div className="text-slate-600 font-medium">Conscious Readers</div>
                <div className="text-sm text-amber-600 font-serif">चेतन पाठक</div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  300+
                </div>
                <div className="text-slate-600 font-medium">Illuminating Articles</div>
                <div className="text-sm text-indigo-600 font-serif">प्रकाशमान लेख</div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  16
                </div>
                <div className="text-slate-600 font-medium">Seasonal Issues</div>
                <div className="text-sm text-emerald-600 font-serif">ऋतु अंक</div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  40+
                </div>
                <div className="text-slate-600 font-medium">Wisdom Keepers</div>
                <div className="text-sm text-rose-600 font-serif">ज्ञान रक्षक</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )

  const renderArticles = () => (
    <div className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif">
              All Illuminations
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            A comprehensive collection of transformative narratives and profound insights
          </p>
        </div>

        {/* Enhanced Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { name: "All", sanskrit: "सर्व", color: "from-slate-600 to-slate-700" },
            { name: "Philosophy", sanskrit: "दर्शन", color: "from-amber-600 to-orange-600" },
            { name: "Science & Spirituality", sanskrit: "विज्ञान", color: "from-indigo-600 to-purple-600" },
            { name: "Arts & Culture", sanskrit: "कला", color: "from-rose-600 to-pink-600" },
            { name: "Consciousness", sanskrit: "चेतना", color: "from-emerald-600 to-teal-600" },
            { name: "Innovation", sanskrit: "नवाचार", color: "from-blue-600 to-cyan-600" },
          ].map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className={`group hover:bg-gradient-to-r hover:${category.color} hover:text-white bg-transparent border-2 border-slate-200 hover:border-transparent transition-all duration-300 px-6 py-3 rounded-full`}
            >
              <span className="font-medium">{category.name}</span>
              <span className="ml-2 text-xs opacity-70 font-serif">{category.sanskrit}</span>
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...featuredArticles, ...featuredArticles].map((article, index) => (
            <Card
              key={`${article.id}-${index}`}
              className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white overflow-hidden relative hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${article.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              >
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>
              </div>

              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${article.color} text-white border-0 shadow-lg`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors font-serif">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3 font-light">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <span className="text-amber-600 font-medium">{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderIssues = () => (
    <div className="py-32 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif">
              Seasonal Chronicles
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light mb-4">
            Each issue flows with the rhythm of nature, capturing the essence of seasons and consciousness
          </p>
          <p className="text-lg text-amber-600 font-serif">प्रत्येक अंक प्रकृति की लय के साथ बहता है</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {issues.map((issue, index) => (
            <Card
              key={issue.id}
              className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white overflow-hidden relative hover:-translate-y-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {issue.featured && (
                <div className="absolute top-6 right-6 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white border-0 shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Latest
                  </Badge>
                </div>
              )}

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${issue.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              >
                <div className="absolute inset-[3px] bg-white rounded-lg"></div>
              </div>

              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    src={issue.cover || "/placeholder.svg"}
                    alt={issue.title}
                    width={300}
                    height={400}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`}
                  ></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{issue.articles} Illuminations</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-700 transition-colors font-serif">
                      {issue.title}
                    </h3>
                    <p className="text-amber-600 font-serif text-sm">{issue.subtitle}</p>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed font-light">{issue.description}</p>
                  <Button
                    className={`w-full bg-gradient-to-r ${issue.color} hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-500 rounded-full font-medium`}
                  >
                    <Lotus className="mr-2 h-4 w-4" />
                    Explore Issue
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 px-4 py-2">
                About Tejasvinā
              </Badge>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif leading-tight">
              Where Ancient Wisdom Illuminates Modern Consciousness
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                <strong className="text-amber-700 font-serif">Tejasvinā</strong> (तेजस्विना) emerges from the Sanskrit
                root meaning "brilliant," "radiant," and "filled with divine light"—embodying our mission to illuminate
                the intersection where timeless wisdom meets contemporary brilliance.
              </p>
              <p>
                We are not merely a magazine; we are curators of consciousness, architects of awakening, and guardians
                of the sacred dialogue between ancient knowledge and modern innovation. Each narrative we craft is
                designed to ignite the inner fire of intellectual curiosity and spiritual growth.
              </p>
              <p>
                Our contributors are visionaries, scholars, artists, and seekers who understand that true progress comes
                not from abandoning our roots, but from allowing them to nourish new growth. We explore the profound
                connections between Vedantic philosophy and quantum physics, between classical arts and digital
                innovation, between meditation and neuroscience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  2024
                </div>
                <div className="text-sm text-slate-500 font-medium">Established</div>
                <div className="text-xs text-amber-600 font-serif">स्थापित</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  75K+
                </div>
                <div className="text-sm text-slate-500 font-medium">Conscious Readers</div>
                <div className="text-xs text-indigo-600 font-serif">चेतन पाठक</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  40+
                </div>
                <div className="text-sm text-slate-500 font-medium">Wisdom Keepers</div>
                <div className="text-xs text-emerald-600 font-serif">ज्ञान रक्षक</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=700&width=600"
                alt="About Tejasvinā"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-15 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="absolute -bottom-12 -right-12 bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-8 rounded-3xl shadow-2xl max-w-xs">
              <Lotus className="h-12 w-12 mb-4 text-amber-400" />
              <div className="text-sm font-medium mb-1">Stories with Soul</div>
              <div className="text-xs text-amber-200 font-serif">आत्मा के साथ कहानियाँ</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <Card className="p-12 border-0 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <Zap className="h-16 w-16 text-amber-600 mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-6 font-serif">Our Mission</h3>
            <p className="text-lg text-slate-700 leading-relaxed font-light mb-4">
              To create a sacred space where ancient wisdom and contemporary insight converge, fostering a global
              community of intellectually curious and spiritually awakened individuals.
            </p>
            <p className="text-amber-700 font-serif text-sm">हमारा मिशन: ज्ञान और चेतना का संगम</p>
          </Card>

          <Card className="p-12 border-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <Globe className="h-16 w-16 text-indigo-600 mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-6 font-serif">Our Vision</h3>
            <p className="text-lg text-slate-700 leading-relaxed font-light mb-4">
              A world where every narrative becomes a bridge between hearts, every insight sparks transformation, and
              every reader discovers their own inner radiance through the power of conscious storytelling.
            </p>
            <p className="text-indigo-700 font-serif text-sm">हमारा दृष्टिकोण: चेतना की कहानियों से रूपांतरण</p>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-16 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="contact-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5" />
                  <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-pattern)" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="mb-8">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent font-serif">
                  Connect with Consciousness
                </h3>
                <p className="text-amber-200 font-serif text-lg">चेतना से जुड़ें</p>
              </div>

              <p className="text-gray-300 mb-12 text-lg leading-relaxed font-light">
                Whether you wish to contribute your wisdom, share your insights, or simply connect with our community of
                conscious creators, we welcome your presence in our sacred circle.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">wisdom@tejasvina.com</div>
                    <div className="text-sm text-gray-400">For submissions and collaborations</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">+1 (555) WISDOM</div>
                    <div className="text-sm text-gray-400">Connect with our editorial team</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">New York & Mumbai</div>
                    <div className="text-sm text-gray-400">Bridging East and West</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3"
                />
                <Textarea
                  placeholder="Share your thoughts, ideas, or questions..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl px-6 py-4"
                />
                <Button className="w-full bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 rounded-full py-4 text-lg font-medium">
                  <Lotus className="mr-2 h-5 w-5" />
                  Send Your Message
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent font-serif">
                तेजस्विना
              </div>
              <div className="hidden md:block text-sm font-light tracking-wider text-slate-600">TEJASVINĀ</div>
            </div>

            <nav className="hidden md:flex items-center space-x-12">
              {[
                { name: "Home", id: "home", sanskrit: "गृह" },
                { name: "Articles", id: "articles", sanskrit: "लेख" },
                { name: "Issues", id: "issues", sanskrit: "अंक" },
                { name: "About", id: "about", sanskrit: "परिचय" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-amber-600"
                      : isScrolled
                        ? "text-slate-700 hover:text-amber-600"
                        : "text-white hover:text-amber-200"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{item.name}</span>
                    <span className="text-xs opacity-60 font-serif">{item.sanskrit}</span>
                  </div>
                </button>
              ))}
            </nav>

            <Button className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 text-white rounded-full px-8 py-2 font-medium shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
              <Lotus className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {activeSection === "home" && renderHome()}
        {activeSection === "articles" && renderArticles()}
        {activeSection === "issues" && renderIssues()}
        {activeSection === "about" && renderAbout()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="footer-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <path
                  d="M15 5 L25 15 L15 25 L5 15 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent mb-2 font-serif">
                  तेजस्विना
                </div>
                <div className="text-amber-200 text-sm font-light tracking-wider">TEJASVINĀ</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed font-light">
                Illuminating the path where ancient wisdom meets contemporary brilliance, fostering consciousness
                through transformative storytelling.
              </p>
              <p className="text-amber-200 font-serif text-sm">प्राचीन ज्ञान और आधुनिक प्रतिभा का संगम</p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-amber-200">Navigation</h4>
              <div className="space-y-3">
                {[
                  { name: "Home", sanskrit: "गृह" },
                  { name: "Articles", sanskrit: "लेख" },
                  { name: "Issues", sanskrit: "अंक" },
                  { name: "About", sanskrit: "परिचय" },
                ].map((item) => (
                  <div key={item.name}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-amber-200 transition-colors flex items-center gap-2"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs opacity-60 font-serif">{item.sanskrit}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-indigo-200">Wisdom Categories</h4>
              <div className="space-y-3">
                {[
                  { name: "Philosophy", sanskrit: "दर्शन" },
                  { name: "Science & Spirituality", sanskrit: "विज्ञान" },
                  { name: "Arts & Culture", sanskrit: "कला" },
                  { name: "Consciousness", sanskrit: "चेतना" },
                ].map((item) => (
                  <div key={item.name}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-indigo-200 transition-colors flex items-center gap-2"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs opacity-60 font-serif">{item.sanskrit}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-rose-200">Join Our Circle</h4>
              <p className="text-gray-300 mb-6 font-light">
                Subscribe to receive wisdom, insights, and transformative stories directly to your consciousness.
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-4 py-2"
                />
                <Button className="w-full bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 rounded-full py-2">
                  <Lotus className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 text-center">
            <p className="text-gray-400 font-light">
              &copy; 2024 Tejasvinā Magazine. All rights reserved.
              <span className="ml-2 font-serif text-amber-300">सर्वाधिकार सुरक्षित</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        .font-serif {
          font-family: 'Noto Sans Devanagari', serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
