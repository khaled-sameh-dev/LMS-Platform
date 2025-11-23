import { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { EmptyState } from "./EmptyState";
import { SuggestionsList } from "./SuggestionList";
import { Suggestion } from "@/store/slices/searchSlice";
import { SearchSuggestion } from "@/types";

interface SearchDropdownProps {
  isModelContainer: boolean;
  onSuggestionClick: (suggestion: SearchSuggestion) => void;
  onSearch: (e: React.FormEvent) => void;
  onHover: (index: number) => void;
}

export const SearchDropdown = forwardRef<HTMLDivElement, SearchDropdownProps>(
  ({ isModelContainer, onSuggestionClick, onSearch, onHover }, ref) => {
    const {
      suggestions,
      isFetching,
      isError,
      error,
      query,
      debouncedQuery,
      selectedIndex,
    } = useSelector((state: RootState) => state.search);

   

    return (
      <motion.div
        ref={ref}
        className={`${
          isModelContainer
            ? "relative mt-4"
            : "absolute z-50 top-full mt-2 left-0 right-0"
        } w-full rounded-lg bg-secondry-blue shadow-lg overflow-hidden`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {isFetching && suggestions.length === 0 && (
          <EmptyState type="loading" />
        )}

        {isError && !isFetching && <EmptyState type="error" error={error} />}

        {!isFetching &&
          !isError &&
          suggestions.length === 0 &&
          query.trim().length >= 2 && <EmptyState type="no-results" />}

        {!isFetching && !isError && suggestions.length > 0 && (
          <SuggestionsList
            suggestions={suggestions}
            selectedIndex={selectedIndex}
            debouncedValue={debouncedQuery}
            query={query}
            onSuggestionClick={onSuggestionClick}
            onHover={onHover}
            onSearch={onSearch}
          />
        )}
      </motion.div>
    );
  }
);

export default SearchDropdown;
