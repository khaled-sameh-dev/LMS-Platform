// app/learn/course/[courseId]/_components/LearnCourseHeader.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Home, X } from "lucide-react";
import { useGetCourseByIdQuery } from "@/store/api";

const LearnCourseHeader = () => {
  const router = useRouter();

  const params = useParams();
  const courseId = params.courseId as string;

  const {
    data: course,
  } = useGetCourseByIdQuery(courseId);

  if (!course) return null;

  return (
    <header className="bg-secondry-blue border-b border-white/10 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push(`/browse/${course.id}`)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          title="Back to course"
        >
          <ArrowLeft className="w-5 h-5 text-dirty-grey" />
        </button>

        <div className="hidden sm:block w-px h-6 bg-white/10" />

        <div className="flex items-center gap-3">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-10 h-10 rounded-lg object-cover hidden sm:block"
          />
          <div>
            <h1 className="text-sm sm:text-base font-semibold text-white line-clamp-1">
              {course.title}
            </h1>
            <p className="text-xs text-dirty-grey hidden sm:block">
              by {course.instructor.firstName} {course.instructor.lastName}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => router.push("/student/my-courses")}
          className="hidden sm:flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-dirty-grey hover:text-white"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">My Courses</span>
        </button>

        <button
          onClick={() => router.push(`/browse/${course.id}`)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          title="Exit course"
        >
          <X className="w-5 h-5 text-dirty-grey" />
        </button>
      </div>
    </header>
  );
};

export default LearnCourseHeader;
