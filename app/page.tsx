"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronLeft, ChevronRight, Star, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Facebook, Linkedin, Youtube, Instagram, Phone, Mail } from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const [campusSlide, setCampusSlide] = useState(0)
  const [isCampusTransitioning, setIsCampusTransitioning] = useState(false)

  const [phoneSlide, setPhoneSlide] = useState(0)
  const [isPhoneTransitioning, setIsPhoneTransitioning] = useState(false)

  const phoneContent = [
    {
      title: "Quality",
      subtitle: "Mentorship",
      description: "Learn from industry experts.",
      bgColor: "from-blue-400 to-blue-600",
      illustration: (
        <div className="w-20 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Job",
      subtitle: "Alerts",
      description: "Stay updated with the latest openings.",
      bgColor: "from-purple-400 to-purple-600",
      illustration: (
        <div className="w-20 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
          <div className="relative">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Complete",
      subtitle: "Question Practice",
      description: "Master concepts with practice.",
      bgColor: "from-yellow-400 to-yellow-600",
      illustration: (
        <div className="w-20 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPhoneTransitioning(true)
      setPhoneSlide((prev) => (prev + 1) % phoneContent.length)
      setTimeout(() => setIsPhoneTransitioning(false), 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [phoneContent.length])

  const slides = [
    { bg: "bg-amber-900", gradient: "from-amber-50 to-orange-50" },
    { bg: "bg-blue-900", gradient: "from-blue-50 to-purple-50" },
    { bg: "bg-green-900", gradient: "from-green-50 to-teal-50" },
  ]

  const campusSlides = [
    {
      title: "Smart Learning, On Campus",
      points: [
        "Centralized online classes by expert mentors",
        "Live lectures streamed to LED smart rooms",
        "Offline teaching assistants for on-the-spot support",
      ],
      bgColor: "bg-orange-500",
      titleColor: "text-yellow-300",
      image: "/modern-classroom-with-smart-technology.png",
      imageAlt: "Modern classroom with smart technology",
    },
    {
      title: "Go Beyond the Syllabus",
      points: [
        "Centralized online classes by expert mentors",
        "Live lectures streamed to LED smart rooms",
        "Offline teaching assistants for on-the-spot support",
      ],
      bgColor: "bg-green-600",
      titleColor: "text-yellow-300",
      image: "/students-studying-with-laptops-and-books.png",
      imageAlt: "Students studying with laptops and books",
    },
    {
      title: "Access to Hired",
      points: [
        "Centralized online classes by expert mentors",
        "Live lectures streamed to LED smart rooms",
        "Offline teaching assistants for on-the-spot support",
      ],
      bgColor: "bg-red-600",
      titleColor: "text-yellow-300",
      image: "/professional-office.png",
      imageAlt: "Professional office environment with people working",
    },
  ]

  const handleSlideChange = (direction: "next" | "prev") => {
    if (isTransitioning) return

    setIsTransitioning(true)

    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleCampusSlideChange = (direction: "next" | "prev") => {
    if (isCampusTransitioning) return

    setIsCampusTransitioning(true)

    if (direction === "next") {
      setCampusSlide((prev) => (prev + 1) % campusSlides.length)
    } else {
      setCampusSlide((prev) => (prev - 1 + campusSlides.length) % campusSlides.length)
    }

    setTimeout(() => setIsCampusTransitioning(false), 500)
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">key</span>
            <span className="text-2xl font-bold text-orange-500">N</span>
            <span className="text-2xl font-bold text-black">coders</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-gray-700 font-medium">Upskilling</span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </div>
            <span className="text-gray-700 font-medium cursor-pointer">Hiring</span>
            <span className="text-gray-700 font-medium cursor-pointer">Campus Mate</span>
            <span className="text-gray-700 font-medium cursor-pointer">Blogs</span>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-5 h-5 text-gray-700" />
            </Button>

            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 bg-transparent"
            >
              Login
            </Button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />

          <div className="absolute right-0 w-80 h-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">key</span>
                <span className="text-2xl font-bold text-orange-500">N</span>
                <span className="text-2xl font-bold text-black">coders</span>
              </div>
              <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-5 h-5 text-gray-700" />
              </Button>
            </div>

            <nav className="p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 cursor-pointer py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-lg">Upskilling</span>
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                </div>
                <div className="cursor-pointer py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-lg">Hiring</span>
                </div>
                <div className="cursor-pointer py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-lg">Campus Mate</span>
                </div>
                <div className="cursor-pointer py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-lg">Blogs</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section
        className={`bg-gradient-to-r ${slides[currentSlide].gradient} px-4 py-8 transition-all duration-500 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl h-80">
            {/* Sliding cards container */}
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${slide.bg} rounded-3xl h-full w-full flex-shrink-0 relative flex items-center justify-center`}
                >
                  {/* Slide content can be customized here */}
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Slide {index + 1}</h3>
                    <p className="text-white/80">Discover amazing opportunities</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => handleSlideChange("prev")}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => handleSlideChange("next")}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Carousel dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-orange-500 w-12" : "bg-white/30 w-6"
                  }`}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true)
                      setCurrentSlide(index)
                      setTimeout(() => setIsTransitioning(false), 500)
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Classroom to Career Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-blue-50"></div>

        {/* Decorative circles */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200 rounded-full -translate-x-1/2 opacity-60"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300 rounded-full translate-x-1/2 opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            {/* Left student image */}
            <div className="flex-1 flex justify-start">
              <div className="relative">
                <div className="w-64 h-64 bg-orange-200 rounded-full absolute -top-8 -left-8 opacity-50"></div>
                <img
                  src="/young-student-with-glasses-wearing-plaid-shirt-and.png"
                  alt="Student with laptop"
                  className="relative z-10 w-64 h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Center content */}
            <div className="flex-1 text-center px-8">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-orange-500">From Classroom</span> <span className="text-black">to Career</span>
              </h1>
              <p className="text-gray-600 text-xl mb-8">Learn. Build. Lead in Tech.</p>

              {/* Decorative dashed circle with button */}
              <div className="relative inline-block">
                <div className="w-48 h-48 border-4 border-dashed border-gray-300 rounded-full flex items-center justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full">
                    Join Us
                  </Button>
                </div>

                {/* Rocket icon */}
                <div className="absolute -top-4 -right-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                </div>

                {/* Dashed line to right */}
                <div className="absolute top-1/2 left-full w-32 border-t-2 border-dashed border-gray-300"></div>
              </div>
            </div>

            {/* Right professional image */}
            <div className="flex-1 flex justify-end">
              <img
                src="/professional-young-man-in-business-suit-smiling-wh.png"
                alt="Professional with laptop"
                className="w-64 h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-orange-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-orange-500">What</span> <span className="text-black">We Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn skills, get hired, and grow with your campus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative p-8 text-center bg-white rounded-3xl shadow-lg border-0 h-80 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Text Content with Animation */}
              <div className="flex flex-col items-center transition-all duration-500 ease-in-out group-hover:-translate-y-4">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 transition-all duration-500 ease-in-out group-hover:text-3xl group-hover:mb-2">
                  Upskilling
                </h3>
                <p className="text-gray-700 text-lg transition-all duration-500 ease-in-out group-hover:text-xl group-hover:font-medium">
                  8+ Hybrid Courses
                </p>
              </div>

              {/* Illustration */}
              <div className="flex justify-center items-end h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-8 group-hover:translate-y-0">
                <img
                  src="/learning-books-and-laptop.png"
                  alt="Learning and upskilling illustration"
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </Card>

            <Card className="group relative p-8 text-center bg-white rounded-3xl shadow-lg border-0 h-80 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Text Content with Animation */}
              <div className="flex flex-col items-center transition-all duration-500 ease-in-out group-hover:-translate-y-4">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 transition-all duration-500 ease-in-out group-hover:text-3xl group-hover:mb-2">
                  Hiring
                </h3>
                <p className="text-gray-700 text-lg transition-all duration-500 ease-in-out group-hover:text-xl group-hover:font-medium">
                  Career Support
                </p>
              </div>

              {/* Illustration */}
              <div className="flex justify-center items-end h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-8 group-hover:translate-y-0">
                <img
                  src="/career-growth-illustration.png"
                  alt="Career growth and hiring illustration"
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </Card>

            <Card className="group relative p-8 text-center bg-white rounded-3xl shadow-lg border-0 h-80 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Text Content with Animation */}
              <div className="flex flex-col items-center transition-all duration-500 ease-in-out group-hover:-translate-y-4">
                <h3 className="text-2xl font-bold text-orange-500 mb-4 transition-all duration-500 ease-in-out group-hover:text-3xl group-hover:mb-2">
                  CampusMate
                </h3>
                <p className="text-gray-700 text-lg transition-all duration-500 ease-in-out group-hover:text-xl group-hover:font-medium">
                  Campus Partner
                </p>
              </div>

              {/* Illustration */}
              <div className="flex justify-center items-end h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-8 group-hover:translate-y-0">
                <img
                  src="/campus-networking-illustration.png"
                  alt="Campus networking and collaboration illustration"
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="relative py-16 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-12">
            {/* Left side - Content */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-orange-500">Every day</span> <span className="text-black">brings a new</span>
                <br />
                <span className="text-black">reason to connect!</span>
              </h2>

              <p className="text-gray-600 text-xl mb-8 max-w-lg">
                For brilliant minds, we've crafted the perfect platform
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                Join Us
              </button>
            </div>

            {/* Right side - Phone mockup and woman */}
            <div className="flex-1 relative">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Dashed lines */}
                <svg
                  className="absolute top-10 left-10 w-20 h-20 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                >
                  <path d="M0,0 L80,0 M0,20 L80,20 M0,40 L80,40 M0,60 L80,60" />
                </svg>
                <svg
                  className="absolute top-20 right-10 w-20 h-20 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                >
                  <path d="M0,0 L0,80 M20,0 L20,80 M40,0 L40,80 M60,0 L60,80" />
                </svg>

                {/* Rocket icon */}
                <div className="absolute bottom-20 left-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L13 8h5l-4 3 1.5 5L10 13l-5.5 3L6 11l-4-3h5l3-6z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Orange circular background */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-orange-400 rounded-full opacity-90 -z-10"></div>

              <div className="relative z-10 flex items-center justify-center gap-4">
                {/* Phone mockup */}
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-64 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>

                      <div className="pt-8 px-6 h-full flex flex-col">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-800">keyNcoders</h3>
                        </div>

                        {/* Content card with transitions */}
                        <div
                          className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6 transition-all duration-500 ${isPhoneTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"}`}
                        >
                          <div className="text-center">
                            {phoneContent[phoneSlide].illustration}

                            <h4 className="text-2xl font-bold text-gray-800 mb-1">{phoneContent[phoneSlide].title}</h4>
                            <p className="text-xl text-gray-800 mb-4">{phoneContent[phoneSlide].subtitle}</p>
                            <p className="text-gray-600 text-sm">{phoneContent[phoneSlide].description}</p>
                          </div>
                        </div>

                        {/* Colored section at bottom with smooth color transition */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r ${phoneContent[phoneSlide].bgColor} rounded-b-[2.5rem] transition-all duration-500`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/young-woman-with-blonde-hair-in-white-casual-top-l.png"
                    alt="Woman using phone"
                    className="w-32 h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Up Section */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-12">
            {/* Left side - Statistics */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-12">
                <span className="text-orange-500">Level Up</span>{" "}
                <span className="text-black">at a Center Near You</span>
              </h2>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-black mb-2">10k +</div>
                  <div className="text-gray-600 text-lg">Students Enrolled</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">50 +</div>
                  <div className="text-gray-600 text-lg">Partnered Campuses</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">3k +</div>
                  <div className="text-gray-600 text-lg">Students Placed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">500 +</div>
                  <div className="text-gray-600 text-lg">Live Sessions Delivered</div>
                </div>
              </div>
            </div>

            {/* Right side - Location cards with map pattern */}
            <div className="flex-1 relative">
              {/* Dotted map pattern background */}
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-20 gap-1 h-full w-full">
                  {Array.from({ length: 400 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Location cards */}
              <div className="relative z-10 space-y-6">
                <div className="ml-auto w-80">
                  <Card className="bg-white rounded-2xl shadow-lg border-0 p-4">
                    <img
                      src="/classroom-kazaribagh.png"
                      alt="Hazaribagh classroom"
                      className="w-full h-32 object-cover rounded-xl mb-3"
                    />
                    <p className="text-center font-semibold text-gray-800">Hazaribagh, Jharkhand</p>
                  </Card>
                  {/* Location pin */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="w-80">
                  <Card className="bg-white rounded-2xl shadow-lg border-0 p-4">
                    <img
                      src="/classroom-ranchi.png"
                      alt="Ranchi classroom"
                      className="w-full h-32 object-cover rounded-xl mb-3"
                    />
                    <p className="text-center font-semibold text-gray-800">Ranchi, Jharkhand</p>
                  </Card>
                  {/* Location pin */}
                  <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Connecting lines */}
              <div className="absolute top-1/4 right-1/4 w-32 h-px bg-orange-400 transform rotate-45"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-px bg-orange-400 transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Courses Section */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200 rounded-full -translate-x-1/2 opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-orange-500">Explore</span> <span className="text-black">Our Courses</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">Boost your career with in-demand skills.</p>

            {/* Progress bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-1/3 h-2 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Java Course */}
            <Card className="group p-0 text-center bg-white rounded-3xl shadow-lg border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="group-hover:bg-black group-hover:text-white transition-all duration-500 p-8 group-hover:rounded-t-3xl">
                <div className="relative group-hover:flex group-hover:items-center group-hover:justify-center group-hover:gap-4 transition-all duration-500">
                  {/* Java Logo */}
                  <div className="w-16 h-16 mx-auto mb-6 group-hover:mb-0 group-hover:mx-0 bg-orange-100 group-hover:bg-transparent rounded-2xl flex items-center justify-center transition-all duration-1000 transform group-hover:-translate-x-8 group-hover:-translate-y-2">
                    <svg
                      className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors duration-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                    </svg>
                  </div>

                  {/* Java Text */}
                  <h3 className="text-2xl font-bold text-black group-hover:text-white mb-2 group-hover:mb-0 transition-all duration-1000 transform group-hover:translate-x-8 group-hover:-translate-y-2">
                    Java
                  </h3>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4 group-hover:mt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                    </div>
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div className="text-white text-lg font-semibold">20+ topics</div>
                  <div className="text-white text-lg">6 hours</div>
                </div>
              </div>

              <div className="p-8 pt-4">
                <p className="text-orange-500 font-semibold mb-2">Mentor</p>
                <p className="text-gray-600 text-sm mb-2">Ayush Singh</p>
                <p className="text-gray-500 text-xs mb-4">Btech-IIT KHARAGPUR</p>

                {/* Star rating */}
                <div className="flex justify-center mb-4">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>

                <p className="text-2xl font-bold text-orange-500 mb-4">$300</p>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-full">
                    Explore more
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* C++ Course */}
            <Card className="group p-0 text-center bg-white rounded-3xl shadow-lg border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="group-hover:bg-black group-hover:text-white transition-all duration-500 p-8 group-hover:rounded-t-3xl">
                <div className="relative group-hover:flex group-hover:items-center group-hover:justify-center group-hover:gap-4 transition-all duration-500">
                  {/* C++ Logo */}
                  <div className="w-16 h-16 mx-auto mb-6 group-hover:mb-0 group-hover:mx-0 bg-blue-100 group-hover:bg-transparent rounded-2xl flex items-center justify-center transition-all duration-1000 transform group-hover:-translate-x-8 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C++</span>
                    </div>
                  </div>

                  {/* C++ Text */}
                  <h3 className="text-2xl font-bold text-black group-hover:text-white mb-2 group-hover:mb-0 transition-all duration-1000 transform group-hover:translate-x-8 group-hover:-translate-y-2">
                    C++
                  </h3>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4 group-hover:mt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                    </div>
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div className="text-white text-lg font-semibold">20+ topics</div>
                  <div className="text-white text-lg">6 hours</div>
                </div>
              </div>

              <div className="p-8 pt-4">
                <p className="text-orange-500 font-semibold mb-2">Mentor</p>
                <p className="text-gray-600 text-sm mb-2">Ayush Singh</p>
                <p className="text-gray-500 text-xs mb-4">Btech-IIT KHARAGPUR</p>

                {/* Star rating */}
                <div className="flex justify-center mb-4">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>

                <p className="text-2xl font-bold text-orange-500 mb-4">$300</p>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-full">
                    Explore more
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* OS Course */}
            <Card className="group p-0 text-center bg-white rounded-3xl shadow-lg border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="group-hover:bg-black group-hover:text-white transition-all duration-500 p-8 group-hover:rounded-t-3xl">
                <div className="relative group-hover:flex group-hover:items-center group-hover:justify-center group-hover:gap-4 transition-all duration-500">
                  {/* OS Logo */}
                  <div className="w-16 h-16 mx-auto mb-6 group-hover:mb-0 group-hover:mx-0 bg-green-100 group-hover:bg-transparent rounded-2xl flex items-center justify-center transition-all duration-1000 transform group-hover:-translate-x-8 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">OS</span>
                    </div>
                  </div>

                  {/* OS Text */}
                  <h3 className="text-2xl font-bold text-black group-hover:text-white mb-2 group-hover:mb-0 transition-all duration-1000 transform group-hover:translate-x-8 group-hover:-translate-y-2">
                    OS
                  </h3>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4 group-hover:mt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-red-500"></div>
                    </div>
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div className="text-white text-lg font-semibold">20+ topics</div>
                  <div className="text-white text-lg">6 hours</div>
                </div>
              </div>

              <div className="p-8 pt-4">
                <p className="text-orange-500 font-semibold mb-2">Mentor</p>
                <p className="text-gray-600 text-sm mb-2">Ayush Singh</p>
                <p className="text-gray-500 text-xs mb-4">Btech-IIT KHARAGPUR</p>

                {/* Star rating */}
                <div className="flex justify-center mb-4">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>

                <p className="text-2xl font-bold text-orange-500 mb-4">$300</p>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-full">
                    Explore more
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full">
              Explore More
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Mate Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
        {/* Background students image */}
        <div className="absolute top-8 right-8 opacity-60">
          <div className="w-64 h-32 bg-yellow-200 rounded-full flex items-center justify-center">
            <img
              src="/campus-mate-students.png"
              alt="Students collaborating"
              className="w-48 h-24 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-orange-500">Campus</span>
              <span className="text-black">Mate</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Partnering with campuses to empower student growth and careers.
            </p>
          </div>

          {/* Main Orange Component with Navigation */}
          <div className="relative mb-8">
            {/* Left Navigation Arrow */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-orange-200 hover:bg-orange-300 rounded-full flex items-center justify-center transition-colors z-20 shadow-lg"
              onClick={() => handleCampusSlideChange("prev")}
              disabled={isCampusTransitioning}
            >
              <ChevronLeft className="w-8 h-8 text-orange-600" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-orange-200 hover:bg-orange-300 rounded-full flex items-center justify-center transition-colors z-20 shadow-lg"
              onClick={() => handleCampusSlideChange("next")}
              disabled={isCampusTransitioning}
            >
              <ChevronRight className="w-8 h-8 text-orange-600" />
            </button>

            {/* Orange Card Component */}
            <div className="mx-32">
              <div
                className={`${campusSlides[campusSlide].bgColor} rounded-3xl p-12 flex items-center gap-20 min-h-[100px] transition-all duration-700 ease-in-out shadow-2xl`}
              >
                {/* Left side - Content */}
                <div className="flex-1 text-white">
                  <h3 className={`text-4xl font-bold mb-8 ${campusSlides[campusSlide].titleColor}`}>
                    {campusSlides[campusSlide].title}
                  </h3>
                  <ul className="space-y-4 text-lg">
                    {campusSlides[campusSlide].points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-300 mr-4 mt-1 text-xl">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right side - Image */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <img
                      src={campusSlides[campusSlide].image || "/placeholder.svg"}
                      alt={campusSlides[campusSlide].imageAlt}
                      className="w-80 h-64 object-cover rounded-2xl shadow-xl transition-all duration-700 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center space-x-3 mb-8">
            {campusSlides.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === campusSlide ? "bg-orange-500 w-16" : "bg-gray-300 w-8"
                }`}
                onClick={() => {
                  if (!isCampusTransitioning) {
                    setIsCampusTransitioning(true)
                    setCampusSlide(index)
                    setTimeout(() => setIsCampusTransitioning(false), 500)
                  }
                }}
              />
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore More →
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Hiring Support Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-orange-500">Explore</span> <span className="text-black">Hiring Support</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              From guided projects to job prep—we help you land where you belong.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Project Card */}
            <Card className="relative overflow-hidden rounded-3xl shadow-xl border-0 bg-white">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Project</h3>
                <p className="text-gray-600 text-lg mb-8">Project help made simple.</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full">
                  Get Support
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-l-3xl">
                  <img
                    src="/hiring-project-woman.png"
                    alt="Woman working on project"
                    className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
                  />
                </div>
              </div>
            </Card>

            {/* Placement & Internship Card */}
            <Card className="relative overflow-hidden rounded-3xl shadow-xl border-0 bg-white">
              <div className="p-8 max-w-[60%]">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Placement & Internship</h3>
                <p className="text-gray-600 text-lg mb-8 text-balance leading-relaxed">
                  Placement and internship guidance tailored for you.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full">
                  Get Support
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-l-3xl">
                  <img
                    src="/hiring-meeting.png"
                    alt="People in meeting"
                    className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-semibold rounded-full">
              Explore More
              <ChevronRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-96 h-96 bg-orange-200 rounded-full translate-x-1/2 -translate-y-1/2 opacity-40"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-orange-300 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Reviews</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Hear from Experts */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="text-orange-500">Hear</span> <span className="text-black">from</span>
                </h3>
                <h3 className="text-3xl font-bold text-black">Experts</h3>
                <div className="w-24 h-1 bg-orange-500 mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* Expert Review 1 */}
                <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
                  <div className="text-6xl text-orange-400 mb-4 leading-none">"</div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    The content is really good-no fancy words, just simple, everyday examples. It's perfect for anyone
                    who genuinely wants to learn. Get it-it's all you'll need to ace the tech rounds of any company.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Riti Kumari</p>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500"></div>
                        <div className="w-4 h-4 bg-green-500"></div>
                        <div className="w-4 h-4 bg-blue-500"></div>
                        <div className="w-4 h-4 bg-yellow-500"></div>
                        <span className="text-sm text-gray-600 ml-2">Microsoft</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Expert Review 2 */}
                <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
                  <div className="text-6xl text-orange-400 mb-4 leading-none">"</div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    The best part of this course is how it sticks to the basics-no complex words, just easy-to-follow
                    examples. For anyone aiming to learn and prepare for tech rounds, this course will give you all you
                    need.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Abishek kumar</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">amazon</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Hear from Students */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="text-orange-500">Hear</span> <span className="text-black">from</span>
                </h3>
                <h3 className="text-3xl font-bold text-black">Students</h3>
                <div className="w-24 h-1 bg-orange-500 mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* Student Review 1 */}
                <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
                  <div className="text-6xl text-orange-400 mb-4 leading-none">"</div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    At first, I wasn't sure about this course, but after starting it, I've got mixed feelings-mostly
                    good ones! The content is really solid, so you won't miss out on anything important. The combination
                    of theory and practice questions is excellent.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Rishek Raj</p>
                      <p className="text-sm text-gray-600">DTU</p>
                    </div>
                  </div>
                </Card>

                {/* Student Review 2 */}
                <Card className="p-6 bg-white rounded-2xl shadow-lg border-0">
                  <div className="text-6xl text-orange-400 mb-4 leading-none">"</div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    As a college student, I found this DSA course with C++ on KeyNCoders incredibly helpful. It covers
                    everything we've been learning in class but in a much more detailed and understandable way.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Neelarghya Kundu</p>
                      <p className="text-sm text-gray-600">IIT-KGP</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Join Us Button */}
          <div className="text-center mt-16">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-semibold rounded-full">
              Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-180 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header with logo and social icons */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-black">key</span>
              <span className="text-3xl font-bold text-orange-500">N</span>
              <span className="text-3xl font-bold text-black">coders</span>
            </div>

            <div className="flex items-center space-x-4">
              <Facebook className="w-8 h-8 text-black hover:text-orange-500 cursor-pointer transition-colors" />
              <Linkedin className="w-8 h-8 text-black hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="w-8 h-8 text-black hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="w-8 h-8 text-black hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Horizontal line */}
          <div className="w-full h-px bg-gray-300 mb-12"></div>

          {/* Main footer content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left section */}
            <div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-lg">
                KeyNCoders helps students learn, grow, and launch their tech careers through upskilling, career support,
                and campus collaboration
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black mb-6">Contact</h3>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-black" />
                  <span className="text-gray-700 text-lg">91-7010683391</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-black" />
                  <span className="text-gray-700 text-lg">keyncoders@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right section - Links */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      Upskilling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      Hiring
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      CampusMate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Courses</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      Java
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      C++
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      OS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      DBMS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                      CN
                    </a>
                  </li>
                </ul>
              </div>

              {/* Partnered Companies */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Partnered Companies</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
