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

export default function LeatherClothing() {
  const products: Product[] = [
    { id: 1, name: "Leather Jacket", image: "/leather/jacket.jpg", description: "Classic leather jacket with timeless style and durability.", price: 25 },
     { id: 2, name: "Leather Vest", image: "/leather/vest.jpg", description: "Stylish leather vest for casual and formal outfits.", price: 15 },
    { id: 3, name: "Leather Coat", image: "/leather/coat.jpg", description: "Elegant long leather coat designed for style and warmth.", price: 22 },
    { id: 4, name: "Leather Pants", image: "/leather/pants.jpg", description: "Premium leather pants offering comfort and a modern look.", price: 12 },
    { id: 5, name: "Leather Skirt", image: "/leather/skirt.jpg", description: "Chic leather skirt suitable for trendy fashion looks.", price: 16 },
    { id: 6, name: "Leather Blazer", image: "/leather/blazer.jpg", description: "Modern leather blazer, perfect for office or evening wear.", price: 18 },
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
        <h1 className="text-3xl font-bold mb-4">Leather Clothing</h1>
        <p className="text-gray-700 text-lg">
          At Karim Textiles Ltd., our Leather Clothing collection combines elegance, durability, and modern fashion. 
          We craft premium leather jackets, pants, coats, vests, skirts, and blazers using ethically sourced leather and meticulous craftsmanship. 
          Each product is designed to provide comfort, style, and long-lasting quality for both casual and professional occasions.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-md object-cover" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="font-medium mt-1">£{product.price}</p>
            <Button className="mt-4 w-full" onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
}


