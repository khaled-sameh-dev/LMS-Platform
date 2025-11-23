import { ReactNode } from "react";
import LearnCourseHeader from "./_components/LearnCourseHeader";


import LearnCourseSidebar from "./_components/LearnCourseSidebar";

interface LearnLayoutProps {
  children: ReactNode;
}

export default function LearnLayout({ children }: LearnLayoutProps) {
  
  return (
    <div className="min-h-screen bg-primary-blue flex flex-col">
      <LearnCourseHeader/>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <LearnCourseSidebar />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
