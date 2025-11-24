"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import useCarousel from "@/hooks/useCarousel";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const { currentIndex } = useCarousel({ total: 3, interval: 8000 });
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-secondry-blue rounded-lg shadow-xs flex items-center flex-col sm:flex-row h-[500px] mt-10 overflow-hidden"
    >
      <div className="basis-1/2 flex flex-col justify-center items-center sm:items-start  px-10 py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Explor Our Courses
        </h1>
        <p className="text-sm md:text-base mb-2 text-dirty-grey font-semibold max-w-3xs">
          Explore our wide range of courses and find the perfect one to boost
        </p>
        <Button
          className="cursor-pointer bg-blue-400 w-fit "
          onClick={() => router.push(`/browse`)}
        >
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
  );
};

export default HeroSection;
