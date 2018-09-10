import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import appReducer from './appReducer'
import item1Reducer from './item1Reducer'
import item2Reducer from './item2Reducer'
import item3Reducer from './item3Reducer'

export default combineReducers({
    headerReducer,
    appReducer,
    item1Reducer,
    item2Reducer,
    item3Reducer,
})
