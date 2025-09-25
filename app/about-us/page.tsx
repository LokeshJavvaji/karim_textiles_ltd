import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/s1.jpg",
  "/s2.jpg",
  "/s3.jpg",
  "/s4.webp",
  "/s7.jpg",
  "/s9.jpg",
];

export default function AboutUs() {
  return (
    <main className="bg-yellow-100"> {/* Changed background to yellow */}
      {/* Hero Section */}
      <section className="flex flex-col items-center">
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:max-w-6xl lg:max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Weaving Excellence with Karim Textiles ltd.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            At Karim Textiles ltd., we provide premium textile manufacturing, finishing, and design solutions for a diverse range of products.
          </p>
          <Link
            href="/our-products"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our textiles"
          >
            know More
          </Link>
        </div>
        <Slider images={slides} />
        <div className="w-full p-6 text-center mx-auto">
          <p className="text-2xl">
            Our mission is to deliver exceptional textile products that combine tradition with modern innovation, ensuring quality and sustainability.
          </p>
        </div>
      </section>

      <br />

      {/* Testimonials Section */}
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="text-center font-bold text-4xl text-red-700">
          Why Choose Karim Textiles ltd.?
        </h1>
        <div className="container mx-auto p-4 px-10">
          <div className="flex justify-center grid gap-4">
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Karim Textiles ltd. has consistently delivered high-quality fabrics that exceed our expectations.
              </blockquote>
              <cite className="text-lg text-gray-500"> - John D., Retailer</cite>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Their innovative finishing techniques have transformed our product line.
              </blockquote>
              <cite className="text-lg text-gray-500"> - Emily C., Fashion Designer</cite>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="relative w-full h-[300px] md:w-[600px] md:h-[500px] lg:w-[900px] lg:h-[00px]">
            <Image
              src="/shop1.jpg"
              alt="Textile production process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Textile Solutions Section */}
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="text-center font-bold text-5xl text-red-700">
          Our Textile Solutions
        </h1>
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="bg-violet-100 shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">WEAVING OF TEXTILES</h2>
            <p className="text-lg">
              Utilizing advanced weaving techniques that blend traditional craftsmanship with modern innovation.
            </p>
          </div>
          <div className="bg-violet-100 shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">FINISHING OF TEXTILES</h2>
            <p className="text-lg">
              Expert finishing services that enhance the texture, durability, and appeal of our textiles.
            </p>
          </div>
          <div className="bg-violet-100 shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">MANUFACTURE OF LEATHER CLOTHES</h2>
            <p className="text-lg">
              Producing high-quality leather garments that combine style with robustness.
            </p>
          </div>
          <div className="bg-violet-100 shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">MANUFACTURE OF OTHER WOMEN&apos;S OUTERWEAR</h2>
            <p className="text-lg">
              Designing and producing stylish outerwear that meets the diverse needs of modern women.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
