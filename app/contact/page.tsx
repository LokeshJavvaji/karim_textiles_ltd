"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting Karim Textiles Ltd.! We will respond shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Header Image */}
      <div className="max-w-2xl mx-auto p-8 space-y-6 bg-yellow-100 rounded-lg text-center">
        <Image
          src="/contact.jpg"
          alt="Karim Textiles Contact"
          width={700}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8 bg-yellow-100 rounded-lg">
        {/* Company Info */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-red-600">KARIM TEXTILES LTD</h2>
          
              <p className="text-gray-700">
                Director & Shareholder: Swapna Seelam
              </p>
              <div className="flex flex-col space-y-3 text-gray-600 mt-3">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>City View, Flat 208, Axon Place, Centreway Apartments, Ilford, Essex, IG1 1NL, UK</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span> 07438208695</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>swapnaseelam22@gmail.com</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-center text-red-600">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Google Map */}
        <div className="w-full h-84 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4286134609515!2d0.0748203757679639!3d51.56037567182533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7d75b36eaed%3A0x21b554835ba533b!2sCenterway%20apartment!5e0!3m2!1sen!2sin!4v1758821127756!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
