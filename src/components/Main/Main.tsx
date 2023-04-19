import React from 'react'
import About from './components/About/About'
import Slider from './components/Slider/Slider'
import Brands from './components/Brands/Brands'
import Popular from './components/Popular/Popular'
import Bestsellers from './components/Bestsellers/Bestsellers'
import Description from './components/Description/Description'
import Reviews from './components/Reviews/Reviews'
import { Box } from '@material-ui/core'
export const Main = () => {
  return (
    <Box className='container'>
      <Slider />
      <About />
      <Brands />
      <Popular />
      <Bestsellers />
      <Reviews />
      <Description />
    </Box>
  )
}
