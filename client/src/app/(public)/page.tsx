import FeaturedCourses from "./_components/FeaturedCourses";
import { Suspense } from "react";
import { LoadingHomeSkeleton } from "./_components/skeletons/LoadingHomeSkeleton";
import HeroSection from "./_components/HeroSection";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20">
      <HeroSection />
      <FeaturedCourses />
    </div>
  );
};

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingHomeSkeleton />}>
      <Page />
    </Suspense>
  );
};

export default HomePage;
