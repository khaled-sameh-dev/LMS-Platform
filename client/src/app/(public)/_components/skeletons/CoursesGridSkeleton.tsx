import React from 'react'
import CourseCardSkeleton from './CourseCardSkeleton'

const CoursesGridSkeleton = () => {
  return (
     <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-2">
            <div className="h-8 bg-secondry-blue rounded w-48 animate-pulse" />
            <div className="h-4 bg-secondry-blue rounded w-32 animate-pulse" />
          </div>
          <div className="h-10 bg-secondry-blue rounded w-40 animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
  )
}

export default CoursesGridSkeleton