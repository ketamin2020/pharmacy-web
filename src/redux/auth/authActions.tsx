import { createAction } from '@reduxjs/toolkit'

export enum AuthAction {
  LOGIN = 'auth/login',
  IS_MOBILE_DEVICE = 'auth/isMobileDevice',
  IS_ADMIN = 'auth/isAdmin',
}

const login = createAction(AuthAction.LOGIN)
const admin = createAction(AuthAction.IS_ADMIN)
const isMobileDevice = createAction(AuthAction.IS_MOBILE_DEVICE)

export { login, isMobileDevice, admin }
