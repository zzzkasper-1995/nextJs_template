import { combineReducers } from 'redux'
import headerReducer from './header-reducer'
import appReducer from './app-reducer'
import carsReducer from './cars-reducer'
import item2Reducer from './item2-reducer'
import item3Reducer from './item3-reducer'

export default combineReducers({
    headerReducer,
    appReducer,
    carsReducer,
    item2Reducer,
    item3Reducer,
})
