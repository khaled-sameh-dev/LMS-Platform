// components/course/CourseSidebar.tsx
"use client";

import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import {
  PlayCircle,
  CheckCircle,
  Loader2,
  Share2,
  Clock,
  BookOpen,
  PlaySquare,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Course } from "@/types";

interface CourseSidebarProps {
  course: Course;
  isEnrolled: boolean;
  enrolling: boolean;
  progressPercentage?: number;
  totalChapters: number;
  onEnroll: () => void;
  onCheckout: () => void;
  onContinueLearning: () => void;
}

const CourseSidebar = ({
  course,
  isEnrolled,
  enrolling,
  progressPercentage = 0,
  totalChapters,
  onEnroll,
  onCheckout,
  onContinueLearning,
}: CourseSidebarProps) => {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)}m`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="bg-primary-blue rounded-xl overflow-hidden border border-white/10 sticky top-4">
      {/* Preview Image */}
      <div className="relative aspect-video bg-secondary-blue">
        <img
          src={
            course.thumbnail ||
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          }
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <button className="w-15 h-15 bg-primary-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <PlayCircle className="w-8 h-8 text-white" />
          </button>
        </div>
        <span className="absolute top-4 left-4 px-3 py-1 bg-white text-secondry-blue rounded-full text-sm font-semibold">
          Preview
        </span>
      </div>

      {/* Pricing & Actions */}
      <div className="p-6 space-y-4">
        <div>
          {course.price === 0 ? (
            <div className="text-4xl font-bold text-success">FREE</div>
          ) : (
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">
                {course.currency === "EGP" ? "EGP" : "$"} {course.price}
              </span>
              <Badge className="bg-secondary-blue text-white border-white/10">
                {course.currency}
              </Badge>
            </div>
          )}
        </div>

        {isEnrolled ? (
          <div className="space-y-3">
            <Button
              onClick={onContinueLearning}
              className="w-full bg-success hover:bg-success/80 text-white py-6 text-lg font-semibold"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Continue Learning
            </Button>
            {progressPercentage > 0 && (
              <div className="text-center text-sm text-dirty-grey">
                {Math.round(progressPercentage)}% Complete
              </div>
            )}
          </div>
        ) : course.price > 0 ? (
          <Button
            onClick={onCheckout}
            disabled={course.status !== "PUBLISHED"}
            className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold disabled:opacity-50"
          >
            Proceed to Checkout
          </Button>
        ) : (
          <Button
            onClick={onEnroll}
            disabled={course.status !== "PUBLISHED" || enrolling}
            className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold disabled:opacity-50"
          >
            {enrolling ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enrolling...
              </>
            ) : (
              "Enroll Now"
            )}
          </Button>
        )}

        <Button
          variant="outline"
          className="w-full bg-primary-blue border-white/10 text-white hover:bg-white/10"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Course
        </Button>

        {/* Course Includes */}
        <div className="pt-4 border-t border-white/10 space-y-3 text-sm">
          <p className="text-white font-semibold mb-3">
            This course includes:
          </p>

          {course.duration > 0 && (
            <div className="flex items-center gap-3 text-dirty-grey">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>
                {formatDuration(course.duration)} on-demand content
              </span>
            </div>
          )}

          {course.sections && course.sections.length > 0 && (
            <div className="flex items-center gap-3 text-dirty-grey">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span>{course.sections.length} sections</span>
            </div>
          )}

          {totalChapters > 0 && (
            <div className="flex items-center gap-3 text-dirty-grey">
              <PlaySquare className="w-4 h-4 flex-shrink-0" />
              <span>{totalChapters} lectures</span>
            </div>
          )}

          <div className="flex items-center gap-3 text-dirty-grey">
            <Award className="w-4 h-4 flex-shrink-0" />
            <span>Certificate of completion</span>
          </div>

          <div className="flex items-center gap-3 text-dirty-grey">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Lifetime access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;