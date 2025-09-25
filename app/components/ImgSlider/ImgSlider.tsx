import Slider from "@/components/Slider/Slider";

export default function ImgSlider() {
    const images = [
  "/s1.jpg",
  "/s2.jpg",
  "/s3.jpg",
  "/s4.webp",
  "/s7.jpg",
  "/s9.jpg"
];

    return (
        <div className="w-full">
            <Slider images={images} />
            <p></p>
        </div>
    );
}
