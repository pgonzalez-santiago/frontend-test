import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

const middlewares = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middlewares)
))

// then run the saga
sagaMiddleware.run(sagas)

export default store
