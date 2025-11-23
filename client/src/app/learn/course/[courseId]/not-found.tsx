// app/learn/course/[courseId]/not-found.tsx
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function LearnNotFound() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-10 h-10 text-error" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">
          Course Not Found
        </h2>
        <p className="text-dirty-grey mb-6">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/student/my-courses"
            className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
          >
            My Courses
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}