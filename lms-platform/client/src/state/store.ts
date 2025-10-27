// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { useRef, type ReactNode } from "react";
// import {
//   TypedUseSelectorHook,
//   useDispatch,
//   useSelector,
//   Provider,
// } from "react-redux";
// import { globalSlice } from "./globalSlice";

// export const store = configureStore({
//   reducer: {
//     global: globalSlice.reducer,
//   },
// });


// export type AppStore = typeof store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = AppStore["dispatch"];
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // export default function StoreProvider({ children }: { children: ReactNode }) {
// //   const storeRef = useRef<AppStore>(store);
// //   if (!storeRef.current) {
// //     storeRef.current = store;
// //     setupListeners(storeRef.current.dispatch);
// //   }
// //   return <Provider store={storeRef.current}>{children}</Provider>;
// // }






// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // adjust path if different

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // ✅ attach RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // ✅ attach middleware
});

// types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

