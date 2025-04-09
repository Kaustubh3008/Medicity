import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MediTech Devices</h3>
            <p className="text-slate-300 mb-4">
              Providing high-quality medical equipment for healthcare professionals and patients.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-white transition-colors">
                  Rentals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/holter-study" className="text-slate-300 hover:text-white transition-colors">
                  Holter Study
                </Link>
              </li>
              <li>
                <Link href="/products/sleep-study" className="text-slate-300 hover:text-white transition-colors">
                  Sleep Study
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-white transition-colors">
                  Wheelchair Rental
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-300">123 Medical Plaza, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-300">info@meditechdevices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} MediTech Devices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

