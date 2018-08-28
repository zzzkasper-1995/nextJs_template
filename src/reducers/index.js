import { combineReducers } from 'redux'
import headerReducer from './headerReducer'
import appReducer from './appReducer'

export default combineReducers({
    headerReducer,
    appReducer,
})
