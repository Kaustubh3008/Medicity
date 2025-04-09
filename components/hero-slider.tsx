"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/IS4.jpg?height=1080&width=1920",
    title: "Advanced Medical Devices for Better Healthcare",
    subtitle: "High-quality medical equipment to improve patient care and comfort",
  },
  {
    id: 2,
    image: "/IS2.jpg?height=1080&width=1920",
    title: "Holter Study Monitoring Solutions",
    subtitle: "Professional ECG monitoring for 24 hours, 3 days, or 7 days",
  },
  {
    id: 3,
    image: "/IS3.jpg?height=1080&width=1920",
    title: "Sleep Study Level 2 with Titration",
    subtitle: "Comprehensive 8-hour sleep monitoring for accurate diagnosis",
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, []) // Removed nextSlide from dependencies

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src={slides[currentIndex].image || "/placeholder.svg"}
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {slides[currentIndex].title}
              </h1>
              <p className="text-xl text-white/90 mb-8">{slides[currentIndex].subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                >
                  Contact Us <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 rounded-full h-12 w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 rounded-full h-12 w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </section>
  )
}

