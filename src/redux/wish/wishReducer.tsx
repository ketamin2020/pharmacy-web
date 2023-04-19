import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { getWishListAction } from './wishActions'

const list = createReducer([], {
  [getWishListAction]: (_, { payload }) => payload,
})

export default combineReducers({
  list,
})
