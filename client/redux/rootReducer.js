import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './userReducer'
import constsReducer from './constsReducer'
import productReducer from './productReducer'
import eventReducer from './eventReducer'


const persistConfig = {
    key : 'root',
    storage,
}
const rootReducer = combineReducers({
    user : userReducer,
    consts : constsReducer,
    products : productReducer,
    event : eventReducer,
})

export default persistReducer(persistConfig, rootReducer);