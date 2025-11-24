import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SuggesstionIcon } from "./SugesstionIcon";
import { getTypeColor } from "@/utilis";
import { highlightMatch } from "./HighLightText";
import { SearchSuggestion } from "@/types";
import { useEffect, useMemo } from "react";

interface SuggestionItemProps {
  suggestion: SearchSuggestion;
  index: number;
  isSelected: boolean;
  debouncedValue: string;
  onClick: (suggestion: SearchSuggestion) => void;
  onHover: (index: number) => void;
}

export const SuggestionItem = ({
  suggestion,
  index,
  isSelected,
  debouncedValue,
  onClick,
  onHover,
}: SuggestionItemProps) => {
  const text = useMemo(() => {
    const value =
      suggestion.type === "Category"
        ? suggestion.value.name
        : suggestion.type === "Course"
          ? suggestion.value.title
          : suggestion.value.firstName + " " + suggestion.value.lastName;

    return value;
  }, [suggestion]);

  useEffect(() => {
    console.log("suggestions", text);
  }, [text]);

  if (!text) return null;

  return (
    <motion.button
      onClick={() => onClick(suggestion)}
      onMouseEnter={() => onHover(index)}
      className={`w-full px-4 py-3 text-white/50 cursor-pointer text-left  flex items-center gap-3 group ${
        isSelected ? "bg-primary-blue" : ""
      }`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.3 }}
    >
      <SuggesstionIcon
        type={suggestion.type}
        avatarUrl={suggestion.value.avatarUrl}
      />

      <div className="flex-1 min-w-0">
        <div className=" font-medium text-sm truncate">
          {highlightMatch(text, debouncedValue)}
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span
            className={`text-xs ${getTypeColor(suggestion.type)} capitalize`}
          >
            {suggestion.type}
          </span>

          {/* {suggestion.type === "Category" &&
            suggestion.value.courseCount !== undefined && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {suggestion.value.courseCount} courses
                </span>
              </>
            )}

          {suggestion.type === "Course" &&
            suggestion.value.studentsCount !== undefined && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {suggestion.value.studentsCount.toLocaleString()} students
                </span>
              </>
            )} */}
        </div>
      </div>

      <motion.div
        className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors"
        animate={{ x: isSelected ? 4 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={16} />
      </motion.div>
    </motion.button>
  );
};
