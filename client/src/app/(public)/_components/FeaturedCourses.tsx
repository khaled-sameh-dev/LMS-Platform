"use client";

import { motion } from "framer-motion";

import { useGetCoursesQuery } from "@/store/api";
import CoursesGridSkeleton from "./skeletons/CoursesGridSkeleton";
import CourseCard from "@/app/(public)/_components/CourseCard";

const FeaturedCourses = () => {
  const { data: courses, isLoading, error } = useGetCoursesQuery({});

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ amount: 0.3, once: true }}
      className="w-full"
    >
      <div className="w-full mb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Featured Courses</h2>
        <p className="text-dirty-grey font-semibold mb-2 max-w-max sm:max-w-[500px]">
          From beginner to advanced , in all industries , we have the right
          Courses just for you and preparing your entire journey and making the
          most.
        </p>
        <div className="flex flex-wrap gap-4 overflow-x-auto py-4">
          {[
            "Enterprise Learning",
            "Professional Development",
            "Personal Growth",
            "Javascript Development",
          ].map((c) => (
            <button
              key={c}
              type="button"
              className="bg-secondry-blue text-dirty-grey px-3 py-1 rounded-full whitespace-nowrap text-sm"
            >
              {c}
            </button>
          ))}
        </div>

        {isLoading && <CoursesGridSkeleton />}
        <div className="w-full grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 py-6 sm:py-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {courses &&
            courses.slice(0, 4).map((course, index) => (
              <motion.div
                key={course.id || index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ amount: 0.2, once: true }}
                className="h-full"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCourses;
