import { Skeleton } from "@/app/_components/ui/skeleton";

export const LoadingHomeSkeleton = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mt-12 h-[500px] rounded-lg bg-secondry-blue">
        <div className="basis-1/2 px-16 mx-auto ">
          <Skeleton className="h-8 w-48 mb-4 bg-dirty-grey" />
          <Skeleton className="h-4 w-96 mb-2 bg-dirty-grey" />
          <Skeleton className="h-4 w-72 mb-8 bg-dirty-grey" />
          <Skeleton className="w-40 h-10 bg-dirty-grey" />
        </div>
        <Skeleton className="basis-1/2 h-full rounded-r-lg bg-dirty-grey" />
      </div>
      <div className="mx-auto py-12 mt-10"></div>
    </div>
  );
};
