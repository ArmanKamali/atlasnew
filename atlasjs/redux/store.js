import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from "redux-persist";

import persistReducer from './rootReducer'
import thunk from 'redux-thunk';


const store = configureStore({
    reducer: {
        reducer: persistReducer,
    },
    middleware: [thunk]
})


const persistor = persistStore(store);

export { store, persistor };

