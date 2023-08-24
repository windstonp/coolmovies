import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllUsersType, UserType } from "../../../types/users";

interface AuthState {
  currentUser?: UserType;
  allUsers: AllUsersType;
  allUsersError?: string;
}

const initialState: AuthState = {
  currentUser: {} as UserType,
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
    setCurrentUser: (state, action: PayloadAction<{ data: UserType }>) => {
      state.currentUser = action.payload.data;
    },
    getAllUsers: (
      state,
      action: PayloadAction<{
        data: {
          allUsers: AllUsersType;
        };
      }>
    ) => {
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
