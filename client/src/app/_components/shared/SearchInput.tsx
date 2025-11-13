"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import useDebounce from "@/hooks/useDeBounce";
import { useLazyGetSearchSuggestionsQuery } from "@/store/api";
import {
  setSearchQuery,
  setShowDropdown,
  setSelectedIndex,
  incrementSelectedIndex,
  decrementSelectedIndex,
  handleSearchStart,
  handleSearchSuccess,
  handleSearchError,
  handleSearchComplete,
  clearSearch,
} from "@/store/slices/searchSlice";
import { AppDispatch, RootState } from "@/store";
import { Suggestion } from "@/store/slices/searchSlice";
import { SearchInputField } from "./SearchInputField";
import SearchDropdown from "./SearchDropdown";
import { SearchSuggestion } from "@/types";

interface SearchInputProps {
  isModelContainer?: boolean;
  placeholder?: string;
  onResultClick?: () => void;
}

const SearchInput = ({
  isModelContainer = false,
  placeholder = "Search for courses, categories, or instructors...",
  onResultClick,
}: SearchInputProps) => {
  const router = useRouter();

  const { query, showDropdown, selectedIndex, hasInteracted, suggestions } =
    useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const debouncedValue = useDebounce(query, 300);
  const [triggerSuggestions, { isFetching, isError, error }] =
    useLazyGetSearchSuggestionsQuery();

  // Fetch suggestions when debounced value changes
  useEffect(() => {
    const trimmed = debouncedValue.trim();

    if (trimmed.length >= 2) {
      dispatch(handleSearchStart());
      triggerSuggestions(trimmed)
        .unwrap()
        .then(async (data) => {
          const suggestionsList = data || [];
          dispatch(handleSearchSuccess(suggestionsList));
        })
        .catch((err) => {
          dispatch(handleSearchError(err));
        });
    } else {
      dispatch(setShowDropdown(false));
    }
  }, [debouncedValue, triggerSuggestions, dispatch]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        dispatch(setShowDropdown(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value));
  };

  // handle navagation -----------
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length < 2) return;

    // Get current URL params
    const currentParams = new URLSearchParams(window.location.search);

    // Set the search query
    currentParams.set("q", trimmed);

    router.push(`/browse?${currentParams.toString()}`);
    dispatch(handleSearchComplete());
    inputRef.current?.blur();
    dispatch(clearSearch());
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    const { type, id } = suggestion;

    switch (type) {
      case "course":
        router.push(`/courses/${id}`);
        break;
      case "category":
        // For category, go to browse page with category param
        router.push(`/browse?category=${encodeURIComponent(id)}`);
        break;
      case "instructor":
        // Go to instructor profile page
        router.push(`/instructors/${id}`);
        break;
    }

    dispatch(handleSearchComplete());
    dispatch(clearSearch());
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || suggestions.length === 0) {
      if (e.key === "Enter") {
        handleSearch(e);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        dispatch(incrementSelectedIndex());
        break;
      case "ArrowUp":
        e.preventDefault();
        dispatch(decrementSelectedIndex());
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSearch(e);
        }
        break;
      case "Escape":
        dispatch(setShowDropdown(false));
        break;
    }
  };

  const handleInputFocus = () => {
    if (query.trim().length >= 2 && suggestions.length > 0) {
      dispatch(setShowDropdown(true));
    }
  };

  const handleHover = (index: number) => {
    dispatch(setSelectedIndex(index));
  };

  return (
    <div className="relative w-full">
      <SearchInputField
        ref={inputRef}
        placeholder={placeholder}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
      />

      <AnimatePresence>
        {showDropdown && query.trim().length >= 2 && (
          <SearchDropdown
            ref={dropdownRef}
            isModelContainer={isModelContainer}
            onSuggestionClick={handleSuggestionClick}
            onSearch={handleSearch}
            onHover={handleHover}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchInput;
