import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useIsMobile from 'hooks/useIsMobile'
import { isMobileDevice } from 'redux/auth/authActions'
const AuthLayout = ({ children }) => {
  const isMobile = useIsMobile()
  const dispath = useDispatch()
  useEffect(() => {
    dispath(isMobileDevice(isMobile))
  }, [])
  return children
}

export default AuthLayout
