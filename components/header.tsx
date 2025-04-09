"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const headerImages = [
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>MediTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Products
            </Link>
            <Link
              href="/rentals"
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Rentals
            </Link>
            <Link
              href="/contact"
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={
                isScrolled ? "bg-primary text-white" : "border-white text-white hover:bg-white hover:text-primary"
              }
            >
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="font-medium text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/rentals"
                className="font-medium text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rentals
              </Link>
              <Link
                href="/contact"
                className="font-medium text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button className="bg-primary text-white w-full">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

