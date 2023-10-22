import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEmail } from "./emailListAPI";

const initialState = {
  status: "",
  emails: [],
  readEmail: [],
  favoriteEmail: [],
  viewMode: false,
};

export const getEmail = createAsyncThunk("emailList/getEmail", () =>
  fetchEmail()
);

const emailListSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {
    addRead: (state, action) => {
      state.readEmail.push(action.payload);
    },
    addFavorite: (state, action) => {
      state.favoriteEmail.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteEmail = state.favoriteEmail.filter(
        (email) => email !== action.payload
      );
    },
    toggleViewMode: (state) => {
      state.viewMode = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEmail.fulfilled, (state, action) => {
        state.emails = action.payload.list;
      });
  },
});

export const { addRead, addFavorite, removeFavorite, toggleViewMode } =
  emailListSlice.actions;
export default emailListSlice.reducer;
