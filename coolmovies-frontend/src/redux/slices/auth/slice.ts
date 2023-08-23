import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
};

interface AuthState {
  currentUser?: User;
  allUsers: {
    nodes: User[];
  };
  allUsersError?: string;
}

const initialState: AuthState = {
  currentUser: {} as User,
  allUsers: { nodes: [] },
  allUsersError: undefined,
};

export const slice = createSlice({
  initialState,
  name: "users",
  reducers: {
    fetchAllUser: () => {},
    clearCurrentUser: (state) => {
      state.currentUser = undefined;
    },
    setCurrentUser: (state, action: PayloadAction<{ data: User }>) => {
      state.currentUser = action.payload.data;
    },
    getAllUsers: (state, action: PayloadAction<{ data: any }>) => {
      state.allUsers = action.payload.data.allUsers;
    },
    getAllUsersError: (state) => {
      state.allUsersError = "Error Fetching :(";
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
