import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleBusketModal, toggleAuthModal } from 'redux/ui/modals/modalsActions'
import { Menu, MenuOpen, ShoppingBasket, Phone, PermIdentity, FavoriteBorder } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NavSideBar from '../NavSideBar/NavSideBar'
import { Phone as PhoneNumber } from 'public'
import { SearhInput } from 'common/SearchInput/SearhInput'
import { RoutePath } from 'routes/types'
import './NavBar.scss'

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
          {navbarItems.map(item => (
            <NavLink to={item.path} className='header__nav-menu_item' key={item.id} end>
              {item.title}
            </NavLink>
          ))}
        </div>

        <div className='header__nav-contacts mobile__hidden'>
          <Phone />
          <div>
            <a href={`tel:${PhoneNumber.PHONE_1}`} type='tel'>
              {PhoneNumber.PHONE_1_PRETY}
            </a>
          </div>
        </div>

        <SearhInput placeholder='Пошук' onChange={() => null} />
        <div className='header__nav-constrols_group'>
          <Badge badgeContent={4} color='warning'>
            <div onClick={handleWishList} className='header__nav-badge'>
              <FavoriteBorder />
              <p className='header__nav-basket__title'>Вибране</p>
            </div>
          </Badge>
          <Badge badgeContent={4} color='warning'>
            <div className='header__nav-badge' onClick={handleBusketModal}>
              <ShoppingBasket />
              <p className='header__nav-basket__title'>Корзина</p>
            </div>
          </Badge>
          <Badge badgeContent={0} color='warning'>
            <div onClick={handleAuthModal} className='header__nav-badge'>
              <PermIdentity />
              <p className='header__nav-basket__title'>Увійти</p>
            </div>
          </Badge>
        </div>
        <NavSideBar open={open} toggleSlider={toggleSlider} />
      </div>
    </section>
  )
}

export default NavBar
