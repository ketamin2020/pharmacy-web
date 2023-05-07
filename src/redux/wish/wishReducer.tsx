import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { getWishListAction, getWishListByUserAction } from './wishActions'

const list = createReducer([], {
  [getWishListAction]: (_, { payload }) => payload,
})
const data = createReducer([], {
  [getWishListByUserAction]: (_, { payload }) => payload,
})

export default combineReducers({
  list,
  data,
})
