import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  allMovies?: any;
  reviews?: any;
  selectedMovie: any;
}

const initialState: MovieState = {
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
    fetchEditMovieReviewById: (
      state,
      action: PayloadAction<{ data: any }>
    ) => {},
    fetchCreateMovieReview: (state, action: PayloadAction<{ data: any }>) => {},
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
      state.reviews = {
        allMovieReviews: {
          nodes: [
            ...current(state.reviews.allMovieReviews.nodes),
            action.payload.createMovieReview.movieReview,
          ],
        },
      };
    },
    updateReviewFromReviewList: (
      state,
      { payload }: PayloadAction<{ updateMovieReviewById: any }>
    ) => {
      let actualNodes = current(state.reviews.allMovieReviews.nodes);

      const items = actualNodes.map((item: any) => {
        if (item.id === payload.updateMovieReviewById.movieReview.id) {
          return { ...item, ...payload.updateMovieReviewById.movieReview };
        }
        return item;
      });

      state.reviews = {
        allMovieReviews: {
          nodes: items,
        },
      };
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
