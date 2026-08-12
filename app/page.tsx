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

          <a
  href="/shop"
  className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition block"
>
  <h3 className="text-2xl font-semibold">
    Co-ord Sets
  </h3>
</a>

          <a
  href="/shop"
  className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition block"
>
  <h3 className="text-2xl font-semibold">
    Kurtis
  </h3>
</a>

          <a
  href="/shop"
  className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition block"
>
  <h3 className="text-2xl font-semibold">
    Suit Sets
  </h3>
</a>

          <a
  href="/shop"
  className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl transition block"
>
  <h3 className="text-2xl font-semibold">
    New Arrivals
  </h3>
</a>

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

              <a
  href={
    "https://wa.me/918078620650?text=" +
    encodeURIComponent(
      "Hello CLORIDDH, I am interested in Elegant Co-ord Set priced at ₹1,299. Please share more details."
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

              <a
  href={
    "https://wa.me/918078620650?text=" +
    encodeURIComponent(
      "Hello CLORIDDH, I am interested in Premium Women's Kurti priced at ₹999. Please share more details."
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

              <a
  href={
    "https://wa.me/918078620650?text=" +
    encodeURIComponent(
      "Hello CLORIDDH, I am interested in Elegant Suit Set priced at ₹1,499. Please share more details."
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

              <a
  href={
    "https://wa.me/918078620650?text=" +
    encodeURIComponent(
      "Hello CLORIDDH, I am interested in New Arrival priced at ₹1,799. Please share more details."
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

        </div>

      </section>


      {/* Footer */}
<footer className="bg-[#C96F4A] text-white py-12 mt-10">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

      {/* Explore */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Explore
        </h3>

        <div className="space-y-3 text-sm">
          <a href="/shop" className="block hover:text-[#F8F3ED]">
            New Arrivals
          </a>

          <a href="/shop" className="block hover:text-[#F8F3ED]">
            Kurti & Sets
          </a>

          <a href="/shop" className="block hover:text-[#F8F3ED]">
            Co-ord Sets
          </a>

          <a href="/shop" className="block hover:text-[#F8F3ED]">
            Bottom Wear
          </a>
        </div>
      </div>


      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Quick Links
        </h3>

        <div className="space-y-3 text-sm">
          <a href="/" className="block hover:text-[#F8F3ED]">
            Home
          </a>

          <a href="/shop" className="block hover:text-[#F8F3ED]">
            Products
          </a>

          <a href="/#about" className="block hover:text-[#F8F3ED]">
            About Us
          </a>

          <a href="/#contact" className="block hover:text-[#F8F3ED]">
            Contact Us
          </a>
        </div>
      </div>


      {/* Information */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Information
        </h3>

        <div className="space-y-3 text-sm">
          <a href="#" className="block hover:text-[#F8F3ED]">
            Privacy Policy
          </a>

          <a href="#" className="block hover:text-[#F8F3ED]">
            Refund Policy
          </a>

          <a href="#" className="block hover:text-[#F8F3ED]">
            Terms & Conditions
          </a>

          <a href="#" className="block hover:text-[#F8F3ED]">
            Shipping Policy
          </a>
        </div>
      </div>


      {/* Contact Us */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Contact Us
        </h3>

        <div className="space-y-4 text-sm">

          <p>
            <strong>WhatsApp</strong><br />
            <a
              href="https://wa.me/918078620650"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8F3ED]"
            >
              +91 80786 20650
            </a>
          </p>

          <p>
            <strong>Customer Care</strong><br />
            <a
              href="tel:+917023312708"
              className="hover:text-[#F8F3ED]"
            >
              +91 70233 12708
            </a>
          </p>

          <p>
            <strong>Email</strong><br />
            <a
              href="mailto:info@cloriddh.com"
              className="hover:text-[#F8F3ED]"
            >
              info@cloriddh.com
            </a>
          </p>

          <p>
            <strong>Address 1</strong><br />
            12 Satyendra Colony,<br />
            Sodala, Jaipur - 302006
          </p>

          <p>
            <strong>Address 2</strong><br />
            35 Sector, Pratap Nagar,<br />
            Near Mahila Sadan,<br />
            Jaipur - 302033
          </p>

        </div>
      </div>


      {/* Let's Connect */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Let's Connect
        </h3>

        <p className="text-sm mb-5">
          Follow CLORIDDH on social media.
        </p>

        <div className="flex gap-4">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/cloriddh2018/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white hover:bg-white hover:text-[#C96F4A] transition"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/19Xmj9htL5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white hover:bg-white hover:text-[#C96F4A] transition"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
            </svg>
          </a>


          {/* WhatsApp */}
          <a
            href="https://wa.me/918078620650"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white hover:bg-white hover:text-[#C96F4A] transition"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.1-.3.2-.5.1-1.2-.6-2-1.1-2.8-2-.7-.8-1.2-1.7-1.3-2-.1-.2 0-.3.1-.4l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3-.1-.5-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 3.8 3.5 1.4.6 1.9.7 2.6.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3z" />
            </svg>
          </a>

        </div>
      </div>

    </div>


    {/* Copyright */}
    <div className="border-t border-white/30 mt-10 pt-6 text-center text-sm">

      © 2026 CLORIDDH. All rights reserved | Crafted in Jaipur.

    </div>

  </div>

</footer>

</main>
  );
}