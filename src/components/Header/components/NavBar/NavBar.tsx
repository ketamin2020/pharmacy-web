import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleBusketModal, toggleAuthModal } from 'redux/ui/modals/modalsActions'
import { Menu, MenuOpen, ShoppingBasket, Phone, PermIdentity, FavoriteBorder } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NavSideBar from '../NavSideBar/NavSideBar'
import { SearhInput } from 'common/SearchInput/SearhInput'
import { RoutePath } from 'routes/types'
import { isAdminSelector, isAuthSelector } from 'redux/auth/authSelectors'
import { useSelector } from 'react-redux'
import { AdminPanelSettings } from '@mui/icons-material'
import './NavBar.scss'
import { mainInfoSelector } from 'redux/main/mainSelectors'
import { Avatar } from 'common/Avatar/Avatar'
import { userSelector } from 'redux/user/userSelectors'
import { wishlistIdsSelector } from 'redux/wish/wishSelectors'
import { basketlistIdsSelector } from 'redux/basket/basketSelectors'
const navbarItems = [
  {
    id: 0,
    title: 'Про нас',
    path: RoutePath.ABOUT_PAGE,
  },
  {
    id: 2,
    title: 'Гарантії',
    path: RoutePath.WARRANTY,
  },
  {
    id: 3,
    title: 'Доставка та оплата',
    path: RoutePath.DELIVERY,
  },
  {
    id: 4,
    title: 'Повернення',
    path: RoutePath.ORDER_RETURN,
  },
  {
    id: 5,
    title: 'Контакти',
    path: RoutePath.CONTACTS,
  },
]

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAdmin = useSelector(isAdminSelector)
  const isAuth = useSelector(isAuthSelector)
  const main = useSelector(mainInfoSelector)
  const user = useSelector(userSelector)
  const wishesArrayIds = useSelector(wishlistIdsSelector)
  const basketArrayIds = useSelector(basketlistIdsSelector)
  const [open, setOpen] = useState(false)

  const toggleSlider = () => {
    setOpen(!open)
  }

  const handleBusketModal = () => {
    return dispatch(toggleBusketModal(true))
  }
  const handleAuthModal = () => {
    return dispatch(toggleAuthModal(true))
  }

  const handleWishList = () => {
    return navigate(RoutePath.WISHLIST)
  }
  return (
    <section className='header--wrapper'>
      <div className='container header__nav-bar'>
        <span className='header__nav-toggle desktop__hidden' onClick={toggleSlider}>
          {open ? <MenuOpen /> : <Menu />}
        </span>
        <div className='mobile__hidden header__nav-menu'>
          {navbarItems?.map(item => (
            <NavLink to={item.path} className='header__nav-menu_item' key={item.id} end>
              {item.title}
            </NavLink>
          ))}
        </div>

        <div className='header__nav-contacts mobile__hidden'>
          <Phone />
          <div>
            <a href={`tel:${main?.phone}`} type='tel'>
              {main?.phone}
            </a>
          </div>
        </div>

        <SearhInput placeholder='Пошук' onChange={() => null} />
        <div className='header__nav-constrols_group'>
          <Badge badgeContent={wishesArrayIds?.length || 0} color='warning'>
            <div onClick={handleWishList} className='header__nav-badge'>
              <FavoriteBorder />
              <p className='header__nav-basket__title'>Вибране</p>
            </div>
          </Badge>
          <Badge badgeContent={basketArrayIds?.length || 0} color='warning'>
            <div className='header__nav-badge' onClick={handleBusketModal}>
              <ShoppingBasket />
              <p className='header__nav-basket__title'>Корзина</p>
            </div>
          </Badge>
          {isAdmin && (
            <Badge badgeContent={0} color='warning'>
              <div onClick={() => navigate(RoutePath.ADMIN)} className='header__nav-badge'>
                <AdminPanelSettings />
                <p className='header__nav-basket__title'>Адмін</p>
              </div>
            </Badge>
          )}
          {!isAuth ? (
            <Badge badgeContent={0} color='warning'>
              <div onClick={handleAuthModal} className='header__nav-badge'>
                <PermIdentity />
                <p className='header__nav-basket__title'>Увійти</p>
              </div>
            </Badge>
          ) : (
            <Badge badgeContent={0} color='warning'>
              <div onClick={() => navigate(RoutePath.ORDERS)} className='header__nav-badge'>
                <Avatar color={'#626ed4'}>{user?.first_name || 'Користувач'}</Avatar>
                {/* <p className='header__nav-basket__title'>Кабінет</p> */}
              </div>
            </Badge>
          )}
        </div>
        <NavSideBar open={open} toggleSlider={toggleSlider} />
      </div>
    </section>
  )
}

export default NavBar
