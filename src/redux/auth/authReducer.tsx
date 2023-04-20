import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { login, isMobileDevice, admin, logout } from './authActions'

const token = createReducer(null, {
  [login]: (_, { payload }) => payload,
  [logout]: () => '',
})
const isMobile = createReducer(null, {
  [isMobileDevice]: (_, { payload }) => payload,
})
const isAdmin = createReducer(null, {
  [admin]: (_, { payload }) => payload,
})

export default combineReducers({
  token,
  isMobile,
  isAdmin,
})
