import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { getBasketListAction, getBasketListByUserAction } from './basketActions'

const list = createReducer([], {
  [getBasketListAction]: (_, { payload }) => payload,
})
const data = createReducer([], {
  [getBasketListByUserAction]: (_, { payload }) => payload,
})

export default combineReducers({
  list,
  data,
})
