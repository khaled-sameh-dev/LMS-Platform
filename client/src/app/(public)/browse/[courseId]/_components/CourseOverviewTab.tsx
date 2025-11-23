// components/course/tabs/CourseOverviewTab.tsx
"use client";

import { CheckCircle } from "lucide-react";
import { Course } from "@/types";

interface CourseOverviewTabProps {
  course: Course;
}

const CourseOverviewTab = ({ course }: CourseOverviewTabProps) => {
  return (
    <div className="bg-secondry-blue rounded-lg p-8 space-y-8">
      {/* Learning Outcomes */}
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            What you'll learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-dirty-grey">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Requirements */}
      {course.requirements && course.requirements.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Requirements</h2>
          <ul className="space-y-2">
            {course.requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-dirty-grey"
              >
                <span className="text-main-blue mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Description</h2>
        <p className="text-dirty-grey leading-relaxed whitespace-pre-line">
          {course.description}
        </p>
      </div>
    </div>
  );
};

export default CourseOverviewTab;