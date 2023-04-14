import { createReducer } from '@reduxjs/toolkit'
import { getUserByTokenAction } from './userActions'
const user = createReducer(null, {
  [getUserByTokenAction]: (_, { payload }) => payload,
})

export default user
