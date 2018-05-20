import { SET_USER } from '../actions/user'

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user,
      }
    default:
      return state
  }
}

export default user