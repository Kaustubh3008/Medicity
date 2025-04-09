"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const products = {
  holter: [
    {
      id: 1,
      name: "Holter Study 24 Hours",
      description: "24-hour continuous ECG monitoring for comprehensive heart rhythm analysis",
      price: "₹5,900",
      image: "/holter_1.png?height=300&width=400",
    },
    {
      id: 2,
      name: "Holter Study 3 Days",
      description: "Extended 3-day ECG monitoring for detecting intermittent arrhythmias",
      price: "₹6,900",
      image: "/holter_2.jpeg?height=300&width=400",
    },
    {
      id: 3,
      name: "Holter Study 7 Days",
      description: "Comprehensive 7-day ECG monitoring for detecting rare cardiac events",
      price: "₹12,900",
      image: "/holter_2.jpeg?height=300&width=400",
    },
  ],
  sleep: [
    {
      id: 4,
      name: "Sleep Study Level 2 with Titration",
      description: "One night (8 hours) comprehensive sleep monitoring with titration",
      price: "₹8,000",
      image: "sleep2.jpeg/?height=300&width=400",
    },
  ],
  mobility: [
    {
      id: 5,
      name: "Wheelchair Rental",
      description: "Comfortable and durable wheelchair available for daily rental",
      price: "₹50/day",
      isRental: true,
      image: "wc1.jpeg/?height=300&width=400",
    },
  ],
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("holter")

  return (
    <Tabs defaultValue="holter" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="holter">Holter Study</TabsTrigger>
        <TabsTrigger value="sleep">Sleep Study</TabsTrigger>
        <TabsTrigger value="mobility">Wheelchair Rental</TabsTrigger>
      </TabsList>

      {Object.entries(products).map(([category, items]) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 bg-slate-100">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">{'isRental' in product ? "Rental Price" : "Price"}</p>
                        <p className="text-lg font-bold text-primary">{product.price}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {"isRental" in product ? (
                      <Link href={`/rentals/checkout?id=${product.id}`} className="w-full">
                        <Button className="w-full">Rent Now</Button>
                      </Link>
                    ) : (
                      <Link href={`/products/checkout?id=${product.id}`} className="w-full">
                        <Button className="w-full">Buy Now</Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

