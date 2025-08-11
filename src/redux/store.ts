import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import { searchApi } from "./services/searchApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
