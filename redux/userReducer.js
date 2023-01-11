import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        user_data: {},
        token : '',

    },
    reducers: {
        setUser: (state, action) => {
            state.user_data = action.payload
        },

        setToken: (state, action) => {
            state.token = action.payload
        },
        setInitial:(state) =>{
            state.user_data = {}
            state.token = ''
        }
    },
})

export const { setUser,setToken, setInitial } = userReducer.actions

export default userReducer.reducer 