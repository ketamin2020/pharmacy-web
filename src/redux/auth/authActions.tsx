import { createAction } from '@reduxjs/toolkit'

export enum AuthAction {
  LOGIN = 'auth/login',
  IS_MOBILE_DEVICE = 'auth/isMobileDevice',
}

const login = createAction(AuthAction.LOGIN)
const isMobileDevice = createAction(AuthAction.IS_MOBILE_DEVICE)

export { login, isMobileDevice }
