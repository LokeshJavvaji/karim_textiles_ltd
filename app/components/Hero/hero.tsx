import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-2">
        <Image src="/h.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-black">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
           Karim Textiles ltd
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Your Trusted Partner in Textile Manufacturing and Design
        </p>
        <Button
          className="mt-6 px-6 py-3 text-lg bg-red-400 hover:bg-red-500"
          onClick={() => router.push("/about-us")}
        >
          Discover More
        </Button>
      </div>
    </section>
  );
}