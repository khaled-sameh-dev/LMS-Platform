import { forwardRef } from "react";
import { X, ArrowRight, Loader2, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { clearSearch } from "@/store/slices/searchSlice";

interface SearchInputFieldProps {
  placeholder: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onFocus: () => void;
}

export const SearchInputField = forwardRef<
  HTMLInputElement,
  SearchInputFieldProps
>(({ placeholder, onInputChange, onSearch, onKeyDown, onFocus }, ref) => {
  const { query, isFetching } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <form onSubmit={onSearch} className="relative">
      <div className="relative w-full bg-secondry-blue flex items-center justify-between py-3 px-4 shadow-md rounded-lg transition-all duration-200 group">
        <BookOpen className="text-dirty-grey mr-3 flex-shrink-0" size={20} />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className="outline-none border-none bg-transparent text-white/70 w-full text-sm"
          autoComplete="off"
        />

        <AnimatePresence>
          {isFetching && query.trim().length >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Loader2
                className="text-dirty-grey animate-spin flex-shrink-0 ml-2"
                size={18}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {query && !isFetching && (
            <motion.button
              type="button"
              onClick={handleClear}
              className="text-dirty-grey transition-colors flex-shrink-0 ml-2 p-1 rounded-md hover:bg-gray-100 cursor-pointer"
              aria-label="Clear search"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {query.trim().length >= 2 && (
            <motion.button
              type="submit"
              className="ml-2 px-3 py-1 bg-main-blue cursor-pointer  text-white rounded-md text-xs font-medium transition-colors flex items-center gap-1 flex-shrink-0"
              aria-label="Search"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Search</span>
              <ArrowRight size={14} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
});

export default SearchInputField;
