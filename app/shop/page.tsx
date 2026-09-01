"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Kurtis", "Co-ord Sets", "Dress"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#F8F3ED]">

      {/* Header */}
      <header className="bg-[#C96F4A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <a href="/" className="text-3xl font-bold tracking-wide">
            CLORIDDH
          </a>

          <nav className="flex gap-6 font-medium">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
          </nav>

        </div>
      </header>

      {/* Shop Heading */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">

        <p className="text-[#C96F4A] uppercase tracking-[5px] font-semibold">
          CLORIDDH COLLECTION
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Shop Women's Fashion
        </h1>

        <p className="text-gray-600 mt-4">
          Discover our latest collection of stylish women's wear.
        </p>

      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 pb-10 flex flex-wrap justify-center gap-3">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition ${
              selectedCategory === category
                ? "bg-[#C96F4A] text-white"
                : "bg-white text-gray-700 hover:bg-[#C96F4A] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => {

            const firstImage = product.colors[0]?.images[0];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                {/* Product Image */}
                <a href={`/product/${product.id}`}>

                  {firstImage ? (
                    <img
                      src={firstImage}
                      alt={product.name}
                      className="w-full h-[430px] object-cover"
                    />
                  ) : (
                    <div className="w-full h-[430px] bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}

                </a>

                {/* Product Information */}
                <div className="p-5">

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <a href={`/product/${product.id}`}>
                    <h2 className="text-xl font-semibold mt-1 hover:text-[#C96F4A] transition">
                      {product.name}
                    </h2>
                  </a>

                  <p className="text-[#C96F4A] text-xl font-bold mt-2">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  {/* Available Colours */}
                  {product.colors.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-500">
                        {product.colors.length === 1
                          ? `Colour: ${product.colors[0].name}`
                          : `${product.colors.length} Colours Available`}
                      </p>
                    </div>
                  )}

                  {/* View Product */}
                  <a
                    href={`/product/${product.id}`}
                    className="block w-full mt-4 bg-[#C96F4A] text-white py-3 rounded-xl hover:bg-[#B85F3E] text-center transition"
                  >
                    View Product
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={
                      "https://wa.me/918078620650?text=" +
                      encodeURIComponent(
                        `Hello CLORIDDH, I am interested in ${product.name}. Please share more details.`
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-2 border border-[#C96F4A] text-[#C96F4A] py-3 rounded-xl hover:bg-[#C96F4A] hover:text-white text-center transition"
                  >
                    Order on WhatsApp
                  </a>

                </div>

              </div>
            );
          })}

        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}

      </section>

      {/* Footer */}
      <footer className="bg-[#C96F4A] text-white py-10">

        <div className="text-center">

          <h2 className="text-3xl font-bold">
            CLORIDDH
          </h2>

          <p className="mt-3">
            Elegance in Every Thread
          </p>

          <p className="mt-5">
            WhatsApp: +91 80786 20650
          </p>

          <p>
            Customer Care: +91 70233 12708
          </p>

        </div>

      </footer>

    </main>
  );
}