import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface MovieFiltersState {
  countries: string;
  genreId: string;
  order: string;
  type: string;
  year: string;
  page: number;
  keyword: string;
}

const initialState: MovieFiltersState = {
  countries: '',
  genreId: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
  keyword: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<MovieFiltersState>>) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
    
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
});

export const { setFilters, resetFilters, setPage } = movieSlice.actions;

export default movieSlice.reducer;
