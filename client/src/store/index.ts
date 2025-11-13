import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // adjust path if different

import searchReducer from "./slices/searchSlice";
import courseCreationReducer from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
    courseCreation: courseCreationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // ✅ attach middleware
});

// types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
