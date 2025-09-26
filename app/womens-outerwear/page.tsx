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

export default function WomensOuterwear() {
  const products: Product[] = [
  { 
    id: 1, 
    name: "Elegant Palazzo Pants", 
    image: "/outerwear/palazzo.jpg", 
    description: "Comfortable and stylish palazzo pants perfect for casual and formal wear.", 
    price: 32
  },
  { 
    id: 2, 
    name: "Trendy Croptop", 
    image: "/outerwear/croptop.jpg", 
    description: "Chic croptop designed for everyday fashion and party wear.", 
    price: 18
  },
  { 
    id: 3, 
    name: "Bodycon Dress", 
    image: "/outerwear/bodycon.jpg", 
    description: "Elegant bodycon dress that hugs your curves and suits any occasion.", 
    price: 45
  },
  { 
    id: 4, 
    name: "Warm Puffer Jacket", 
    image: "/outerwear/puffer.jpg", 
    description: "Insulated puffer jacket for cold weather and outdoor activities.", 
    price: 50 
  },
  { 
    id: 5, 
    name: "Lightweight Cardigan", 
    image: "/outerwear/cardigan.jpg", 
    description: "Soft and versatile cardigan for layering in any season.", 
    price: 30
  },
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
        <h1 className="text-3xl font-bold mb-4">Women’s Outerwear</h1>
        <p className="text-gray-700 text-lg">
          Karim Textiles Ltd. presents a premium collection of Women’s Outerwear combining style, comfort, and functionality. 
          From cozy winter coats to trendy jackets and lightweight cardigans, our garments are designed to suit all seasons and body types. 
          Crafted with premium fabrics and meticulous stitching, our outerwear ensures elegance and durability for every wardrobe.
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


