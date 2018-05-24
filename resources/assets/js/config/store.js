import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)
export default store
export const persistor = persistStore(store)