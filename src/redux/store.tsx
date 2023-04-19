import React from 'react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import auth from './auth/authReducer'
import user from './user/userReducer'
import account from './account/accountReducer'
import modals from './ui/modals/modalReducer'
import groups from './groups/groupsReducer'
import company from './main/mainReducer'
import wishlist from './wish/wishReducer'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAdmin'],
}

const app = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  user,
  groups,
  company,
  account,
  ui: combineReducers({ modals }),
  wishlist,
})

const store = configureStore({
  reducer: {
    app,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
const persistor = persistStore(store)
export { store, persistor }
