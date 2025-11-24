import { Card } from "../../_components/ui/card";
import {  priceFormat } from "@/utilis";
import Image from "next/image";
import  { Suspense, useState } from "react";
import {
  BookOpen,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import CourseCardSkeleton from "./skeletons/CourseCardSkeleton";
import { useRouter } from "next/navigation";
import { Course } from "@/types";
import type { CURRENCY } from "@/types";
import {
  useGetEnrollmentStatusQuery,
  useGetCourseProgressQuery,
} from "@/store/api";
import { useUser } from "@clerk/nextjs";

interface CourseCardMainProps {
  onClick?: () => void;
  course: Course;
}

const CourseCardMain = ({ onClick, course }: CourseCardMainProps) => {
  const [image, setImage] = useState(course.thumbnail || "/images/hero1.jpg");
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const router = useRouter();
  const { user } = useUser();

  // Check enrollment status
  const { data: enrollmentStatus } = useGetEnrollmentStatusQuery(course.id, {
    skip: !user, // Skip if user not logged in
  });

  // Get progress if enrolled
  const { data: progress } = useGetCourseProgressQuery(course.id, {
    skip: !enrollmentStatus?.isEnrolled,
  });

  const isEnrolled = enrollmentStatus?.isEnrolled || false;
  const progressPercentage = progress?.progressPercentage || 0;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/browse/${course.id}`);
    }
  };

  return (
    <Card
      onClick={handleClick}
      className="group py-0 relative rounded-xl overflow-hidden h-full shadow-lg w-full bg-secondry-blue border border-white/5 hover:border-dirty-grey hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 cursor-pointer"
    >
      {/* Image Container with Overlay */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-primary-blue">
        {/* Loading Skeleton */}
        {imageLoading && (
          <div className="absolute inset-0 bg-primary-blue animate-pulse" />
        )}

        <Image
          src={image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-all duration-700 ${
            imageLoading ? "opacity-0" : "opacity-100"
          } group-hover:scale-110`}
          onLoadingComplete={() => setImageLoading(false)}
          onError={() => {
            setImage("/images/hero1.jpg");
            setImageLoading(false);
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondry-blue via-secondry-blue/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Price Badge or Enrolled Badge */}
        <div className="absolute top-3 right-3 z-10">
          {isEnrolled ? (
            <div className="px-3 py-1.5 rounded-full bg-success/90 backdrop-blur-sm shadow-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <p className="text-white text-sm font-bold">Enrolled</p>
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-full bg-main-blue/90 backdrop-blur-sm shadow-lg">
              <p className="text-white text-sm font-bold">
                {priceFormat(course.price ?? 0, "USD" as CURRENCY)}
              </p>
            </div>
          )}
        </div>

        {/* Level Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div className="px-3 py-1.5 rounded-full bg-primary-blue/90 backdrop-blur-sm border border-white/10 shadow-lg">
            <p className="text-white/90 text-xs font-semibold uppercase tracking-wide">
              {course.level}
            </p>
          </div>
        </div>

        {/* Progress Badge (if enrolled and has progress) */}
        {isEnrolled && progressPercentage > 0 && (
          <div className="absolute bottom-3 right-3 z-10">
            <div className="px-3 py-1.5 rounded-full bg-main-blue/90 backdrop-blur-sm shadow-lg flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-white" />
              <p className="text-white text-sm font-bold">
                {Math.round(progressPercentage)}%
              </p>
            </div>
          </div>
        )}

        {/* Hover Overlay with Action */}
        <div className="absolute inset-0 bg-main-blue/0 group-hover:bg-main-blue/20 transition-all duration-500 flex items-center justify-center">
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="px-6 py-3 bg-white rounded-full shadow-xl">
              <p className="text-secondry-blue font-bold text-sm flex items-center gap-2">
                <BookOpen size={16} />
                {isEnrolled ? "Continue Learning" : "View Course"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between gap-4 p-5">
        {/* Title & Teacher */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base lg:text-lg font-bold line-clamp-2 text-white group-hover:text-main-blue transition-colors duration-300 leading-snug">
            {course.title}
          </h2>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center flex-shrink-0">
              <span className="text-main-blue text-xs font-bold">
                {course.instructor.firstName.charAt(0).toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-dirty-grey hover:text-white transition-colors duration-200 line-clamp-1">
              Dr.{" "}
              {course.instructor.firstName + " " + course.instructor.lastName}
            </p>
          </div>
        </div>

        {/* Progress Bar (if enrolled) */}
        {isEnrolled && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-dirty-grey">Your Progress</span>
              <span className="text-main-blue font-semibold">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-primary-blue rounded-full h-2 overflow-hidden">
              <div
                className="bg-main-blue h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            {progress && (
              <p className="text-xs text-dirty-grey">
                {progress.completedChapters} of {progress.totalChapters} lessons
                completed
              </p>
            )}
          </div>
        )}

        {/* Category Tag */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1.5 font-semibold text-xs bg-primary-blue text-white/80 hover:text-white rounded-full border border-white/10 hover:border-main-blue/50 transition-all duration-300 shadow-sm">
              {course.category.name}
            </span>
          </div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </Card>
  );
};

const CourseCard = ({ course, onClick }: CourseCardMainProps) => {
  return (
    <Suspense fallback={<CourseCardSkeleton />}>
      <CourseCardMain course={course} onClick={onClick} />
    </Suspense>
  );
};

export default CourseCard;
