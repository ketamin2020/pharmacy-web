import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  signupSuccess,
  signupError,
  loginSuccess,
  logoutError,
  loginError,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
  resetPassSuccess,
  resetPassError,
  sendEmailToResetPasswordError,
  logoutRequest,
} from './authActions'

const user = createReducer(
  {},
  {
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutRequest]: () => ({}),
    [gettingCurrentUserSuccess]: (state, { payload }) => ({
      ...state,
      email: payload.email,
    }),
  },
)
const token = createReducer(null, {
  [signupSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutRequest]: () => null,
  [logoutError]: () => null,
  [gettingCurrentUserError]: () => null,
})
const isPasswordChanged = createReducer(null, {
  [resetPassSuccess]: () => true,
})
const login = createReducer(null, {
  [loginError]: (_, { payload }) => payload,
})
const signup = createReducer(null, {
  [signupError]: (_, { payload }) => payload,
})
const resetPasswordRequest = createReducer(null, {
  [sendEmailToResetPasswordError]: (_, { payload }) => payload,
})
const resetPassword = createReducer(null, {
  [resetPassError]: (_, { payload }) => payload,
})

export default combineReducers({
  user,
  token,
  errors: combineReducers({
    login,
    signup,
    resetPasswordRequest,
    resetPassword,
  }),
  isPasswordChanged,
})
