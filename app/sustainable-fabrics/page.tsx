"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
type CartItem = Product & { qty: number };

// Save cart to localStorage
const saveCartToStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default function SustainableFabrics() {
  const products: Product[] = [
    { id: 1, name: "Organic Cotton Fabric", image: "/sustainable/cotton.jpg", description: "Soft, breathable, and eco-friendly cotton fabric for clothing and home textiles.", price: 1200 },
    { id: 2, name: "Hemp Fabric", image: "/sustainable/hemp.jpg", description: "Eco-friendly hemp fabric that is strong, breathable, and long-lasting.", price: 1100 },
    { id: 3, name: "Bamboo Fabric", image: "/sustainable/bamboo.jpg", description: "Antibacterial, soft, and sustainable bamboo fabric for comfortable garments.", price: 1500 },
    { id: 4, name: "Recycled Polyester Fabric", image: "/sustainable/poly.jpg", description: "Durable polyester made from recycled plastic bottles, suitable for fashion and upholstery.", price: 900 },
    { id: 5, name: "Tencel Fabric", image: "/sustainable/tencel.jpg", description: "Sustainable fabric made from wood pulp, silky smooth and perfect for clothing.", price: 1300 },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Introduction */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Sustainable Fabrics</h1>
        <p className="text-gray-700 text-lg">
          Karim Textiles Ltd. is committed to eco-friendly innovation. Our Sustainable Fabrics collection includes organic cotton, bamboo, recycled polyester, hemp, and other materials that are gentle on the environment. 
          Designed for fashion, home textiles, and industrial applications, these fabrics ensure comfort, durability, and style without compromising sustainability.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-md object-cover" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="font-medium mt-1">₹{product.price}</p>
            <Button className="mt-4 w-full" onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
