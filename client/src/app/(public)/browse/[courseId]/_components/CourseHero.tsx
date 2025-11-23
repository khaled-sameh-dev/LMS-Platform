// components/course/CourseHero.tsx
"use client";

import { Badge } from "@/app/_components/ui/badge";
import {
  Tag,
  Users,
  BookOpen,
  Clock,
  Star,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Course } from "@/types";

interface CourseHeroProps {
  course: Course;
  isEnrolled: boolean;
  totalChapters: number;
}

const CourseHero = ({ course, isEnrolled, totalChapters }: CourseHeroProps) => {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)}m`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex items-center gap-3 flex-wrap">
        {isEnrolled && (
          <Badge className="bg-success/20 border-success text-success px-4 py-1.5">
            <CheckCircle className="w-4 h-4 mr-1" />
            Enrolled
          </Badge>
        )}
        <Badge
          className={`px-3 py-1 border ${
            course.status === "PUBLISHED"
              ? "border-success/50 text-success"
              : "border-dirty-grey text-dirty-grey"
          }`}
        >
          {course.status}
        </Badge>
        <Badge className="bg-primary-blue text-white border border-white/20 px-3 py-1">
          {course.level}
        </Badge>
        <Badge className="bg-primary-blue text-white border border-white/20 py-1 px-3">
          <Tag className="w-3 h-3 mr-1" />
          {course.category.name}
        </Badge>
      </div>

      {/* Title & Description */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {course.title}
        </h1>
        <p className="text-dirty-grey text-lg leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2 text-dirty-grey">
          <Users className="w-5 h-5" />
          <span className="font-semibold">{course.studentsCount} students</span>
        </div>

        {totalChapters > 0 && (
          <div className="flex items-center gap-2 text-dirty-grey">
            <BookOpen className="w-5 h-5" />
            <span>{totalChapters} lectures</span>
          </div>
        )}

        {course.duration > 0 && (
          <div className="flex items-center gap-2 text-dirty-grey">
            <Clock className="w-5 h-5" />
            <span>{formatDuration(course.duration)}</span>
          </div>
        )}

        {course.rating > 0 && (
          <div className="flex items-center gap-2 text-dirty-grey">
            <Star className="w-5 h-5 fill-warning text-warning" />
            <span className="font-semibold">{course.rating.toFixed(1)}</span>
            <span>({course.reviewsCount})</span>
          </div>
        )}

        {course.updatedAt && (
          <div className="flex items-center gap-2 text-dirty-grey">
            <Calendar className="w-5 h-5" />
            <span>
              Updated{" "}
              {new Date(course.updatedAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        )}
      </div>

      {/* Instructor */}
      <div className="flex items-center gap-4 pt-4">
        <img
          src={course.instructor.avatar || "https://i.pravatar.cc/150"}
          alt={`${course.instructor.firstName} ${course.instructor.lastName}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-dirty-grey text-sm">Created by</p>
          <h3 className="text-white font-semibold text-lg">
            {course.instructor.firstName} {course.instructor.lastName}
          </h3>
          {course.instructor.bio && (
            <p className="text-dirty-grey text-sm line-clamp-1">
              {course.instructor.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
