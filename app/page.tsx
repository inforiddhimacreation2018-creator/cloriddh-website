export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3ED] text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#C96F4A] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-bold tracking-wide">
            CLORIDDH
          </h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-[#F8F3ED]">Home</a>
            <a href="/shop" className="hover:text-[#F8F3ED]">Shop</a>
            <a href="#" className="hover:text-[#F8F3ED]">New Arrivals</a>
            <a href="#" className="hover:text-[#F8F3ED]">About</a>
            <a href="#" className="hover:text-[#F8F3ED]">Contact</a>
          </nav>
        </div>
      </header>


      {/* Hero */}
      <section className="relative w-full">

        <img
          src="/images/hero.jpg"
          alt="CLORIDDH Women's Fashion"
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <p className="uppercase tracking-[6px] text-sm md:text-lg font-semibold">
              Premium Women's Fashion
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              Elegance In
              <br />
              Every Thread
            </h2>

            <p className="mt-5 text-base md:text-xl">
              Kurtis • Co-ord Sets • Ethnic Wear
            </p>

            <a
  href="/shop"
  className="mt-7 bg-[#C96F4A] hover:bg-[#b65f40] px-10 py-4 rounded-xl text-lg font-semibold text-white inline-block"
>
  Shop Now
</a>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-10">

          <p className="text-[#C96F4A] uppercase tracking-[5px] font-semibold">
            Explore
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Shop By Category
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold">
              Co-ord Sets
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold">
              Kurtis
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold">
              Suit Sets
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold">
              New Arrivals
            </h3>
          </div>

        </div>

      </section>


      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <p className="text-[#C96F4A] uppercase tracking-[5px] font-semibold">
            Our Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Products
          </h2>

          <p className="text-gray-600 mt-4">
            Discover our latest women's fashion collection.
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {/* Product 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src="/images/coord1.jpg.jpg"
              alt="CLORIDDH Co-ord Set"
              className="w-full h-[420px] object-cover"
            />

            <div className="p-5">

              <p className="text-sm text-gray-500">
                Co-ord Set
              </p>

              <h3 className="text-xl font-semibold mt-1">
                Elegant Co-ord Set
              </h3>

              <p className="text-[#C96F4A] text-xl font-bold mt-2">
                ₹1,299
              </p>

              <button className="w-full mt-4 bg-[#C96F4A] text-white py-3 rounded-xl hover:bg-[#B85F3E]">
                Add to Cart
              </button>

            </div>

          </div>


          {/* Product 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src="/images/coord2.jpg.jpg"
              alt="CLORIDDH Women's Kurti"
              className="w-full h-[420px] object-cover"
            />

            <div className="p-5">

              <p className="text-sm text-gray-500">
                Kurti
              </p>

              <h3 className="text-xl font-semibold mt-1">
                Premium Women's Kurti
              </h3>

              <p className="text-[#C96F4A] text-xl font-bold mt-2">
                ₹999
              </p>

              <button className="w-full mt-4 bg-[#C96F4A] text-white py-3 rounded-xl hover:bg-[#B85F3E]">
                Add to Cart
              </button>

            </div>

          </div>


          {/* Product 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src="/images/coord3.jpg.jpg"
              alt="CLORIDDH Suit Set"
              className="w-full h-[420px] object-cover"
            />

            <div className="p-5">

              <p className="text-sm text-gray-500">
                Suit Set
              </p>

              <h3 className="text-xl font-semibold mt-1">
                Elegant Suit Set
              </h3>

              <p className="text-[#C96F4A] text-xl font-bold mt-2">
                ₹1,499
              </p>

              <button className="w-full mt-4 bg-[#C96F4A] text-white py-3 rounded-xl hover:bg-[#B85F3E]">
                Add to Cart
              </button>

            </div>

          </div>


          {/* Product 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src="/images/coord4.jpg.jpg"
              alt="CLORIDDH New Arrival"
              className="w-full h-[420px] object-cover"
            />

            <div className="p-5">

              <p className="text-sm text-gray-500">
                New Arrival
              </p>

              <h3 className="text-xl font-semibold mt-1">
                New Arrival
              </h3>

              <p className="text-[#C96F4A] text-xl font-bold mt-2">
                ₹1,799
              </p>

              <button className="w-full mt-4 bg-[#C96F4A] text-white py-3 rounded-xl hover:bg-[#B85F3E]">
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-[#C96F4A] text-white py-12 mt-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            CLORIDDH
          </h2>

          <p className="mt-3">
            Elegance in Every Thread
          </p>

          <p className="mt-6">
            WhatsApp: +91 80786 20650
          </p>

          <p>
            Customer Care: +91 70233 12708
          </p>

          <p className="mt-6 text-sm">
            © 2026 CLORIDDH. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}