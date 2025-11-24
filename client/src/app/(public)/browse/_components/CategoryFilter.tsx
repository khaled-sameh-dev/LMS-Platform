"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryItem from "./CategoryItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string | null;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
}: 
CategoryFilterProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [categories]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          q: searchParams.get("q"),
          category: null,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url, { scroll: false });

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 w-full">
      {/* Reset Button */}
      <motion.button
        onClick={handleReset}
        disabled={!searchParams.get("category")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm
          transition-all duration-300 flex-shrink-0
          ${
            searchParams.get("category")
              ? "bg-main-blue text-white shadow-md hover:shadow-lg hover:bg-main-blue/90"
              : "bg-primary-blue text-dirty-grey cursor-not-allowed opacity-50"
          }
        `}
      >
        <motion.div
          animate={selectedCategory ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RotateCcw className="w-4 h-4" />
        </motion.div>
        Reset to All
      </motion.button>

      {/* Category Filter Container */}
      <div className="relative  bg-secondry-blue py-4 px-2 rounded-lg overflow-hidden w-full">
        {/* Left Gradient Fade Effect */}
        <AnimatePresence>
          {showLeftArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondry-blue via-secondry-blue/80 to-transparent z-[5] pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Right Gradient Fade Effect */}
        <AnimatePresence>
          {showRightArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondry-blue via-secondry-blue/80 to-transparent z-[5] pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="w-full relative">
          {/* Left Arrow */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scroll("left")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full cursor-pointer bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-primary-blue" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-6 sm:px-10 lg:px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {categories.map((category, index) => {
              // const isSelected = selectedCategory === category.id;
              return (
                <CategoryItem
                  key={category.id}
                  index={index}
                  category={category}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => scroll("right")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full cursor-pointer bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-primary-blue" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
