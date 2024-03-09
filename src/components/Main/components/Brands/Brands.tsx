import React, { useEffect, useState } from 'react'
import { Box, List } from '@material-ui/core'
import './Brands.scss'

import { getBrands } from 'api/brand'

const Brands = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchBrandsList = async () => {
      try {
        const data = await getBrands({})

        setData(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBrandsList()
  }, [])

  return (
    <Box className='container'>
      <h2>Бренди</h2>
      <List className='brands--wrapper'>
        {data?.map((item, i) => (
          <li key={i}>
            <a href={item.url} target='e_blank'>
              <img src={item.logo.url} alt={item.name} />
            </a>
          </li>
        ))}
      </List>
    </Box>
  )
}

export default Brands
