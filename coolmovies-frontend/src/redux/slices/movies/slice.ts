import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  value: number;
  sideEffectCount: number;
  allMovies?: any;
  reviews?: any;
  selectedMovie: any;
}

const initialState: MovieState = {
  value: 0,
  sideEffectCount: 0,
  reviews: [],
  allMovies: {
    nodes: [],
  },
  selectedMovie: {},
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    fetchMovies: () => {},
    fetchReviewsByMovieId: (state, action: PayloadAction<{ id: any }>) => {},
    getMovies: (state, action: PayloadAction<{ data: unknown[] }>) => {
      state.allMovies = action.payload.data;
    },
    getMoviesError: (state) => {
      state.allMovies = ["Error Fetching :("];
    },
    getReviews: (state, action: PayloadAction<{ data: unknown[] }>) => {
      state.reviews = action.payload.data;
    },
    getReviewsError: (state) => {
      state.reviews = ["Error Fetching :("];
    },
    setSelectedMovie: (state, action: PayloadAction<{ selected: any }>) => {
      state.selectedMovie = action.payload.selected;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
