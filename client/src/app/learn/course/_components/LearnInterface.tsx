// app/learn/course/[courseId]/_components/LearnInterface.tsx
"use client";

import { ReactNode } from "react";
import { Course } from "@/types";
import LearnCourseHeader from "./LearnCourseHeader";
import LearnCourseSidebar from "./LearnCourseSidebar";

interface LearnInterfaceProps {
  course: Course;
  courseId: string;
  children: ReactNode;
}

const LearnInterface = ({
  course,
  courseId,
  children,
}: LearnInterfaceProps) => {
  return (
    <div className="min-h-screen bg-primary-blue flex flex-col">
      {/* Header */}
      <LearnCourseHeader course={course} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <LearnCourseSidebar course={course} courseId={courseId} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default LearnInterface;
