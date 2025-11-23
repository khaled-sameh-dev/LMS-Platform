"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  useGetCategoriesQuery,
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
} from "@/store/api";
import CategoryFilter from "../_components/CategoryFilter";
import { getCoursesByCategory } from "@/lib/mockData";
import CourseCard from "../_components/CourseCard";
import CategoryFilterSkeleton from "../_components/skeletons/CategoryFilterSkeleton";
import CoursesGridSkeleton from "../_components/skeletons/CoursesGridSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Course } from "@/types";

function Page() {
  // const [isPending, startTransation] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [currentQuery, setCurrentQuery] = useState<string | null>(
    searchParams.get("q")
  );

  const {
    isLoading: categoriesLoading,
    data: categories,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const limit = 12;
  const baseParams = useMemo(() => {
    const params: any = { page: 1, limit };
    if (selectedCategory) params.category = selectedCategory;
    if (currentQuery) params.q = currentQuery;
    return params;
  }, [selectedCategory, currentQuery]);
  const {
    isLoading,
    data: firstPageCourses = [],
    error: coursesError,
  } = useGetCoursesQuery(baseParams);
  const [fetchMore, { isFetching: loadingMore }] = useLazyGetCoursesQuery();
  const [courses, setCourses] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [lastBatchCount, setLastBatchCount] = useState(0);

  

  useEffect(() => {
    setCourses(firstPageCourses || []);
    setPage(1);
    setLastBatchCount((firstPageCourses as any[])?.length || 0);
  }, [firstPageCourses]);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setSelectedCategory(categoryParam);

    const queryParam = searchParams.get("q");
    setCurrentQuery(queryParam);
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string | null) => {
    if (categoryId) {
      router.push(`?category=${categoryId}`, { scroll: false });
    } else {
      router.push("/browse", { scroll: false });
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const params: any = { page: nextPage, limit };
    if (selectedCategory) params.category = selectedCategory;
    if (currentQuery) params.q = currentQuery;
    const res: any = await fetchMore(params)
      .unwrap()
      .catch(() => []);
    if (Array.isArray(res)) {
      setCourses((prev) => [...prev, ...res]);
      setPage(nextPage);
      setLastBatchCount(res.length);
    }
  };

  return (
    <div className="w-full my-10 ">
      {/* Header Section */}
      <div className="bg-secondry-blue py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-start mb-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-dirty-grey text-base sm:text-lg max-w-3xl">
            Discover thousands of courses taught by expert instructors. Start
            learning today and advance your career.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className=" mb-10 mx-auto">
        {categoriesLoading && <CategoryFilterSkeleton />}

        {/* 🧩 Error UI for Categories */}
        {!categoriesLoading && categoriesError && (
          <div className="text-red-400 text-sm font-semibold text-center">
            Failed to load categories. Please try again later.
          </div>
        )}

        {!categoriesLoading && !categories?.length && !categoriesError && (
          <div className="text-dirty-grey text-sm font-semibold text-center">
            No Categories Found
          </div>
        )}

        {categories && categories.length > 0 && (
          <CategoryFilter categories={categories} />
        )}
      </div>

      {/* Courses Section */}
      <div className="mx-auto  py-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || "all"} // ensures re-animation when category changes
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedCategory
                  ? `${
                      categories?.find((cat) => cat.slug === selectedCategory)
                        ?.name
                    } Courses`
                  : "All Courses"}
              </h2>

              {!isLoading && (
                <motion.p
                  key={courses.length} // re-triggers when courses change
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-dirty-grey text-sm"
                >
                  {courses.length} course{courses.length !== 1 ? "s" : ""}{" "}
                  available
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {/* Loading State */}
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CoursesGridSkeleton />
            </motion.div>
          )}

          {!isLoading && coursesError && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-10 text-red-400"
            >
              <h3 className="text-xl font-semibold mb-2">
                Failed to load courses
              </h3>
              <p className="text-dirty-grey">
                Please refresh the page or try again later.
              </p>
            </motion.div>
          )}

          {/* Empty State */}
          {!isLoading && courses.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center py-20 px-4"
            >
              <div className="w-24 h-24 bg-secondry-blue rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-dirty-grey"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Courses Found
              </h3>
              <p className="text-dirty-grey text-center max-w-md mb-6">
                We couldn't find any courses in this category. Try exploring
                other categories or check back later.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(null)}
                className="px-6 py-3 cursor-pointer bg-secondry-blue hover:bg-secondry-blue/50 text-white rounded-lg font-semibold transition-colors"
              >
                View All Courses
              </motion.button>
            </motion.div>
          )}

          {/* Courses Grid */}
          {!isLoading && courses.length > 0 && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8
          grid-cols-1
          min-[480px]:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {courses.map((course: Course) => (
                  <motion.div
                    key={course.id}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CourseCard
                      course={course}
                      onClick={() => router.push(`/browse/${course.id}`)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {!isLoading && lastBatchCount === limit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-secondry-blue hover:bg-secondry-blue/50 text-white rounded-lg font-semibold transition-colors border border-white/10 hover:border-accent"
            >
              {loadingMore ? "Loading..." : "Load More Courses"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;

{
  /* Courses Grid */
}
{
  /* {!isPending && courses.length > 0 && (
          <motion.div
            className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8
              grid-cols-1
              min-[480px]:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {courses.map((course: any, index: number) => (
              <motion.div
                key={course.id}
                variants={{
                  hidden: { y: 30, opacity: 0, scale: 0.95 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.4, 0.25, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="h-full"
              >
                <CourseCard
                  course={course}
                  onClick={() => router.push(`/courses/${course.id}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        )} */
}

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import { useGetCategoriesQuery, useGetCoursesQuery } from "@/state/api";
// import CategoryFilter from "../_components/CategoryFilter";
// import CourseCard from "../_components/CourseCard";
// import CategoryFilterSkeleton from "../_components/skeletons/CategoryFilterSkeleton";
// import CoursesGridSkeleton from "../_components/skeletons/CoursesGridSkeleton";

// function Page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(
//     searchParams.get("category")
//   );
//   const [currentQuery, setCurrentQuery] = useState<string | null>(
//     searchParams.get("q")
//   );

//   // 🟢 Fetch categories
//   const {
//     isLoading: categoriesLoading,
//     data: categories,
//     error: categoriesError,
//   } = useGetCategoriesQuery();

//   // 🟢 Prepare params for courses API
//   const coursesParams = useMemo(() => {
//     if (!currentQuery && !selectedCategory) return undefined;
//     const params: any = {};
//     if (selectedCategory) params.category = selectedCategory;
//     if (currentQuery) params.q = currentQuery;
//     return params;
//   }, [selectedCategory, currentQuery]);

//   // 🟢 Fetch courses
//   const {
//     isLoading,
//     data: courses = [], // ✅ Prevent "possibly undefined"
//     error: coursesError,
//   } = useGetCoursesQuery(coursesParams);

//   // 🟢 Sync query params → state
//   useEffect(() => {
//     setSelectedCategory(searchParams.get("category"));
//     setCurrentQuery(searchParams.get("q"));
//   }, [searchParams]);

//   const handleCategoryChange = (categorySlug: string | null) => {
//     setSelectedCategory(categorySlug);
//     if (categorySlug) {
//       router.push(`?category=${categorySlug}`, { scroll: false });
//     } else {
//       router.push("/browse", { scroll: false });
//     }
//   };

//   return (
//     <div className="w-full my-10 ">
//       {/* Header Section */}
//       <div className="bg-secondry-blue py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-start mb-10 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//             Explore Our Courses
//           </h1>
//           <p className="text-dirty-grey text-base sm:text-lg max-w-3xl">
//             Discover thousands of courses taught by expert instructors. Start
//             learning today and advance your career.
//           </p>
//         </motion.div>
//       </div>

//       {/* Category Filter */}
//       <div className="w-full mb-10 mx-auto">
//         {categoriesLoading && <CategoryFilterSkeleton />}

//         {/* 🧩 Error UI for Categories */}
//         {!categoriesLoading && categoriesError && (
//           <div className="text-red-400 text-sm font-semibold text-center">
//             Failed to load categories. Please try again later.
//           </div>
//         )}

//         {!categoriesLoading && !categories?.length && !categoriesError && (
//           <div className="text-dirty-grey text-sm font-semibold text-center">
//             No Categories Found
//           </div>
//         )}

//         {categories && categories.length > 0 && (
//           <CategoryFilter categories={categories} />
//         )}
//       </div>

//       {/* Courses Section */}
//       <div className="mx-auto py-8 mb-10">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory || "all"}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             >
//               <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
//                 {selectedCategory
//                   ? `${
//                       categories?.find((cat) => cat.id === selectedCategory)
//                         ?.name
//                     } Courses`
//                   : "All Courses"}
//               </h2>

//               {!isLoading && (
//                 <motion.p
//                   key={courses.length}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-dirty-grey text-sm"
//                 >
//                   {courses.length} course{courses.length !== 1 ? "s" : ""}{" "}
//                   available
//                 </motion.p>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <AnimatePresence mode="wait">
//           {/* 🔄 Loading */}
//           {isLoading && (
//             <motion.div
//               key="loading"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <CoursesGridSkeleton />
//             </motion.div>
//           )}

//           {/* 🧩 Error UI for Courses */}
//           {!isLoading && coursesError && (
//             <motion.div
//               key="error"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="text-center py-10 text-red-400"
//             >
//               <h3 className="text-xl font-semibold mb-2">
//                 Failed to load courses
//               </h3>
//               <p className="text-dirty-grey">
//                 Please refresh the page or try again later.
//               </p>
//             </motion.div>
//           )}

//           {/* Empty */}
//           {!isLoading && !coursesError && courses.length === 0 && (
//             <motion.div
//               key="empty"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="flex flex-col items-center justify-center py-20 px-4"
//             >
//               <div className="w-24 h-24 bg-secondry-blue rounded-full flex items-center justify-center mb-6">
//                 <svg
//                   className="w-12 h-12 text-dirty-grey"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 No Courses Found
//               </h3>
//               <p className="text-dirty-grey text-center max-w-md mb-6">
//                 We couldn't find any courses in this category. Try exploring
//                 other categories or check back later.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleCategoryChange(null)}
//                 className="px-6 py-3 cursor-pointer bg-secondry-blue hover:bg-secondry-blue/50 text-white rounded-lg font-semibold transition-colors"
//               >
//                 View All Courses
//               </motion.button>
//             </motion.div>
//           )}

//           {/* Grid */}
//           {!isLoading && !coursesError && courses.length > 0 && (
//             <motion.div
//               key="grid"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             >
//               <motion.div
//                 className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8
//                   grid-cols-1
//                   min-[480px]:grid-cols-2
//                   lg:grid-cols-3
//                   xl:grid-cols-4
//                   2xl:grid-cols-4"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: { staggerChildren: 0.08 },
//                   },
//                 }}
//               >
//                 {courses.map((course: any) => (
//                   <motion.div
//                     key={course.id}
//                     variants={{
//                       hidden: { y: 20, opacity: 0 },
//                       visible: { y: 0, opacity: 1 },
//                     }}
//                     whileHover={{ y: -6 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <CourseCard
//                       course={course}
//                       onClick={() => router.push(`/courses/${course.id}`)}
//                     />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {!isLoading && !coursesError && courses.length > 0 && (
//           <div className="flex justify-center mt-12">
//             <button className="px-8 py-3 bg-secondry-blue hover:bg-secondry-blue/50 text-white rounded-lg font-semibold transition-colors border border-white/10 hover:border-accent">
//               Load More Courses
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;
