'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Product & Cart Types
type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

type CartItem = Product & { qty: number; };

type Address = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

type PaymentMethod = "card" | "upi" | "cod";

// Get cart from localStorage
const getCartFromStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<"cart" | "address" | "payment" | "review">("cart");
  const [address, setAddress] = useState<Address>({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  useEffect(() => {
    setCart(getCartFromStorage());
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id: number) =>
    saveCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));

  const decreaseQty = (id: number) =>
    saveCart(cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item).filter(item => item.qty > 0));

  const removeItem = (id: number) =>
    saveCart(cart.filter(item => item.id !== id));

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => setStep("address");
  const handlePaymentNext = () => setStep("review");
  const handleConfirmOrder = () => {
    alert(`Order Confirmed!\nTotal: £${totalPrice}\nPayment: ${paymentMethod}`);
    saveCart([]);
    setStep("cart");
  };

  const addressFields: (keyof Address)[] = ["name", "street", "city", "state", "zip"];

  if (cart.length === 0)
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      </div>
    );

  return (
    <div className="container mx-auto p-6 bg-yellow-100">
      {/* ------------------ CART STEP ------------------ */}
      {step === "cart" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <div className="flex flex-col space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="mt-1 font-medium">£{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={() => decreaseQty(item.id)}>-</Button>
                  <span>{item.qty}</span>
                  <Button size="sm" onClick={() => increaseQty(item.id)}>+</Button>
                  <Button size="sm" variant="destructive" onClick={() => removeItem(item.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: £{totalPrice}</h2>
            <Button size="lg" onClick={handleCheckout}>Proceed to Address</Button>
          </div>
        </>
      )}

      {/* ------------------ ADDRESS STEP ------------------ */}
      {step === "address" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Shipping Address</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addressFields.map(field => (
              <input
                key={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={address[field]}
                onChange={e => setAddress(prev => ({ ...prev, [field]: e.target.value }))}
                className="p-2 border rounded w-full"
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Button size="lg" onClick={() => setStep("cart")}>Back to Cart</Button>
            <Button size="lg" onClick={() => setStep("payment")}>Proceed to Payment</Button>
          </div>
        </>
      )}

      {/* ------------------ PAYMENT STEP ------------------ */}
      {step === "payment" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Payment Method</h1>
          <div className="flex flex-col gap-4">
            {(["card", "upi", "cod"] as PaymentMethod[]).map(method => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                <span className="capitalize">{method}</span>
              </label>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Button size="lg" onClick={() => setStep("address")}>Back to Address</Button>
            <Button size="lg" onClick={handlePaymentNext}>Review Order</Button>
          </div>
        </>
      )}

      {/* ------------------ REVIEW STEP ------------------ */}
      {step === "review" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Review Your Order</h1>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Shipping Address</h2>
            <p>{address.name}, {address.street}, {address.city}, {address.state} - {address.zip}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Items</h2>
            <ul className="space-y-2">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.qty}</span>
                  <span>£{item.price * item.qty}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Payment Method</h2>
            <p className="capitalize">{paymentMethod}</p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-bold">Total: £{totalPrice}</h2>
            <Button size="lg" onClick={handleConfirmOrder}>Confirm Order</Button>
          </div>
        </>
      )}
    </div>
  );
}

