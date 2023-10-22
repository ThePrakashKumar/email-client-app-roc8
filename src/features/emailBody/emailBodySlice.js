import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchEmailBody from "./emailBodyAPI";

const initialState = {
    status: "",
    id: "",
    body: "",
};

export const getEmailBody = createAsyncThunk("emailBody/getEmailBody", (id) =>
    fetchEmailBody(id)
);

const emailBodySlice = createSlice({
    name: "emailBody",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEmailBody.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getEmailBody.fulfilled, (state, action) => {
                state.status = "success";
                state.id = action.payload.id;
                state.body = action.payload.body;
            });
    },
});

export default emailBodySlice.reducer;
