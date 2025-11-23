// app/learn/course/[courseId]/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function LearnError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Learn page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-error" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Something Went Wrong
        </h2>
        <p className="text-dirty-grey mb-2">
          We encountered an error while loading this course.
        </p>
        {error.message && (
          <p className="text-sm text-dirty-grey mb-6 font-mono bg-primary-blue px-4 py-2 rounded">
            {error.message}
          </p>
        )}
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/student/my-courses"
            className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10"
          >
            My Courses
          </Link>
        </div>
      </div>
    </div>
  );
}