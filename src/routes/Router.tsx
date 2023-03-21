import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes, adminRoutes } from './routes'
import { useSelector } from 'react-redux'
import { isAuthSelector, isAdminSelector } from 'redux/auth/authSelectors'
import { Navigate } from 'react-router-dom'
export const Router = () => {
  const auth = useSelector(isAuthSelector)
  const admin = useSelector(isAdminSelector)
  return (
    <Routes>
      {publicRoutes.map(({ path, element: Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
      {privateRoutes.map(({ path, element: Page }) => (
        <Route key={path} path={path} element={auth ? <Page /> : <Navigate replace to='/' />} />
      ))}
      {adminRoutes.map(({ path, element: Page }) => (
        <Route key={path} path={path} element={admin ? <Page /> : <Navigate replace to='/' />} />
      ))}
    </Routes>
  )
}
