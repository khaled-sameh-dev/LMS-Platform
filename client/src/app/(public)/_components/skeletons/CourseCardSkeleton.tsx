function CourseCardSkeleton() {
  return (
    <div className="bg-secondry-blue rounded-xl overflow-hidden shadow-lg animate-pulse h-full">
      {/* Image Skeleton */}
      <div className="w-full aspect-[16/9] bg-primary-blue relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-secondry-blue/50 to-primary-blue animate-shimmer" />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Title Lines */}
        <div className="space-y-2">
          <div className="h-4 bg-primary-blue rounded w-3/4" />
          <div className="h-4 bg-primary-blue rounded w-1/2" />
        </div>

        {/* Teacher */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary-blue rounded-full" />
          <div className="h-3 bg-primary-blue rounded w-1/3" />
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-3 py-2 border-t border-b border-white/5">
          <div className="h-3 bg-primary-blue rounded w-16" />
          <div className="h-3 bg-primary-blue rounded w-16" />
        </div>

        {/* Tag */}
        <div className="h-7 bg-primary-blue rounded w-24" />
      </div>
    </div>
  );
}



export default CourseCardSkeleton