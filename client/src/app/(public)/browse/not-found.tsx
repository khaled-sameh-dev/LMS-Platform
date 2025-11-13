import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-secondry-blue">404</h1>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-accent/20 rounded-full animate-ping" />
            </div>
            <div className="relative flex items-center justify-center py-8">
              <Search className="w-24 h-24 text-accent" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-white mb-4">Course Not Found</h2>
        <p className="text-dirty-grey text-lg mb-8">
          The course you're looking for doesn't exist or has been removed. Let's
          get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-semibold transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Courses
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondry-blue hover:bg-secondry-blue/80 text-white rounded-lg font-semibold transition-colors border border-white/10"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Popular Courses Link */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-dirty-grey mb-4">Popular Courses:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Web Development",
              "Data Science",
              "UI/UX Design",
              "Marketing",
            ].map((course) => (
              <Link
                key={course}
                href={`/courses?category=${course
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-secondry-blue hover:bg-accent text-white rounded-lg text-sm transition-colors"
              >
                {course}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
