import {CLEAR_USER, SET_USER} from '../actions/user'

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user
      }
    case CLEAR_USER:
      return {}
    default:
      return state
  }
}

export default user