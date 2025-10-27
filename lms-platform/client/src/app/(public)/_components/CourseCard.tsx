import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CourseCardProps {
  onClick?: () => void;
  course: Course;
  isSelected?: boolean;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="rounded-lg shadow-md bg-secondry-blue flex flex-col gap-19 sm:gap-8 md:gap-6 overflow-hidden transition duration-500 cursor-pointer h-full">
      <div className="relative w-auto">
        <Image
          src={course.image?.toString() || "/images/hero1.jpg"}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw ,(max-width: 1200px) 50vw 30vw"
          className="transition-transform "
        />
      </div>
      <div className="flex-grow flex flex-col justify-between w-full h-full p-6">

      </div>
    </Card>
  );
};

export default CourseCard;
