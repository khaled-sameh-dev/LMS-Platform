import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { SuggestionItem } from "./SuggestionItem";
import { SearchSuggestion } from "@/types";
import { useEffect } from "react";

interface SuggestionsListProps {
  suggestions: SearchSuggestion[];
  selectedIndex: number;
  debouncedValue: string;
  query: string;
  onSuggestionClick: (suggestion: SearchSuggestion) => void;
  onHover: (index: number) => void;
  onSearch: (e: React.FormEvent) => void;
}

export const SuggestionsList = ({
  suggestions,
  selectedIndex,
  debouncedValue,
  query,
  onSuggestionClick,
  onHover,
  onSearch,
}: SuggestionsListProps) => {

   

  return (
    <div>
      <div className="py-2">
        {suggestions.map((suggestion, index) => (
          <SuggestionItem
            key={`${suggestion.type}-${suggestion.id}`}
            suggestion={suggestion}
            index={index}
            isSelected={selectedIndex === index}
            debouncedValue={debouncedValue}
            onClick={onSuggestionClick}
            onHover={onHover}
          />
        ))}
      </div>

      <motion.div
        className="border-t border-dirty-grey bg-secondry-blue px-4 py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          onClick={onSearch}
          className="w-full text-sm text-dirty-grey hover:text-white/50 cursor-pointer font-medium flex items-center justify-between group transition-colors"
          whileHover={{ x: 2 }}
        >
          <span>View all results for "{query}"</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TrendingUp size={16} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};
