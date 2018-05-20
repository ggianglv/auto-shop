export const SET_LIST = 'SET_LIST'
export const SET_CURRENT = 'SET_CURRENT'
export const SET_LOADING = 'SET_LOADING'
export const FETCH_LIST = 'FETCH_LIST'
export const FETCH_PRODUCT = 'FETCH_PRODUCT'

export const setList = (products) => ({ type: SET_LIST, products })
export const fetchList = (params) => ({ type: FETCH_LIST, params })

export const fetchProductDetail = (slug) => ({ type: FETCH_PRODUCT, slug })
export const setCurrent = (product) => ({ type: SET_CURRENT, product })

export const setLoading = (loading) => ({ type: SET_LOADING, loading })