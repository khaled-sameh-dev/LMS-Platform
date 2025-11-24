import CoursesGridSkeleton from "../_components/skeletons/CoursesGridSkeleton";
import CategoryFilterSkeleton from "./_components/skeleton/CategoryFilterSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-blue">
      {/* Header Skeleton */}
      <div className="bg-secondry-blue py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <div className="space-y-4">
            <div className="h-10 bg-primary-blue rounded-lg w-72 animate-pulse" />
            <div className="h-6 bg-primary-blue rounded-lg w-96 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Category Filter Skeleton */}
      <CategoryFilterSkeleton />

      {/* Courses Grid Skeleton */}
      <CoursesGridSkeleton />
    </div>
  );
}
