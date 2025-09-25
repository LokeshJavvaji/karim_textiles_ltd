"use client";

export default function Welcome() {
  return (
    <main className="bg-yellow-100">
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <div className="w-full text-center md:text-left">
        <h1 className="text-center text-3xl md:text-4xl gap-5 p-7 font-bold text-red-600">
          Crafting Excellence with Karim Textiles Ltd.
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          At Karim Textiles Ltd., we blend <strong>tradition and innovation</strong> to create premium fabrics, leather garments, and home textiles that set new standards in quality and style. 
          Our team of skilled artisans and designers ensures every product is crafted with precision, creativity, and sustainability in mind.
        </p>

        <p className="mt-4 text-xl text-gray-700">
          From <strong>luxurious textiles</strong> and eco-friendly fabrics to <strong>tailored leather clothing</strong> and custom orders, we offer solutions for fashion brands, corporate clients, and home decor enthusiasts alike. 
          Innovation, durability, and elegance are at the heart of everything we do.
        </p>

        <div className="w-full p-10">
          <iframe
            className="w-full h-60 md:h-80 lg:h-96 rounded-lg"
             src="https://www.youtube.com/embed/Fw77fjz6FWs?autoplay=1&loop=1&playlist=Fw77fjz6FWs"
            title="Karim Textiles Introduction"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mt-6 text-xl text-gray-700 text-center md:text-left">
          With decades of experience in the textile and leather industry, Karim Textiles Ltd. combines <strong>craftsmanship, sustainability, and innovation</strong> to deliver products that delight customers worldwide. 
          We take pride in offering custom solutions, sustainable materials, and designs that inspire creativity and elegance.
        </p>

        <p className="mt-4 text-xl text-gray-700 text-center md:text-left">
          Explore our <strong>woven fabrics, finished textiles, leather clothing, womens outerwear, home textiles, and sustainable fabric lines</strong> to experience the perfect balance of quality, style, and eco-conscious production.
        </p>
      </div>
    </section>
    </main>
  );
}
