import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './config/store'
import AppRoute from './config/route'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
)
ReactDOM.render(<App />, document.getElementById('root'))
