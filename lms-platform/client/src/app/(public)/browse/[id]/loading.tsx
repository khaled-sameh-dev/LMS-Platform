"use client";

import { Loader2, BookOpen, Clock, Users } from "lucide-react";

export default function CourseLoading() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {/* Animated icon with pulse effect */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <BookOpen className="w-8 h-8 text-accent" />
          </div>
          <div className="absolute inset-0 w-16 h-16 bg-accent/5 rounded-full animate-ping mx-auto"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">
          Loading Course Details
        </h3>
        <p className="text-dirty-grey mb-6">
          Preparing your learning experience...
        </p>
        
        {/* Loading indicators */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-center gap-2 text-sm text-dirty-grey">
            <Clock className="w-4 h-4" />
            <span>Calculating course duration</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-dirty-grey">
            <Users className="w-4 h-4" />
            <span>Loading instructor information</span>
          </div>
        </div>
        
        {/* Progress bar simulation */}
        <div className="w-full bg-white/10 rounded-full h-2 mb-4">
          <div className="bg-accent h-2 rounded-full animate-pulse w-3/4"></div>
        </div>
        
        <Loader2 className="w-6 h-6 text-accent animate-spin mx-auto" />
      </div>
    </div>
  );
}