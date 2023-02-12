import { createSlice } from "@reduxjs/toolkit";

export const dataReducer = createSlice({
    name: 'data',
    initialState: {
        categories: [],


    },
    reducers: {
        setInitCats: (state) => {
            state.categories = [];
        },
        setCats: (state, action) => {
            state.categories = action.payload
        }
    },
})

export const { setInitCats, setCats } = dataReducer.actions

export default dataReducer.reducer 