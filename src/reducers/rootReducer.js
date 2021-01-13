
import {combineReducers} from 'redux'
import { productReducer } from './productReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    product : productReducer,
    ui : uiReducer
})