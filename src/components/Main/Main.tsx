import React from 'react'
import About from './components/About/About'
import Slider from './components/Slider/Slider'
import Brands from './components/Brands/Brands'
import { Box } from '@material-ui/core'
export const Main = () => {
  return (
    <Box className='container'>
      <Slider />
      <About />
      <Brands />
    </Box>
  )
}
