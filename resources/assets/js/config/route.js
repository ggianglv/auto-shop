import React from 'react'
import { Redirect, Route, Router, Switch, } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import HomePage from '../screens/Home'
import ProductPage from '../screens/ProductDetail'
import LoginPage from '../screens/Login'
import RegisterPage from '../screens/Register'
import CreateProduct from '../screens/CreateProduct'


export const history = createBrowserHistory()

export default () => (
  <Router history={history}>
    <Route render={({ location }) => (
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/xe/:slug" component={ProductPage} />
          <Route exact path="/product/create" component={CreateProduct} />
          <Redirect to="/404" />
        </Switch>
      </CSSTransition>
    )}>
    </Route>
  </Router>
)

export const routes = {
  home: '/',
  404: '/404',
  login: '/login',
  register: '/register',
  product: {
    create: '/product/create',
  }
}