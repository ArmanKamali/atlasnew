import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import factorReducer from './factorReducer'
import userReducer from './userReducer'


const persistConfig = {
    key : 'root',
    storage,
}
const rootReducer = combineReducers({
    user : userReducer,
    factors : factorReducer
})

export default persistReducer(persistConfig, rootReducer);