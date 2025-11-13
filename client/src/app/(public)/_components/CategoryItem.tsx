"use client";

import { Category } from "@/types";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryItemProps {
  index: number;
  category: Category;
}
const CategoryItem = ({ index, category }: CategoryItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentCategory = searchParams.get("category");
  const isSelected = currentCategory === category.id;

  const currentQuery = searchParams.get("q");

  const handleChangeCategory = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          q: currentQuery,
          category: isSelected ? null : category.id,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url, { scroll: false });
  };

  return (
    <motion.button
      onClick={handleChangeCategory}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`
                    relative flex-shrink-0 px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm
                    transition-all duration-300 ease-out cursor-pointer
                    ${
                      isSelected
                        ? "bg-white text-secondry-blue shadow-lg border-2 border-main-blue"
                        : "text-dirty-grey shadow-sm border-2 border-transparent hover:border-dirty-grey hover:shadow-md hover:text-white"
                    }
                  `}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          layoutId="activeCategory"
          className="absolute inset-0 bg-white rounded-lg -z-10"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}

      <span className="relative z-10">{category.name}</span>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />
    </motion.button>
  );
};

export default CategoryItem;
