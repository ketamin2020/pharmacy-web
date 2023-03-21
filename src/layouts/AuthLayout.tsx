import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useIsMobile from 'hooks/useIsMobile'
import { isMobileDevice } from 'redux/auth/authActions'
import { getMenuGroups } from 'api/groups'
import { groupsAction } from 'redux/groups/groupsActions'
const AuthLayout = ({ children }) => {
  const isMobile = useIsMobile()
  const dispath = useDispatch()
  useEffect(() => {
    dispath(isMobileDevice(isMobile))
  }, [])

  useEffect(() => {
    const fetchMenuGroups = async () => {
      try {
        const res = await getMenuGroups()
        dispath(groupsAction(res))
      } catch (error) {
        console.error(error)
      }
    }
    fetchMenuGroups()
  }, [])

  return children
}

export default AuthLayout
