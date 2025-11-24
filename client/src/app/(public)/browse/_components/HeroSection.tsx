"use client";
import { motion } from "framer-motion";

const BrowseHeroSection = () => {
  return (
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
  );
};

export default BrowseHeroSection;
