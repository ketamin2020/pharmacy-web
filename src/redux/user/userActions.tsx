import { createAction } from '@reduxjs/toolkit'

const logoutRequest = createAction('auth/logoutRequest')
const logoutSuccess = createAction('auth/logoutSuccess')
const logoutError = createAction('auth/logoutError')

const signupRequest = createAction('auth/signupRequest')
const signupSuccess = createAction('auth/signupSuccess')
const signupError = createAction('auth/signupError')

const loginRequest = createAction('auth/loginRequest')
const loginSuccess = createAction('auth/loginSuccess')
const loginError = createAction('auth/loginError')

const gettingCurrentUserRequest = createAction('user/gettingCurentUserRequest')
const gettingCurrentUserSuccess = createAction('user/gettingCurentUserSuccess')
const gettingCurrentUserError = createAction('user/gettingCurentUserError')
const resetPassRequest = createAction('auth/resetPassRequest')
const resetPassSuccess = createAction('auth/resetPassSuccess')
const resetPassError = createAction('auth/resetPassError')
const sendEmailToResetPasswordRequest = createAction('auth/sendEmailToResetPasswordRequest')
const sendEmailToResetPasswordSuccess = createAction('auth/sendEmailToResetPasswordSuccess')
const sendEmailToResetPasswordError = createAction('auth/sendEmailToResetPasswordError')

export {
  signupRequest,
  signupSuccess,
  signupError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  gettingCurrentUserRequest,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
  resetPassRequest,
  resetPassSuccess,
  resetPassError,
  sendEmailToResetPasswordRequest,
  sendEmailToResetPasswordSuccess,
  sendEmailToResetPasswordError,
}
