import React, { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { Main } from './components/Success/Main'
import { getOrderById } from 'api/ordered'

export const CheckoutSuccess = () => {
  const params = useParams()
  const [order, setOrder] = useState([])

  useEffect(() => {
    const fetchOrderById = async () => {
      try {
        const res = await getOrderById(params)
        setOrder(res)
      } catch (error) {
        console.error(error)
      }
    }
    if (params?.orderId) fetchOrderById()
  }, [params])
  return (
    <Wrapper>
      <Header />
      <Main order={order} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
