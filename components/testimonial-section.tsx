"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Cardiologist",
    image: "/why.jpg?height=100&width=100",
    quote:
      "The Holter monitors from this company have significantly improved our ability to diagnose cardiac issues. The quality and reliability of the equipment is outstanding.",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Sleep Specialist",
    image: "/d1.jpg?height=100&width=100",
    quote:
      "We've been using their sleep study kits for over a year now, and the data quality is exceptional. Our patients appreciate the comfort and ease of use.",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Patient",
    image: "/IS2.jpg?height=100&width=100",
    quote:
      "The wheelchair rental service was a lifesaver during my recovery. Affordable, prompt delivery, and the quality was much better than I expected.",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">"{testimonials[currentIndex].quote}"</p>
          <div className="flex items-center">
            <div className="mr-4 rounded-full overflow-hidden h-16 w-16 relative">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 space-x-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

