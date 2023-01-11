import { createSlice } from "@reduxjs/toolkit";

export const constsReducer = createSlice({
    name: 'consts',
    initialState: {
        navbar_items: [
            {
                id: 1,
                name: "contact",
                perName: 'تماس با ما',
                childs : [
                    {id : 1, name : 'شماره موبایل' , value : '09128687867'},
                    {id : 2, name : 'شماره شرکت' , href:'mobile'},
                ]


            },
            { id: 2, name: "products", perName: 'محصولات', childs: [] },
            {
                id: 3, name: "about", perName: 'درباره ما',
                childs: [
                    { id: 1, name: 'کارخانه و لوکیشن', href :  "factory" },
                    { id: 2, name: 'فعالیت های ما', href : 'about'}
                ]
            },
        ],

    },
    reducers: {
        setNavbarCategory: (state, action) => {
            state.navbar_items[1].childs = action.payload
        },
    },
})

export const { setNavbarCategory } = constsReducer.actions

export default constsReducer.reducer 