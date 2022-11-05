import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { login, isMobileDevice } from './authActions'

const token = createReducer(null, {
  [login]: (_, { payload }) => payload.token,
})
const isMobile = createReducer(null, {
  [isMobileDevice]: (_, { payload }) => payload,
})

export default combineReducers({
  token,
  isMobile,
})
