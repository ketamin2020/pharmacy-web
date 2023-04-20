import { createAction } from '@reduxjs/toolkit'

export enum AuthAction {
  LOGIN = 'auth/login',
  LOGOUT = 'auth/logout',
  IS_MOBILE_DEVICE = 'auth/isMobileDevice',
  IS_ADMIN = 'auth/isAdmin',
}

const login = createAction(AuthAction.LOGIN)
const logout = createAction(AuthAction.LOGOUT)
const admin = createAction(AuthAction.IS_ADMIN)
const isMobileDevice = createAction(AuthAction.IS_MOBILE_DEVICE)

export { login, isMobileDevice, admin, logout }
