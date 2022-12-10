import React from 'react'
import { Box, List } from '@material-ui/core'
import './Brands.scss'
import bayer from '../../../../images/brands/bayer.webp'
import bi from '../../../../images/brands/bi.webp'
import coloplast from '../../../../images/brands/coloplast.webp'
import jj from '../../../../images/brands/jj.webp'
import phizer from '../../../../images/brands/phizer.webp'
import pig from '../../../../images/brands/pig.webp'

const items = [{ icon: bayer }, { icon: bi }, { icon: coloplast }, { icon: jj }, { icon: phizer }, { icon: pig }]
const Brands = () => {
  return (
    <Box className='container'>
      <h2>Бренди</h2>
      <List className='brands--wrapper'>
        {items.map((item, i) => (
          <li key={i}>
            <img src={item.icon} alt='' />
          </li>
        ))}
      </List>
    </Box>
  )
}

export default Brands
