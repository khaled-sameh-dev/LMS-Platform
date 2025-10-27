"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import useCarousel from "@/hooks/useCarousel";
import { useGetCoursesQuery } from "@/state/api";
import CourseCard from "./_components/CourseCard";

export const LoadingSkeleton = () => {
  return (
    <div className="w-3/4">
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

const Page = () => {
  const { currentIndex } = useCarousel({ total: 3, interval: 8000 });
  const { data: courses, isLoading, error } = useGetCoursesQuery({});

  if (isLoading) return <LoadingSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-6 sm:w-3/4 flex flex-col justify-center items-center gap-20"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-secondry-blue rounded-lg shadow-xs flex items-center flex-col sm:flex-row h-[500px] mt-10 overflow-hidden"
      >
        <div className="basis-1/2 flex flex-col justify-center items-center sm:items-start  px-10 py-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Courses</h1>
          <p className="text-sm md:text-base mb-2 text-dirty-grey font-semibold max-w-3xs">
            Explore our wide range of courses and find the perfect one to boost
          </p>
          <Button className="cursor-pointer bg-blue-400 w-fit ">
            Seach for Courses
          </Button>
        </div>
        <div className="w-full basis-1/2 h-full relative">
          {["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"].map(
            (src, index) => (
              <Image
                key={src}
                src={src}
                alt="hero 1"
                className={`object-cover opacity-0 ${
                  index === currentIndex ? "opacity-100" : ""
                }  transition-opacity duration-500`}
                fill
                priority={index === currentIndex}
              />
            )
          )}
        </div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ amount: 0.3, once: true }}
        className="w-full"
      >
        <div className="w-full mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Featured Courses
          </h2>
          <p className="text-dirty-grey font-semibold mb-2 max-w-max sm:max-w-[500px]">
            From beginner to advanced , in all industries , we have the right
            Courses just for you and preparing your entire journey and making
            the most.
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
                className="bg-secondry-blue text-dirty-grey hover:text-white cursor-pointer px-3 py-1 rounded-full whitespace-nowrap text-sm"
              >
                {c}
              </button>
            ))}
          </div>
          {/* Course Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses &&
              courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  viewport={{ amount: 0.3, once: true }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Page;
