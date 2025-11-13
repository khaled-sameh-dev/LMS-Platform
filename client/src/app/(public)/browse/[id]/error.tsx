"use client";

import { useEffect } from "react";
import { Button } from "@/app/_components/ui/button";
import { AlertCircle, RefreshCw, Home, BookOpen } from "lucide-react";

export default function CourseError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Course page error:", error);
  }, [error]);

  const getErrorMessage = (error: Error) => {
    if (error.message?.includes("404")) {
      return "The course you're looking for doesn't exist or may have been removed.";
    }
    if (error.message?.includes("Network")) {
      return "Network error. Please check your internet connection and try again.";
    }
    if (error.message?.includes("401")) {
      return "You don't have permission to access this course.";
    }
    return error.message || "Failed to load course details. Please try again.";
  };

  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500/20">
          <AlertCircle className="w-10 h-10 text-red-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-dirty-grey mb-8 text-lg leading-relaxed">
          {getErrorMessage(error)}
        </p>
        
        <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mb-8">
          <p className="text-red-400 text-sm font-mono">
            Error: {error.message || "Unknown error"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="bg-accent hover:bg-accent/80 text-white flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button
            onClick={() => window.location.href = "/browse"}
            className="bg-secondry-blue hover:bg-secondry-blue/80 text-white flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Browse Courses
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            className="bg-primary-blue hover:bg-primary-blue/80 text-white border border-white/10 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}