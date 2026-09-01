"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id.toLowerCase() === id.toLowerCase()
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8F3ED] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Product not found
          </h1>
          <Link
            href="/shop"
            className="inline-block mt-6 bg-[#C96F4A] text-white px-8 py-3"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return <ProductContent product={product} />;
}

function ProductContent({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const selectedColor = product.colors[selectedColorIndex];
  const images = selectedColor?.images || [];

  const currentImage = images[selectedImageIndex] || images[0];

  const changeColor = (index: number) => {
    setSelectedColorIndex(index);
    setSelectedImageIndex(0);
  };

  return (
    <main className="min-h-screen bg-[#F8F3ED] text-gray-900">
      {/* TOP BAR */}
      <div className="bg-[#C96F4A] text-white text-xs tracking-wide py-2 px-4 flex justify-between">
        <span>FREE SHIPPING ON ORDERS ABOVE ₹1499</span>
        <span>COD AVAILABLE &nbsp; | &nbsp; EASY RETURNS</span>
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl tracking-[0.2em] font-medium"
          >
            CLORIDDH
          </Link>

          <nav className="hidden md:flex gap-10 text-sm">
            <Link href="/">HOME</Link>
            <Link href="/shop">SHOP</Link>
            <Link href="/shop">NEW ARRIVALS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-5 text-xl">
            <span>⌕</span>
            <span>♡</span>
            <span>🛍</span>
          </div>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-500">
        <Link href="/">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/shop">Shop</Link>
        <span className="mx-2">›</span>
        <span>{product.category}</span>
        <span className="mx-2">›</span>
        <span className="text-gray-800">{product.name}</span>
      </div>

      {/* PRODUCT AREA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT - IMAGE GALLERY */}
          <div className="flex gap-5">
            {/* THUMBNAILS */}
            <div className="w-20 flex flex-col gap-4">
              {images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-[3/4] overflow-hidden border-2 ${
                    selectedImageIndex === index
                      ? "border-[#C96F4A]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="relative flex-1 aspect-[3/4] bg-white overflow-hidden">
              {currentImage ? (
                <Image
                  src={currentImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Image unavailable
                </div>
              )}

              <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-xl">
                ♡
              </button>
            </div>
          </div>

          {/* RIGHT - PRODUCT INFORMATION */}
          <div className="pt-2">
            <p className="text-[#C96F4A] text-sm font-medium tracking-wide mb-2">
              CLORIDDH
            </p>

            <h1 className="text-3xl md:text-4xl font-medium leading-tight">
              {product.name}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-3 mt-5">
              <span className="bg-gray-900 text-white px-2 py-1 text-sm">
                4.8 ★
              </span>
              <span className="text-sm text-gray-600">
                5 Ratings
              </span>
            </div>

            {/* PRICE */}
            <div className="mt-6">
              <p className="text-3xl font-semibold">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* OFFER */}
            <div className="border border-dashed border-gray-300 bg-white mt-6 p-5">
              <div className="flex justify-between gap-6 text-sm">
                <div>
                  <p className="font-medium">Use Code</p>
                  <p className="mt-2">WELCOME10</p>
                </div>

                <div>
                  <p className="font-medium">Get extra savings</p>
                  <p className="mt-2 text-gray-600">
                    On selected products
                  </p>
                </div>
              </div>
            </div>

            {/* COLOUR */}
            <div className="mt-8">
              <p className="text-sm font-medium uppercase tracking-wide">
                Colour:{" "}
                <span className="font-normal">
                  {selectedColor?.name}
                </span>
              </p>

              <div className="flex gap-4 mt-4">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => changeColor(index)}
                    className={`w-11 h-11 rounded-full border-2 p-1 ${
                      selectedColorIndex === index
                        ? "border-[#C96F4A]"
                        : "border-gray-300"
                    }`}
                    title={color.name}
                  >
                    <span className="block w-full h-full rounded-full bg-gray-700" />
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium uppercase tracking-wide">
                  Select Size
                </p>
                <button className="text-sm underline">
                  Size Chart
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-14 h-12 px-4 border ${
                      selectedSize === size
                        ? "border-[#C96F4A] bg-[#C96F4A] text-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* DELIVERY */}
            <div className="border border-gray-300 bg-white mt-8 p-4">
              <p className="font-medium text-sm">
                📍 Check delivery date
              </p>

              <div className="flex mt-3">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="flex-1 border border-gray-300 px-4 py-3 outline-none"
                />
                <button className="border border-[#C96F4A] text-[#C96F4A] px-6">
                  CHECK
                </button>
              </div>
            </div>

            {/* ADD TO BAG */}
            <button
              disabled={!selectedSize}
              className={`w-full mt-5 py-4 text-lg font-medium ${
                selectedSize
                  ? "bg-[#C96F4A] text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              🛍 ADD TO BAG
            </button>

            {/* WISHLIST */}
            <button className="w-full mt-4 py-4 border border-[#C96F4A] text-gray-800">
              ♡ SAVE TO WISHLIST
            </button>
          </div>
        </div>

        {/* DETAILS */}
        <section className="mt-16 border-t border-gray-300 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DESCRIPTION */}
            <div>
              <h2 className="text-xl font-medium text-[#C96F4A]">
                DESCRIPTION
              </h2>

              <p className="mt-5 leading-8 text-gray-700">
                {product.description}
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-medium text-[#C96F4A]">
                  PRODUCT INFORMATION
                </h3>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Product</span>
                    <span>{product.name}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Category</span>
                    <span>{product.category}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Available Sizes</span>
                    <span>{product.sizes.join(", ")}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Colours</span>
                    <span>
                      {product.colors.map((c) => c.name).join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div>
              <h2 className="text-xl font-medium text-[#C96F4A]">
                PRODUCT DETAILS
              </h2>

              <div className="mt-5 space-y-5 text-sm">
                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Brand</span>
                  <span>CLORIDDH</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Category</span>
                  <span>{product.category}</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Fit</span>
                  <span>Comfort Fit</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Wash Care</span>
                  <span>Follow garment care label</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Occasion</span>
                  <span>Casual / Everyday Wear</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE STRIP */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-7">
          <div className="text-center">
            <p className="font-medium">FREE SHIPPING</p>
            <p className="text-xs text-gray-500 mt-2">
              On orders above ₹1499
            </p>
          </div>

          <div className="text-center">
            <p className="font-medium">EASY RETURNS</p>
            <p className="text-xs text-gray-500 mt-2">
              Easy return policy
            </p>
          </div>

          <div className="text-center">
            <p className="font-medium">COD AVAILABLE</p>
            <p className="text-xs text-gray-500 mt-2">
              Pay on delivery
            </p>
          </div>

          <div className="text-center">
            <p className="font-medium">SECURE PAYMENTS</p>
            <p className="text-xs text-gray-500 mt-2">
              Safe & secure checkout
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}