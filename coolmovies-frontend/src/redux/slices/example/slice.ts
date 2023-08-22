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
    fetch: () => {},
    clearData: (state) => {
      state.allMovies = undefined;
    },
    loaded: (state, action: PayloadAction<{ data: unknown[] }>) => {
      state.allMovies = action.payload.data;
    },
    loadError: (state) => {
      state.allMovies = ["Error Fetching :("];
    },
    increment: (state) => {
      state.value += 1;
    },
    epicSideEffect: (state) => {
      state.sideEffectCount += 1;
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
