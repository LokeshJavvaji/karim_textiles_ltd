import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TechCardProps {
    data: {
        imageSrc: string;
        title: string;
        description: string;
        date: string;
        readTime: string;
    };
}

const TechCard: React.FC<TechCardProps> = ({ data }) => {
    return (
        <Card className="w-full max-w-xl shadow-lg rounded-2xl overflow-hidden py-0">
            <div className="relative w-full h-64">
                <Image
                    src={data.imageSrc}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                />
            </div>
            <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="text-lg text-blacks-600 mt-2">{data.description}</p>
                <p className="text-xs text-gray-500 mt-4">
                    {data.date} · {data.readTime} read
                </p>
            </CardContent>
        </Card>
    );
};

export default TechCard;
