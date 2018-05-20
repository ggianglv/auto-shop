import { takeLatest, select, put, call } from 'redux-saga/effects'
import { FETCH_LIST, FETCH_PRODUCT, setCurrent, setList, setLoading } from '../actions/products'
import { list, current } from '../services/products'

function* fetchProductList(action) {
  yield put(setLoading(true))
  const state = yield select()
  const products = yield list({
    ...state.filters,
    ...action.params,
  })
  yield put(setList(products))
}

function* fetchCurrent(action) {
  yield put(setLoading(true))
  const product = yield current(action.slug)
  yield put(setCurrent(product))
}

const rootSaga = function* rootSaga() {
  yield takeLatest(FETCH_LIST, fetchProductList)
  yield takeLatest(FETCH_PRODUCT, fetchCurrent)
}

export default rootSaga