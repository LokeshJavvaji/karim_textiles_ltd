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

export default function HomeTextiles() {
  const products: Product[] = [
    { id: 1, name: "Elegant Curtains", image: "/home/curtains.jpg", description: "Premium curtains to enhance your living space.", price: 3200 },
    { id: 2, name: "Luxury Bedsheet Set", image: "/home/bedsheets.jpg", description: "Comfortable and durable bedsheet set with elegant designs.", price: 4500 },
    { id: 3, name: "Decorative Cushions", image: "/home/cushions.jpg", description: "Stylish cushions for your sofa and bedroom.", price: 1200 },
    { id: 4, name: "Table Runner Set", image: "/home/table.jpg", description: "Elegant table runners for dining and coffee tables.", price: 900 },
    { id: 5, name: "Floor Rugs", image: "/home/ugs.jpg", description: "Soft and durable rugs to add warmth to any room.", price: 5200 },
    { id: 6, name: "Throw Blankets", image: "/home/throws.jpg", description: "Cozy throw blankets for living room and bedroom.", price: 2800 },
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
        <h1 className="text-3xl font-bold mb-4">Home Textiles</h1>
        <p className="text-gray-700 text-lg">
          At Karim Textiles Ltd., our Home Textiles collection is designed to bring comfort, elegance, and style to your living spaces. 
          From luxurious bedsheets and soft cushions to elegant curtains and cozy throws, our products combine quality craftsmanship with modern designs. 
          Transform your home with textiles that are both durable and aesthetically pleasing.
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

