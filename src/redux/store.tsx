import { configureStore } from "@reduxjs/toolkit";
import socialSlice from "./slice/socialSlice";


export const store = configureStore({
  reducer: {
    socialSlice:socialSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
