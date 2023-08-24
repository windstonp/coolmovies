import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

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
    createMovieReview: (state, action: PayloadAction<{ data: any }>) => {},
    getMovies: (state, action: PayloadAction<{ data: unknown[] }>) => {
      state.allMovies = action.payload.data;
    },
    getMoviesError: (state) => {
      state.allMovies = ["Error Fetching :("];
    },
    getReviews: (state, action: PayloadAction<{ data: unknown[] }>) => {
      state.reviews = action.payload.data;
    },
    addNewReviewToList: (
      state,
      action: PayloadAction<{ createMovieReview: any }>
    ) => {
      if (current(state.reviews?.allMovieReviews?.nodes)) {
        state.reviews.allMovieReviews.nodes = [
          action.payload.createMovieReview.movieReview,
          ...state.reviews.allMovieReviews.nodes,
        ];
      }
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
