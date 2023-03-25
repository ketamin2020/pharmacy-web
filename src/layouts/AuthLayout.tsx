import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useIsMobile from 'hooks/useIsMobile'
import { isMobileDevice } from 'redux/auth/authActions'
import { getMenuGroups } from 'api/groups'
import { groupsAction } from 'redux/groups/groupsActions'
import { mainAction, bannerAction } from 'redux/main/mainActions'
import { getMain } from 'api/main'
import { getBanners } from 'api/banner'
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
  useEffect(() => {
    const fetchMainInfo = async () => {
      try {
        const res = await getMain()
        dispath(mainAction(res))
      } catch (error) {
        console.error(error)
      }
    }
    fetchMainInfo()
  }, [])
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await getBanners()
        dispath(bannerAction(res))
      } catch (error) {
        console.error(error)
      }
    }
    fetchBanners()
  }, [])

  return children
}

export default AuthLayout
