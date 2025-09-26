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

export default function FabricsTextiles() {
  const products: Product[] = [
    { id: 1, name: "Premium Cotton Fabric", image: "/fabrics/cotton.jpg", description: "Soft and breathable cotton fabric suitable for casual and formal wear.", price: 8 },
    { id: 2, name: "Linen Fabric", image: "/fabrics/linen.jpg", description: "Lightweight, durable linen perfect for summer outfits.", price: 12 },
    { id: 3, name: "Silk Fabric", image: "/fabrics/silk.jpg", description: "Luxurious silk fabric for premium garments and accessories.", price: 12 },
    { id: 4, name: "Wool Fabric", image: "/fabrics/wool.jpg", description: "Warm and soft wool fabric suitable for coats and winter wear.", price: 19 },
    { id: 5, name: "Denim Fabric", image: "/fabrics/denim.jpg", description: "High-quality denim for jackets, jeans, and casual wear.", price: 10 },
    { id: 6, name: "Chiffon Fabric", image: "/fabrics/chiffon.jpg", description: "Light and flowy chiffon ideal for dresses and scarves.", price: 15 },
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
        <h1 className="text-3xl font-bold mb-4">Fabrics & Textiles</h1>
        <p className="text-gray-700 text-lg">
          Karim Textiles Ltd. offers a wide range of premium fabrics designed for every style and occasion. 
          From soft cotton to luxurious silk, durable denim to elegant chiffon, our fabrics are crafted with precision 
          and care, ensuring comfort, durability, and timeless appeal for garments, home textiles, and custom orders.
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


