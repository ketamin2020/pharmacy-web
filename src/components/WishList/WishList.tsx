import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { getUserWishList } from 'api/wish'
import { ProductCard } from 'common/ProductCard/ProductCard'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'

export const WishList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchUserWishList = async () => {
    setLoading(true)
    try {
      const res = await getUserWishList()
      setData(res.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserWishList()
  }, [])

  return (
    <Wrapper>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        data?.products &&
        data?.products?.map((item, idx) => (
          <ProductCard
            status={!!item.price?.current}
            image={item?.images?.items?.[0]?.url}
            price={item?.price?.current}
            key={idx}
            name={item.property.name}
            id={item.id}
            callback={fetchUserWishList}
          />
        ))
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`
