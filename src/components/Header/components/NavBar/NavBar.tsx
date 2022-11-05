import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { isMobileDeviceSelector } from 'redux/auth/authSelectors'
import { TextField } from '@mui/material'
import { InputAdornment, IconButton, makeStyles, createStyles } from '@material-ui/core'
import { Menu, MenuOpen, ShoppingBasket, Search, Phone } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NavSideBar from '../NavSideBar/NavSideBar'
import { Phone as PhoneNumber, WorkTime } from 'public'
import { normalizePhone } from 'utils/normalizePhone'
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

const NavBar = () => {
  const styleInput = useStylesInput()
  const styleIconButton = useStylesIconButton()
  const isMobile = useSelector(isMobileDeviceSelector)
  const [open, setOpen] = useState(false)

  const toggleSlider = () => {
    setOpen(!open)
  }
  return (
    <div className='header__nav-bar'>
      {isMobile ? (
        <span onClick={toggleSlider}>{open ? <MenuOpen /> : <Menu />}</span>
      ) : (
        <div className='header__nav-contacts'>
          <Phone />
          <div>
            <a href={`tel:${PhoneNumber.PHONE_1}`} type='tel'>
              {PhoneNumber.PHONE_1_PRETY}
            </a>
            <p>{WorkTime.WORK_TIME}</p>
          </div>
        </div>
      )}

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
      />
      <Badge className='header__nav-badge' badgeContent={4} color='warning'>
        <ShoppingBasket />
        <p className='header__nav-basket__title'>Корзина</p>
      </Badge>
      <NavSideBar open={open} toggleSlider={toggleSlider} />
    </div>
  )
}

export default NavBar
