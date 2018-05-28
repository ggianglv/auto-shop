import {combineReducers} from 'redux'
import user from './user'
import products from './products'
import filters from './filters'

export default combineReducers({
  user,
  products,
  filters
})