import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentFilter: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.currentFilter = action.payload;
        },
    },
});

export const {changeFilter} = filterSlice.actions;

export default filterSlice.reducer;
