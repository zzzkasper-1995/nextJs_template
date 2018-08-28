import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { isProd } from './config'

export default (state, { isServer }) => {
    const middlewares = [thunk]
    if (!isServer && !isProd) {
        middlewares.push(createLogger({ collapsed: true }))
    }
    return createStore(
        reducer,
        state,
        compose(applyMiddleware(...middlewares)),
    )
}
