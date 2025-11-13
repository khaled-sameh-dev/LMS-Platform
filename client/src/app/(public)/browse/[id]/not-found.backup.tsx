"use client";

import { Button } from "@/app/_components/ui/button";
import { Search, BookOpen, Home, ArrowLeft } from "lucide-react";

export default function CourseNotFound() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Animated search icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-500/20">
            <Search className="w-10 h-10 text-yellow-400" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-yellow-500/5 rounded-full animate-pulse mx-auto"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Course Not Found
        </h2>
        <p className="text-dirty-grey mb-8 text-lg leading-relaxed">
          We couldn't find the course you're looking for. It may have been removed, 
          renamed, or the link might be incorrect.
        </p>
        
        {/* Suggestions */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-white font-semibold mb-3">What you can do:</h3>
          <ul className="text-dirty-grey text-sm space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              Check if the course link is correct
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              Browse our available courses
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              Contact support if you think this is an error
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.history.back()}
            className="bg-primary-blue hover:bg-primary-blue/80 text-white border border-white/10 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button
            onClick={() => window.location.href = "/browse"}
            className="bg-accent hover:bg-accent/80 text-white flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Browse Courses
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            className="bg-secondry-blue hover:bg-secondry-blue/80 text-white flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}