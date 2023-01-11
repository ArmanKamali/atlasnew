import { createSlice } from "@reduxjs/toolkit";

export const factorReducer = createSlice({
    name: 'factor',
    initialState: {
        factors : [],
        last_update : Date.now(),


    },
    reducers: {
        setInitialFactors:(state) =>{
            state.factors = [];
        }
    },
})

export const { setInitialFactors } = factorReducer.actions

export default factorReducer.reducer 