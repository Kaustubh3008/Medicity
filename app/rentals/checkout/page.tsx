"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CheckCircle2, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { format } from "date-fns"

// Rental product
const rentalProduct = {
  id: "1",
  name: "Standard Wheelchair",
  description: "Comfortable wheelchair for daily use",
  pricePerDay: 50,
  image: "/wc1.jpeg?height=300&width=400",
}

export default function RentalCheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const productId = searchParams.get("id")
  const days = searchParams.get("days")
  const startDateStr = searchParams.get("start")
  const endDateStr = searchParams.get("end")

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [totalDays, setTotalDays] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (!productId || !days || !startDateStr || !endDateStr) {
      router.push("/rentals")
      return
    }

    try {
      const start = new Date(startDateStr)
      const end = new Date(endDateStr)
      const daysCount = Number.parseInt(days)

      setStartDate(start)
      setEndDate(end)
      setTotalDays(daysCount)
      setTotalAmount(daysCount * rentalProduct.pricePerDay)
    } catch (error) {
      router.push("/rentals")
    }
  }, [productId, days, startDateStr, endDateStr, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would send this data to your backend
    console.log("Rental order submitted:", {
      product: rentalProduct,
      rentalPeriod: {
        startDate,
        endDate,
        days: totalDays,
      },
      customer: formData,
      totalAmount,
    })

    setIsSubmitting(false)
    setIsSuccess(true)

    // Redirect to home page after showing success message
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  if (!startDate || !endDate) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 max-w-md"
        >
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Rental Confirmed!</h1>
          <p className="text-lg mb-6">
            Thank you for your rental booking. We've sent a confirmation email to {formData.email}.
          </p>
          <p className="text-gray-600 mb-8">You will be redirected to the homepage shortly...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Rental Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Please provide your details for delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea id="notes" name="notes" rows={3} value={formData.notes} onChange={handleInputChange} />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Rental Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={rentalProduct.image || "/placeholder.svg"}
                      alt={rentalProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{rentalProduct.name}</h3>
                    <p className="text-sm text-gray-500">{rentalProduct.description}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Rental Period:</span>
                  </div>
                  <div className="pl-6 text-sm">
                    <div>From: {format(startDate, "PPP")}</div>
                    <div>To: {format(endDate, "PPP")}</div>
                    <div className="font-medium mt-1">Duration: {totalDays} days</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Daily Rate</span>
                    <span>₹{rentalProduct.pricePerDay}/day</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Duration</span>
                    <span>{totalDays} days</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Confirm Rental"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

