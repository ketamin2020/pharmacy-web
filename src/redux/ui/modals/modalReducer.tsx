import { createReducer } from '@reduxjs/toolkit'
import * as modalActions from './modalsActions'
const initState = {
  busketModal: false,
}
const modals = createReducer(initState, {
  [modalActions.toggleBusketModal]: (state, { payload }) => ({ ...state, busketModal: payload }),
})

export default modals
