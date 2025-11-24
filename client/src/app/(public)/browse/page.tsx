import CategoryFilterSection from "./_components/CategoryFilterSection";
import CoursesSection from "./_components/CoursesSection";
import BrowseHeroSection from "./_components/HeroSection";

function Page() {
  return (
    <div className="w-full my-10 ">
      {/* Header Section */}
      <BrowseHeroSection />

      {/* Category Filter */}
      <CategoryFilterSection />

      {/* Courses Section */}
      <CoursesSection />
    </div>
  );
}

export default Page;
