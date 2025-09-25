'use client';

import Link from 'next/link';

interface Promotion {
  title: string;
  description: string;
  link: string;
  badge?: string;
  highlights?: string[];
}

// Promotions data
const promotions: Promotion[] = [
  {
    title: 'WEAVING OF TEXTILES',
    description: 'Karim Textiles Ltd. specializes in high-quality weaving, producing durable and stylish fabrics suitable for garments, home textiles, and industrial use.',
    link: '/fabrics-textiles',
    highlights: [
      'Precision weaving for consistent quality',
      'Wide range of fabric types and colors',
      'Custom designs for fashion and industrial clients',
    ],
  },
  {
    title: 'FINISHING OF TEXTILES',
    description: 'Our textile finishing process ensures fabrics are soft, durable, and visually appealing, meeting international standards for comfort and style.',
    link: '/fabrics-textiles',
    highlights: [
      'Softening, dyeing, and treatment processes',
      'Enhanced durability and fabric aesthetics',
      'Eco-friendly and sustainable finishing methods',
    ],
  },
  {
    title: 'MANUFACTURE OF LEATHER CLOTHES',
    description: 'We craft premium leather garments that combine elegance, durability, and modern design, suitable for both casual and professional wear.',
    link: '/leather-clothing',
    highlights: [
      'Leather jackets, pants, and coats',
      'High-quality, ethically sourced leather',
      'Timeless fashion with superior comfort',
    ],
  },
  {
    title: "MANUFACTURE OF OTHER WOMEN'S OUTERWEAR",
    description: 'Our women’s outerwear line is designed for style, functionality, and comfort, including coats, jackets, and cardigans tailored to every season.',
    link: '/womens-outerwear',
    highlights: [
      'Fashionable and functional designs',
      'Premium fabrics and stitching',
      'Sizes and styles for all body types',
    ],
  },
  {
    title: 'Custom Orders – Tailored for You',
    description: 'Bring your unique vision to life with our bespoke uniforms, sportswear, and fashion products.',
    link: '/custom-orders',
    badge: 'Exclusive',
    highlights: [
      'Handcrafted quality with premium fabrics',
      'Perfect fit for your space or team',
      'Special discounts on bulk orders',
    ],
  },
  {
    title: 'Sustainable Fabrics – Eco & Elegant',
    description: 'Go green without compromising style. Our eco-friendly fabrics are designed for comfort and durability.',
    link: '/sustainable-fabrics',
    badge: 'Eco-Friendly',
    highlights: [
      'Organic cotton & bamboo fabrics',
      'Recycled polyester materials',
      'Safe for sensitive skin and environment',
    ],
  },
  {
    title: 'Home Textiles – Comfort Meets Design',
    description: 'Upgrade your living space with our stylish, durable, and affordable home textiles.',
    link: '/home-textiles',
    highlights: [
      'Elegant curtains & cushions',
      'Long-lasting bedsheets',
      'Perfect for gifting or personal use',
    ],
  },
];

interface ServicesSectionProps {
  active?: boolean;
}

// Correct component definition
const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section className="bg-yellow-100 py-12"> {/* Changed background to pink */}
      <div className="container mx-auto px-4">
        {/* Company Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black-500 mb-4">
            About Karim Textiles Ltd.
          </h1>
          <p className="text-lg text-gray-700">
            Karim Textiles Ltd. is a leading manufacturer in the textile and leather industry, 
            committed to delivering premium products that blend traditional craftsmanship with modern innovation. 
            From weaving and finishing textiles to creating fashionable leather garments and outerwear, 
            our focus is on quality, sustainability, and customer satisfaction.
          </p>
        </div>

        {/* Promotions */}
        <h2 className="text-4xl font-bold text-black-500 mb-10">
          Our Key Products & Promotions
        </h2>
        <div className="space-y-8">
          {promotions.map((promo) => (
            <div
              key={promo.title}
              className="p-6 border-l-4 border-red-500 bg-violet-200 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">{promo.title}</h3>
                {promo.badge && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {promo.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-3">{promo.description}</p>
              {promo.highlights && (
                <ul className="list-disc pl-6 mb-3 text-gray-600">
                  {promo.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <Link
                href={promo.link}
                className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded transition"
              >
                Explore Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
