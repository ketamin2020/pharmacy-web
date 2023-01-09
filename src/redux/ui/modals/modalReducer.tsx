import { createReducer } from '@reduxjs/toolkit'
import * as modalActions from './modalsActions'
const initState = {
  busketModal: false,
  authModal: false,
}
const modals = createReducer(initState, {
  [modalActions.toggleBusketModal]: (state, { payload }) => ({ ...state, busketModal: payload }),
  [modalActions.toggleAuthModal]: (state, { payload }) => ({ ...state, authModal: payload }),
})

export default modals
