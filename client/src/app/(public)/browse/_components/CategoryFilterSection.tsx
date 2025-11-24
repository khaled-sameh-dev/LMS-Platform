"use client";

import { useGetCategoriesQuery } from "@/store/api";
import CategoryFilterSkeleton from "./skeleton/CategoryFilterSkeleton";
import CategoryFilter from "./CategoryFilter";
import { Suspense } from "react";

const FilterSection = () => {
  const {
    isLoading: categoriesLoading,
    data: categories,
    error: categoriesError,
  } = useGetCategoriesQuery();

  return (
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
  );
};

const CategoryFilterSection = () => {
  return (
    <Suspense fallback={<CategoryFilterSkeleton />}>
      <FilterSection />
    </Suspense>
  );
};

export default CategoryFilterSection;
