import React, { useState, useRef } from 'react'
import Button from '@mui/material/Button'

import { Logo } from 'images/icons/icons'
import { Dropdown } from 'common/Dropdown/Dropdown'
import {
  DrugsIcon,
  AntibioticsIcon,
  MedicalGoodsIcon,
  MotherAndChildIcon,
  CosmeticsIcon,
  DeliverySmallIcon,
} from 'images/icons/icons'
import { menuItemsSelector } from 'redux/groups/groupsSelectors'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './ToolBar.scss'
const icons = {
  0: <DrugsIcon />,
  1: <AntibioticsIcon />,
  2: <MedicalGoodsIcon />,
  3: <MotherAndChildIcon />,
  4: <CosmeticsIcon />,
}

const Toolbar = () => {
  const items = useSelector(menuItemsSelector)

  return (
    <section className='toolbar_wrapper mobile__hidden'>
      <div className='container toolbar_wrapper__inner'>
        <article>
          <NavLink to='/'>
            <Logo />
          </NavLink>
        </article>
        <article>
          {items?.map((item, i) => (
            <Dropdown key={i} icon={icons[i]} title={item.group_name} item={item} list={item.children} />
          ))}

          {/* <Button
            id='basic-button'
            style={{ display: 'flex', alignItems: 'flex-start', height: '20px' }}
            aria-controls={'basic-menu'}
            aria-haspopup='true'
            onClick={() => null}
          >
            <span>
              <DeliverySmallIcon />
            </span>
            <span style={{ color: 'red' }}>Акції</span>{' '}
          </Button> */}
        </article>
      </div>
    </section>
  )
}

export default Toolbar
