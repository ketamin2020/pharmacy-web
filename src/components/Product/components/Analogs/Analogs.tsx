import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import { getDrugsBySubstance } from 'api/drugs'
import { ProductCard } from 'common/ProductCard/ProductCard'
import styled from '@emotion/styled'

export const Analogs = ({ product }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const value = product?.property?.main.items?.active_ingredient?.value?.id

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const res = await getDrugsBySubstance({ active_ingredient: value })
      setData(res)
      setLoading(false)
    }
    fetch()
  }, [value])
  return (
    <Wrapper>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        data.map((item, idx) => (
          <ProductCard
            id={item?.id}
            reviews={item?.reviews}
            name={item?.name}
            status={item?.price}
            price={item?.price}
            image={item?.images?.items?.[0]?.url}
            key={idx}
          />
        ))
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  min-height: 500px;
`
