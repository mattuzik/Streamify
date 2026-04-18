import { configureStore } from '@reduxjs/toolkit'
import { filmsApi } from '../entities/movie/api/services'
import movieReducer from '../entities/movie/model/slice'

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    movies: movieReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
