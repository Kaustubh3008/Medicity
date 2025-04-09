import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import TestimonialSection from "@/components/testimonial-section"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Image Slider Background */}
      <HeroSlider />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Image
                  src="holter_4.png/?height=200&width=300"
                  alt="Holter Study"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Holter Study</h3>
                <p className="text-gray-600 mb-4">
                  Portable ECG monitoring device for continuous heart rhythm tracking
                </p>
                <Link href="/products/holter-study" className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Image
                  src="/sleep4.jpeg?height=200&width=300"
                  alt="Sleep Study"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sleep Study</h3>
                <p className="text-gray-600 mb-4">Home-based sleep monitoring device for diagnosing sleep disorders</p>
                <Link href="/products/sleep-study" className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Image
                  src="/wc2.jpeg?height=200&width=300"
                  alt="Wheelchair Rental"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Wheelchair Rental</h3>
                <p className="text-gray-600 mb-4">Affordable wheelchair rental service at just ₹50 per day</p>
                <Link href="/rentals" className="text-primary font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/why.jpg?height=400&width=600"
                alt="Medical Professional"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">High-Quality Equipment</h3>
                    <p className="text-gray-600">
                      We provide only the best medical devices that meet international standards
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Affordable Pricing</h3>
                    <p className="text-gray-600">
                      Competitive prices for both purchases and rentals to suit your budget
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Expert Support</h3>
                    <p className="text-gray-600">Our team of medical professionals is always ready to assist you</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Fast Delivery</h3>
                    <p className="text-gray-600">
                      Quick delivery and setup of all equipment to ensure minimal waiting time
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="mt-8 bg-primary hover:bg-primary/90">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Patient Care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products and rental services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Browse Products
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

