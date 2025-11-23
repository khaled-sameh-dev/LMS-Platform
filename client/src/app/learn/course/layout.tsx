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

     
      <div className="flex flex-1 overflow-hidden">
      
        <LearnCourseSidebar />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
