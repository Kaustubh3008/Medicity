"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Check, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import Link from "next/link"

const rentalProducts = [
  {
    id: 1,
    name: "Standard Wheelchair",
    description: "Comfortable wheelchair for daily use",
    price: "₹50/day",
    image: "/wc1.jpeg?height=300&width=400",
    features: ["Ergonomic design", "Foldable for easy transport", "Comfortable cushioning", "Weight capacity: 100kg"],
  },
]

export default function RentalsPage() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const calculateDays = () => {
    if (!startDate || !endDate) return 0
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays + 1 // Include both start and end days
  }

  const calculateTotal = () => {
    const days = calculateDays()
    if (days === 0 || selectedProduct === null) return 0

    const product = rentalProducts.find((p) => p.id === selectedProduct)
    if (!product) return 0

    const pricePerDay = 50 // ₹50 per day
    return pricePerDay * days
  }

  return (
    <main className="flex flex-col min-h-screen pt-24">
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Wheelchair Rental Service</h1>
          <p className="max-w-2xl mx-auto text-lg">Affordable wheelchair rentals at just ₹50 per day</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Available Wheelchairs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rentalProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={cn(
                      "cursor-pointer transition-all",
                      selectedProduct === product.id ? "ring-2 ring-primary" : "hover:shadow-md",
                    )}
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <div className="relative h-48 bg-slate-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {selectedProduct === product.id && (
                        <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                          <Check className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-primary mb-2">{product.price}</p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">How Our Rental Service Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 p-6 rounded-lg text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Select & Book</h3>
                    <p className="text-gray-600">Choose your wheelchair and book it for your required dates</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Delivery</h3>
                    <p className="text-gray-600">We deliver the wheelchair to your doorstep at the scheduled time</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Return</h3>
                    <p className="text-gray-600">
                      We pick up the wheelchair from your location after the rental period
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book Your Rental</CardTitle>
                  <CardDescription>Select dates to book your wheelchair rental</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="rental-dates">Rental Period</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "justify-start text-left font-normal",
                                !startDate && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {startDate ? format(startDate, "PPP") : "Start date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={setStartDate}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn("justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {endDate ? format(endDate, "PPP") : "End date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={endDate}
                              onSelect={setEndDate}
                              initialFocus
                              disabled={(date) => date < (startDate || new Date())}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {calculateDays() > 0 && selectedProduct !== null && (
                      <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between">
                          <span>Rental Period:</span>
                          <span>{calculateDays()} days</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Total Amount:</span>
                          <span>₹{calculateTotal()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/rentals/checkout?id=${selectedProduct}&days=${calculateDays()}&start=${startDate?.toISOString()}&end=${endDate?.toISOString()}`}
                    className="w-full"
                  >
                    <Button className="w-full" disabled={!startDate || !endDate || selectedProduct === null}>
                      Proceed to Checkout
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center text-lg font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary mr-2" />
                    Is a security deposit required?
                  </h3>
                  <p className="text-gray-600 mt-1 pl-7">
                    Yes, a refundable security deposit of ₹1,000 is required at the time of delivery.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center text-lg font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary mr-2" />
                    What is the minimum rental period?
                  </h3>
                  <p className="text-gray-600 mt-1 pl-7">The minimum rental period is 1 day (24 hours).</p>
                </div>
                <div>
                  <h3 className="flex items-center text-lg font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary mr-2" />
                    Do you offer delivery?
                  </h3>
                  <p className="text-gray-600 mt-1 pl-7">
                    Yes, we offer free delivery and pickup within city limits. A nominal fee applies for locations
                    outside the city.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center text-lg font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary mr-2" />
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600 mt-1 pl-7">We accept cash, credit/debit cards, and UPI payments.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/wc1.jpeg?height=400&width=600"
                alt="Wheelchair Rental Service"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

