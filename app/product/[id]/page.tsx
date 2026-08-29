"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  const product = products.find(
    (item) => item.id.toLowerCase() === id.toLowerCase()
  )

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8F3ED] px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          Product not found
        </h1>

        <Link
          href="/shop"
          className="mt-6 inline-block rounded-full bg-[#C96F4A] px-6 py-3 text-white"
        >
          Back to Shop
        </Link>
      </main>
    )
  }

  return <ProductDetails product={product} />
}

function ProductDetails({ product }: { product: (typeof products)[number] }) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")

  const color = product.colors[selectedColor]
  const [selectedImage, setSelectedImage] = useState(0)

  const images = color?.images || []

  return (
    <main className="min-h-screen bg-[#F8F3ED] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/shop"
          className="mb-8 inline-block text-sm text-gray-600 hover:text-[#C96F4A]"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Images */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white">
              {images[selectedImage] && (
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-[#C96F4A]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.2em] text-[#C96F4A]">
              {product.category}
            </p>

            <h1 className="mt-2 text-4xl font-semibold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold text-[#C96F4A]">
              {product.price > 0
                ? `₹${product.price.toLocaleString("en-IN")}`
                : "Price to be updated"}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* Colours */}
            {product.colors.length > 1 && (
              <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold text-gray-900">
                  Colour: {color.name}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {product.colors.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setSelectedColor(index)
                        setSelectedImage(0)
                      }}
                      className={`rounded-full border px-5 py-2 text-sm ${
                        selectedColor === index
                          ? "border-[#C96F4A] bg-[#C96F4A] text-white"
                          : "border-gray-300 bg-white text-gray-800"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold text-gray-900">
                Select Size
              </h2>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-14 rounded-lg border px-4 py-2 text-sm ${
                      selectedSize === size
                        ? "border-[#C96F4A] bg-[#C96F4A] text-white"
                        : "border-gray-300 bg-white text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                if (!selectedSize) {
                  alert("Please select a size")
                  return
                }

                alert(
                  `${product.name} - ${color.name} - Size ${selectedSize} added to cart`
                )
              }}
              className="mt-10 w-full rounded-full bg-[#C96F4A] px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}