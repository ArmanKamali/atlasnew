import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dataReducer from './dataReducer'
import factorReducer from './factorReducer'
import userReducer from './userReducer'


const persistConfig = {
    key : 'root',
    storage,
}
const rootReducer = combineReducers({
    user : userReducer,
    factors : factorReducer,
    data : dataReducer,
})

export default persistReducer(persistConfig, rootReducer);