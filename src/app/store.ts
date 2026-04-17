import { configureStore } from '@reduxjs/toolkit'
import { currentQuerySlice } from './slices/currentQuerySlice'
import { searchQuerySlice } from './slices/searchQuerySlice'
import { filmsApi } from './services/filmsApi'

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    currentQuery: currentQuerySlice.reducer,
    searchQuery: searchQuerySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch