import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface DetailCardProps {
  data: {
    imageSrc: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
  };
}

const DetailCard: React.FC<DetailCardProps> = ({ data }) => {
  return (
    <Card className="w-full border-0 rounded-xl overflow-hidden py-0">
      <div className="relative w-full h-64">
        <Image
          src={data.imageSrc}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <p className="text-lg text-gray-600">{data.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{data.date}</span>
          <span>{data.readTime} read</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailCard;
