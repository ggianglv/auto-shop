import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}
const store = createStore(reducers, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export default store