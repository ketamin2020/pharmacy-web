import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useIsMobile from 'hooks/useIsMobile'
import { isMobileDevice } from 'redux/auth/authActions'
import { getMenuGroups } from 'api/groups'
import { groupsAction } from 'redux/groups/groupsActions'
import { mainAction, bannerAction } from 'redux/main/mainActions'
import { getMain } from 'api/main'
import { getBanners } from 'api/banner'
import { getUserByToken } from 'api/users'
import { getUserByTokenAction } from 'redux/user/userActions'
import { getTokenFromLS } from 'utils/getTokenFromLS'
import { fetchWishList, fetchWishListByUser } from 'redux/wish/wishOperation'
import { fetchBasketList, fetchBasketListByUser } from 'redux/basket/basketOperation'
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
        const { data } = await getBanners()
        dispath(bannerAction(data))
      } catch (error) {
        console.error(error)
      }
    }
    fetchBanners()
  }, [])

  useEffect(() => {
    const fetchUser = async token => {
      try {
        const res = await getUserByToken({ token })

        dispath(getUserByTokenAction(res))
      } catch (error) {
        console.error(error)
      }
    }

    const token = getTokenFromLS()

    if (token) {
      fetchUser(token)
    }
  }, [])

  useEffect(() => {
    const fetchUser = async token => {
      try {
        const res = await getUserByToken({ token })

        dispath(getUserByTokenAction(res))
      } catch (error) {
        console.error(error)
      }
    }

    const token = getTokenFromLS()

    if (token) {
      fetchUser(token)
    }
  }, [])

  useEffect(() => {
    const getWishListByUser = async () => {
      try {
        dispath(fetchWishList())
        dispath(fetchWishListByUser())
      } catch (error) {
        console.error(error)
      }
    }

    const token = getTokenFromLS()

    if (token) {
      getWishListByUser(token)
    }
  }, [])
  useEffect(() => {
    const getBasketList = async () => {
      try {
        dispath(fetchBasketList())
        dispath(fetchBasketListByUser())
      } catch (error) {
        console.error(error)
      }
    }

    const token = getTokenFromLS()

    if (token) {
      getBasketList()
    }
  }, [])

  return children
}

export default AuthLayout
