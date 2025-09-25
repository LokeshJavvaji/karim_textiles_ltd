"use client";

import TechnologyCard from "@/components/TechCard/TechCard";

export default function KarimTextilesServices() {
  const textileServices = [
    {
      imageSrc: "/t1.jpg",
      title: "Weaving of Textiles",
      description: "Karim Textiles Ltd. specializes in high-quality weaving, producing durable and stylish fabrics suitable for garments, home textiles, and industrial use.",
      date: "March 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/t2.jpg",
      title: "Finishing of Textiles",
      description: "Our textile finishing process ensures fabrics are soft, durable, and visually appealing, meeting international standards for comfort and style.",
      date: "February 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/leather.webp",
      title: "Manufacture of Leather Clothes",
      description: "We craft premium leather garments that combine elegance, durability, and modern design, suitable for both casual and professional wear.",
      date: "January 2024",
      readTime: "2 mins",
    },
    {
      imageSrc: "/woman.webp",
      title: "Other Women's Outerwear",
      description: "Our women’s outerwear line is designed for style, functionality, and comfort, including coats, jackets, and cardigans tailored to every season.",
      date: "December 2023",
      readTime: "2 mins",
    },
    {
      imageSrc: "/custom.jpg",
      title: "Custom Orders",
      description: "Bring your unique vision to life with our bespoke uniforms, sportswear, and fashion products, tailored to your exact specifications.",
      date: "November 2023",
      readTime: "2 mins",
    },
    {
      imageSrc: "/bamboo.jpg",
      title: "Sustainable Fabrics",
      description: "Our eco-friendly fabrics are designed for comfort, style, and durability, including organic cotton, bamboo, and recycled polyester materials.",
      date: "October 2023",
      readTime: "1 min",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-5xl font-bold text-red-600 mb-4">
          KARIM TEXTILES LTD. - CRAFTING EXCELLENCE
        </h1>
      </div>

      {/* Cards */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-12">
        {textileServices.map((service, index) => (
          <TechnologyCard key={index} data={service} />
        ))}
      </div>
    </section>
  );
}
