import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  value: number;
  sideEffectCount: number;
  allMovies?: any;
}

const initialState: ExampleState = {
  value: 0,
  sideEffectCount: 0,

  allMovies: {
    nodes: [],
  },
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    fetchMovies: () => {},
    getMovies: (state, action: PayloadAction<{ data: unknown[] }>) => {
      state.allMovies = action.payload.data;
    },
    getMoviesError: (state) => {
      state.allMovies = ["Error Fetching :("];
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
