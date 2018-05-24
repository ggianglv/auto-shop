import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store, {persistor} from './config/store'
import AppRoute from './config/route'
import 'bootstrap/dist/css/bootstrap.css'
import {PersistGate} from 'redux-persist/integration/react'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoute/>
    </PersistGate>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
