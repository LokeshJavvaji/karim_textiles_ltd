"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  id?: number;
  title: string;
  description: string;
  image?: string;
  price?: number;
}

interface ServiceContent {
  id?: number;
  title: string;
  description: string;
  image?: string;
  price?: number;
}

interface ServiceData {
  type: string;
  image: string;
  video: string;
  content: ServiceContent[];
}

export const ServicesPage = ({
  data,
  handleAddToCart,
  handleRemoveFromCart,
  cart = [],
}: {
  data: ServiceData[];
  handleAddToCart?: (product: Product) => void;
  handleRemoveFromCart?: (productId: number) => void;
  cart?: Product[];
}) => {
  const router = useRouter();

  if (!data || data.length === 0) {
    return (
      <main className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600">
          No service data available.
        </p>
      </main>
    );
  }

  const isInCart = (id: number | undefined) => {
    if (!id) return false;
    return cart.some((item) => item.id === id);
  };

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="relative w-full h-[100vh]">
          <Image
            src={data[0].image}
            alt="Service Hero Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <h1 className="absolute top-20 left-20 text-white text-5xl font-bold drop-shadow-lg">
            {data[0].type}
          </h1>
          {data[0].video && (
            <div className="flex justify-center">
              <iframe
                className="absolute top-40 w-[500px] h-[300px] z-10"
                src={`${data[0].video}?autoplay=1&loop=1&playlist=${data[0].video.split("/").pop()}`}
                title="YouTube video"
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-4 py-8">
        <p className="text-2xl mb-6">
          <strong>{data[0].content[0]?.title}:</strong>{" "}
          {data[0].content[0]?.description}
        </p>

        {data.slice(1).map((miniData, index) => (
          <div key={index} className="mb-12">
            {/* Image */}
            {miniData.image && (
              <div className="flex justify-center py-3">
                <div className="relative w-[700px] h-[700px] max-w-full">
                  <Image
                    src={miniData.image}
                    alt={`${miniData.type} Image`}
                    fill
                    sizes="700px"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            )}

            {/* Section Title */}
            {miniData.type && (
              <h2 className="text-3xl font-bold mb-6">{miniData.type}</h2>
            )}

            {/* Products / Features */}
            {miniData.content[0]?.image ? (
              <div className="grid md:grid-cols-3 gap-8">
                {miniData.content.map((product, idx) => (
                  <div
                    key={product.id || idx}
                    className="p-6 border rounded-lg shadow hover:shadow-lg transition"
                  >
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="rounded-md"
                      />
                    )}
                    <h4 className="text-2xl font-semibold mt-4">
                      {product.title}
                    </h4>
                    <p className="text-lg mt-2">{product.description}</p>
                    {product.price && (
                      <p className="text-lg mt-2">Price: ${product.price}</p>
                    )}
                    <div className="flex gap-2 mt-4">
                      {handleAddToCart && !isInCart(product.id) && (
                        <button
                          onClick={() =>
                            handleAddToCart({
                              id: product.id,
                              title: product.title,
                              description: product.description,
                              image: product.image,
                              price: product.price!,
                            })
                          }
                          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition"
                        >
                          Add to Cart
                        </button>
                      )}
                      {handleRemoveFromCart && isInCart(product.id) && (
                        <button
                          onClick={() => handleRemoveFromCart(product.id!)}
                          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="pl-6 pt-4 space-y-4">
                {miniData.content.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xl flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-2xl font-bold">{idx + 1}.</span>
                    <p>
                      <strong className="font-semibold">
                        {feature.title}:
                      </strong>{" "}
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
};
