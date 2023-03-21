import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { groupsAction } from './groupsActions'

const menu = createReducer(null, {
  [groupsAction]: (_, { payload }) => payload,
})

export default combineReducers({
  menu,
})
