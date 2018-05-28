export const SET_USER = 'SET_USER'

export const CLEAR_USER = 'CLEAR_USER'

export const LOGOUT = 'LOGOUT'

export const logout = () => ({type: LOGOUT})

export const setUser = (user) => ({type: SET_USER, user})