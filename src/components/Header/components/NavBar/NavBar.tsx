import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { InputAdornment, IconButton, makeStyles, createStyles } from '@material-ui/core'
import { Menu, MenuOpen, ShoppingBasket, Search, Phone, PermIdentity, FavoriteBorder } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NavSideBar from '../NavSideBar/NavSideBar'
import { Phone as PhoneNumber } from 'public'
import './NavBar.scss'

const useStylesInput = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '400px',
      outline: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      background: 'white',
    },
  }),
)
const useStylesIconButton = makeStyles(() =>
  createStyles({
    root: {
      color: 'grey !important',
    },
  }),
)

const navbarItems = [
  {
    id: 0,
    title: 'Про нас',
  },
  {
    id: 2,
    title: 'Гарантії',
  },
  {
    id: 3,
    title: 'Доставка та оплата',
  },
  {
    id: 4,
    title: 'Повернення',
  },
  {
    id: 5,
    title: 'Контакти',
  },
]

const NavBar = () => {
  const styleInput = useStylesInput()
  const styleIconButton = useStylesIconButton()
  const [open, setOpen] = useState(false)

  const toggleSlider = () => {
    setOpen(!open)
  }
  return (
    <div className='header__nav-bar'>
      <span className='header__nav-toggle desktop__hidden' onClick={toggleSlider}>
        {open ? <MenuOpen /> : <Menu />}
      </span>
      <div className='mobile__hidden header__nav-menu'>
        {navbarItems.map(item => (
          <span className='header__nav-menu_item' key={item.id}>
            {item.title}
          </span>
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

      <TextField
        onChange={e => null}
        placeholder='Пошук'
        size='small'
        variant='outlined'
        classes={{
          root: styleInput.root,
        }}
        InputProps={{
          autoComplete: 'on',
          type: 'search',
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton edge='start'>
                <Search
                  classes={{
                    root: styleIconButton.root,
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        className='desktop__hidden'
      />
      <div className='header__nav-constrols_group'>
        <Badge className='header__nav-badge' badgeContent={0} color='warning'>
          <PermIdentity />
          <p className='header__nav-basket__title'>Увійти</p>
        </Badge>
        <Badge className='header__nav-badge' badgeContent={4} color='warning'>
          <FavoriteBorder />
          <p className='header__nav-basket__title'>Вибране</p>
        </Badge>
        <Badge className='header__nav-badge' badgeContent={4} color='warning'>
          <ShoppingBasket />
          <p className='header__nav-basket__title'>Корзина</p>
        </Badge>
      </div>
      <NavSideBar open={open} toggleSlider={toggleSlider} />
    </div>
  )
}

export default NavBar
