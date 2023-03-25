import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { mainAction, bannerAction } from './mainActions'

const main = createReducer(null, {
  [mainAction]: (_, { payload }) => payload,
})
const banner = createReducer(null, {
  [bannerAction]: (_, { payload }) => payload,
})

export default combineReducers({
  main,
  banner,
})
