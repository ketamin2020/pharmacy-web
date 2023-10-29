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
  5: <DrugsIcon />,
  6: <DrugsIcon />,
  7: <DrugsIcon />,
  8: <DrugsIcon />,
  9: <DrugsIcon />,
  10: <DrugsIcon />,
  11: <DrugsIcon />,
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
        <article style={{ flexWrap: 'wrap' }}>
          {items?.map((item, i) => (
            <Dropdown key={i} icon={icons[i]} title={item.group_name} item={item} list={item.children} />
          ))}
        </article>
      </div>
    </section>
  )
}

export default Toolbar
