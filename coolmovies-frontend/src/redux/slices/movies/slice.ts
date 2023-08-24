import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import {
  AllMoviesType,
  CreateMovieReviewType,
  FetchMovieEditReviewType,
  FetchMovieReviewType,
  MovieReviewType,
  ReviewsType,
  SelectedMovieType,
} from "../../../types";

interface MovieState {
  allMovies: AllMoviesType;
  reviews: ReviewsType;
  selectedMovie: SelectedMovieType | {};
  reviewsError: string | null;
  moviesError: string | null;
}

const initialState: MovieState = {
  reviews: {
    allMovieReviews: {
      nodes: [],
    },
  },
  reviewsError: null,
  moviesError: null,
  allMovies: {
    allMovies: {
      nodes: [],
    },
  },
  selectedMovie: {},
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    fetchMovies: () => {},
    fetchReviewsByMovieId: (state, action: PayloadAction<{ id: string }>) => {},
    fetchEditMovieReviewById: (
      state,
      action: PayloadAction<{ data: FetchMovieEditReviewType }>
    ) => {},
    fetchCreateMovieReview: (
      state,
      action: PayloadAction<{ data: FetchMovieReviewType }>
    ) => {},
    getMovies: (state, action: PayloadAction<{ data: AllMoviesType }>) => {
      state.allMovies = action.payload.data;
    },
    getMoviesError: (state) => {
      state.moviesError = "Error Fetching :(";
    },
    getReviews: (state, action: PayloadAction<{ data: ReviewsType }>) => {
      state.reviews = action.payload.data;
    },
    addNewReviewToList: (
      state,
      action: PayloadAction<{ createMovieReview: CreateMovieReviewType }>
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
      {
        payload,
      }: PayloadAction<{ updateMovieReviewById: CreateMovieReviewType }>
    ) => {
      let actualNodes = current(state.reviews.allMovieReviews.nodes);

      const items = actualNodes.map((item: MovieReviewType) => {
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
      state.reviewsError = "Error Fetching :(";
    },
    setSelectedMovie: (
      state,
      action: PayloadAction<{ selected: SelectedMovieType }>
    ) => {
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
