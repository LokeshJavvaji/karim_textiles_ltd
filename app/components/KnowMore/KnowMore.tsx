import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function KnowMore() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full p-16 pt-0 justify-center items-center text-center">
      <p className="mt-4 text-xl font-bold text-center">
        At Karim Textiles ltd, we weave excellence through our innovative textile manufacturing and finishing solutions, delivering high-quality fabrics and designs that set industry standards.
        Our expertise in weaving, finishing, and garment manufacturing ensures that each product is crafted with precision and care, meeting modern trends while preserving traditional techniques.
        From initial design to final production, we collaborate closely with our clients to understand their needs, providing tailored textile solutions that combine quality with aesthetic appeal.
      </p>
      <Button
        className="mt-6 px-6 py-3 text-lg bg-red-400 hover:bg-red-500 cursor-pointer"
        onClick={() => router.push("/contact")}
      >
        Get in Touch
      </Button>
    </div>
  );
}