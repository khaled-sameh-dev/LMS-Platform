import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SuggesstionIcon } from "./SugesstionIcon";
import { getTypeColor } from "@/utilis";
import { highlightMatch } from "./HighLightText";

interface SuggestionItemProps {
  suggestion: Suggestion;
  index: number;
  isSelected: boolean;
  debouncedValue: string;
  onClick: (suggestion: Suggestion) => void;
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
  const text =
    suggestion.type === "Category" || suggestion.type === "Instructor"
      ? suggestion.value.name
      : suggestion.value.title;

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
      transition={{duration: .4 ,  delay: index * 0.3 }}
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

          {suggestion.type === "Course" && suggestion.value.rating && (
            <>
              <span className="text-white/50">•</span>
              <span className="text-xs text-main-blue">
                ★ {suggestion.value.rating.toFixed(1)}
              </span>
            </>
          )}

          {suggestion.type === "Category" &&
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
            )}
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
