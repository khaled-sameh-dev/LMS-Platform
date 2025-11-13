import { SearchSuggestion } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
export interface Suggestion {
  type: "Course" | "Category" | "Instructor";
  value: {
    id: string;
    name?: string;
    title?: string;
    [key: string]: any;
  };
}

export interface SearchState {
  query: string;
  debouncedQuery: string;
  suggestions: SearchSuggestion[];
  showDropdown: boolean;
  selectedIndex: number;
  hasInteracted: boolean;
  isFetching: boolean;
  isError: boolean;
  error: any;
}

const initialState: SearchState = {
  query: "",
  debouncedQuery: "",
  suggestions: [],
  showDropdown: false,
  selectedIndex: -1,
  hasInteracted: false,
  isFetching: false,
  isError: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Query management
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.hasInteracted = true;
      state.selectedIndex = -1;
    },

    // remove-----------------------
    setDebouncedQuery: (state, action: PayloadAction<string>) => {
      state.debouncedQuery = action.payload;
    },
    // -------------------

    clearSearch: (state) => {
      state.query = "";
      state.debouncedQuery = "";
      state.suggestions = [];
      state.showDropdown = false;
      state.selectedIndex = -1;
      state.hasInteracted = false;
      state.isError = false;
      state.error = null;
    },

    // Suggestions management
    setSuggestions: (state, action: PayloadAction<SearchSuggestion[]>) => {
      state.suggestions = action.payload;
    },

    clearSuggestions: (state) => {
      state.suggestions = [];
    },

    // Dropdown visibility
    setShowDropdown: (state, action: PayloadAction<boolean>) => {
      state.showDropdown = action.payload;
      if (!action.payload) {
        state.selectedIndex = -1;
      }
    },

    // Selection management
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },

    incrementSelectedIndex: (state) => {
      if (state.selectedIndex < state.suggestions.length - 1) {
        state.selectedIndex += 1;
      }
    },

    decrementSelectedIndex: (state) => {
      if (state.selectedIndex > 0) {
        state.selectedIndex -= 1;
      } else {
        state.selectedIndex = -1;
      }
    },

    // Loading and error states
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },

    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },

    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.isError = !!action.payload;
    },

    // Interaction tracking
    setHasInteracted: (state, action: PayloadAction<boolean>) => {
      state.hasInteracted = action.payload;
    },

    // Combined actions for common operations
    handleSearchStart: (state) => {
      state.isFetching = true;
      state.isError = false;
      state.error = null;
    },

    handleSearchSuccess: (state, action: PayloadAction<SearchSuggestion[]>) => {
      console.log(action.payload);
      state.isFetching = false;
      state.suggestions = action.payload;
      state.isError = false;
      state.error = null;

      // Show dropdown if there are suggestions or query is long enough
      if (state.hasInteracted && state.query.trim().length >= 2) {
        state.showDropdown =
          action.payload.length > 0 || state.query.trim().length >= 2;
      }
    },

    handleSearchError: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.isError = true;
      state.error = action.payload;
      state.suggestions = [];
    },

    handleSearchComplete: (state) => {
      state.showDropdown = false;
      state.selectedIndex = -1;
    },

    // Reset only UI state (keep query for navigation)
    resetUIState: (state) => {
      state.showDropdown = false;
      state.selectedIndex = -1;
      state.suggestions = [];
    },
  },
});

export const {
  setSearchQuery,
  setDebouncedQuery,
  clearSearch,
  setSuggestions,
  clearSuggestions,
  setShowDropdown,
  setSelectedIndex,
  incrementSelectedIndex,
  decrementSelectedIndex,
  setIsFetching,
  setIsError,
  setError,
  setHasInteracted,
  handleSearchStart,
  handleSearchSuccess,
  handleSearchError,
  handleSearchComplete,
  resetUIState,
} = searchSlice.actions;

export default searchSlice.reducer;
