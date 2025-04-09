import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    id: 1,
    category: "Holter Study",
    name: "Holter Study 24 Hours",
    description: "24-hour continuous ECG monitoring for comprehensive heart rhythm analysis",
    features: [
      "Continuous 24-hour ECG recording",
      "Wireless data transmission",
      "High-resolution display",
      "Long battery life",
      "Compact and lightweight design",
    ],
    price: "₹5,900",
    image: "/holter_1.png?height=300&width=400",
  },
  {
    id: 2,
    category: "Holter Study",
    name: "Holter Study 3 Days",
    description: "Extended 3-day ECG monitoring for detecting intermittent arrhythmias",
    features: [
      "3-day continuous monitoring",
      "Enhanced battery capacity",
      "Waterproof design",
      "Comfortable for extended wear",
      "Comprehensive rhythm analysis",
    ],
    price: "₹6,900",
    image: "/holter_2.jpeg?height=300&width=400",
  },
  {
    id: 3,
    category: "Holter Study",
    name: "Holter Study 7 Days",
    description: "Comprehensive 7-day ECG monitoring for detecting rare cardiac events",
    features: [
      "Full week continuous monitoring",
      "Ultra-long battery life",
      "Advanced arrhythmia detection",
      "Waterproof and durable design",
      "Complete cardiac event capture",
    ],
    price: "₹12,900",
    image: "/holter_3.jpeg?height=300&width=400",
  },
  {
    id: 4,
    category: "Sleep Study",
    name: "Sleep Study Level 2 with Titration",
    description: "One night (8 hours) comprehensive sleep monitoring with titration",
    features: [
      "Respiratory effort sensors",
      "Pulse oximetry",
      "Body position monitoring",
      "Snore detection",
      "Comprehensive sleep analysis software",
    ],
    price: "₹8,000",
    image: "/sleep2.jpeg?height=300&width=400",
  },
]

export default function ProductsPage() {
  // Group products by category
  const categories = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  return (
    <main className="flex flex-col min-h-screen pt-24">
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
          <p className="max-w-2xl mx-auto text-lg">Explore our range of high-quality medical devices</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {Object.entries(categories).map(([category, categoryProducts]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-2 border-b">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                    <div className="relative h-48 bg-slate-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="text-lg font-bold text-primary">{product.price}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Link href={`/products/checkout?id=${product.id}`} className="w-full">
                        <Button className="w-full">Buy Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team of medical experts is ready to assist you in selecting the perfect device for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

