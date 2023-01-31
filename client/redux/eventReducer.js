import { createSlice } from "@reduxjs/toolkit";

export const eventReducer = createSlice({
    name: 'event',
    initialState: {
        cat_refresh : 0,
    },
    reducers: {
        setCatRefresh: (state, action) => {
            state.cat_refresh = action.payload
        },

    },
})

export const { setCatRefresh } = eventReducer.actions

export default eventReducer.reducer 