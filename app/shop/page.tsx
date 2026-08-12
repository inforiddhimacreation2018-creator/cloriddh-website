"use client";

import { useState } from "react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const products = [
    { 
      image: "/images/coord1.jpg.jpg",
      name: "Elegant Co-ord Set",
      category: "Co-ord Set",
      price: "₹1,299",
    },
    {
      image: "/images/coord2.jpg.jpg",
      name: "Premium Women's Kurti",
      category: "Kurti",
      price: "₹999",
    },
    {
      image: "/images/coord3.jpg.jpg",
      name: "Elegant Suit Set",
      category: "Suit Set",
      price: "₹1,499",
    },
    {
      image: "/images/coord4.jpg.jpg",
      name: "New Arrival",
      category: "New Arrival",
      price: "₹1,799",
    },
  ];

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
  {["All", "Kurti", "Co-ord Set", "Suit Set", "New Arrival"].map(
    (category) => (
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
    )
  )}
</div>
      {/* Products */}
            <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products
  .filter(
    (product) =>
      selectedCategory === "All" ||
      product.category === selectedCategory
  )
  .map((product) => (

            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[430px] object-cover"
              />

              <div className="p-5">

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <h2 className="text-xl font-semibold mt-1">
                  {product.name}
                </h2>

                <p className="text-[#C96F4A] text-xl font-bold mt-2">
                  {product.price}
                </p>

<a
  href={
    "https://wa.me/918078620650?text=" +
    encodeURIComponent(
      "Hello CLORIDDH, I am interested in " +
      product.name +
      " priced at " +
      product.price +
      ". Please share more details."
    )
  }
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full mt-4 bg-[#C96F4A] text-white py-3 rounded-xl hover:bg-[#B85F3E] text-center"
>
  Order on WhatsApp
</a>

              </div>

            </div>

          ))}

        </div>

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