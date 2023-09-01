import { configureStore } from '@reduxjs/toolkit'
import { imagesSliceReducer } from './entities/imagesSlice'
import { filterSliceReducer } from './ui/filters/filterSlice'

export const store = configureStore({
  reducer: {
    images: imagesSliceReducer,
    filters: filterSliceReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch