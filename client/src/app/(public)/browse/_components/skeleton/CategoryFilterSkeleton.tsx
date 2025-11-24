function CategoryFilterSkeleton() {
  return (
     <div className="w-full bg-primary-blue shadow-lg flex flex-col lg:flex-row items-start lg:items-center gap-6 ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-6 w-full">
            <div className="flex-shrink-0 w-32 h-10 bg-secondry-blue rounded-lg animate-pulse" />
            <div className="flex-1 bg-secondry-blue rounded-lg p-4">
              <div className="flex gap-3 overflow-hidden">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-32 h-10 bg-primary-blue rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CategoryFilterSkeleton