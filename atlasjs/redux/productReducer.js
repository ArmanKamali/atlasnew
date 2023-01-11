import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
    name: 'product',
    initialState: {
       category : [],

    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
    },
})

export const { setCategory } = productReducer.actions

export default productReducer.reducer 