import { SET_FILTER } from '../actions/filters'

const initialState = {}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default filters