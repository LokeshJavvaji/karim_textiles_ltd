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
type CartItem = Product & { qty: number; };

// Save cart to localStorage
const saveCartToStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default function CustomOrders() {
  const products: Product[] = [
  {
    id: 1,
    name: "Bespoke Wedding Dress",
    image: "/custom/dress.jpg",
    description: "Handcrafted wedding dresses tailored to your style and measurements.",
    price: 50,
  },
  {
    id: 2,
    name: "Customized Bed",
    image: "/custom/bed.jpg",
    description: "Design your dream bed with premium materials and perfect dimensions.",
    price: 60,
  },
  {
    id: 3,
    name: "Customized Chair",
    image: "/custom/chair.jpg",
    description: "Ergonomic and stylish chairs made to your specifications.",
    price: 40,
  },
  {
    id: 4,
    name: "Custom Sofa",
    image: "/custom/sofa.jpg",
    description: "Luxury sofas tailored for your living room, comfort, and style.",
    price: 50,
  },
  {
    id: 5,
    name: "Personalized Shoes",
    image: "/custom/shoes.jpg",
    description: "Unique shoes crafted to match your design preferences and size.",
    price: 25,
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
      <h1 className="text-3xl font-bold mb-6">Custom Orders</h1>
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


