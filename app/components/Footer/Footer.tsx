import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-white">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-600">Stay updated with our latest news.</p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="border rounded-md px-3 py-2 w-full sm:flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-600">
            CITY VIEW, FLAT 208, AXON PLACE, CENTREWAY APARTMENTS, ILFORD, ESSEX, IG1 1NL, UNITED KINGDOM
          </p>
          <p className="text-sm text-gray-600">swapnaseelam22@GMAIL.COM</p>
          <p className="text-sm text-gray-600">Contact: 07438208695</p>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Image
            src="/Preview.jpg"
            alt="KARIM TEXTILES LTD Logo"
            width={250}
            height={200}
          />
          <p className="text-sm text-gray-600">
            &copy; 2025 KARIM TEXTILES LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}