import { SET_CURRENT, SET_LIST, SET_LOADING } from '../actions/products'

const initialState = {
  list: {
    data: []
  },
  current: {},
  loading: false,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.products,
        loading: false,
      }

    case SET_CURRENT:
      return {
        ...state,
        current: action.product,
        loading: false,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      }

    default:
      return state
  }
}

export default products