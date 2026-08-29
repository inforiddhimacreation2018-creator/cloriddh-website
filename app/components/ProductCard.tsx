"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstColor = product.colors[0]
  const firstImage = firstColor?.images[0]

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl bg-white"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F3ED]">
        {firstImage ? (
          <Image
            src={firstImage}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            Image coming soon
          </div>
        )}

        {product.colors.length > 1 && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
            {product.colors.length} Colours
          </span>
        )}
      </div>

      <div className="px-1 py-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-1 text-base font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 font-semibold text-[#C96F4A]">
          {product.price > 0 ? `₹${product.price.toLocaleString("en-IN")}` : "Price to be updated"}
        </p>
      </div>
    </Link>
  )
}