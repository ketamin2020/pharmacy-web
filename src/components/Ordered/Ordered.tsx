import React, { useState, useEffect } from 'react'
import { getUserOrderList } from 'api/ordered'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'redux/auth/authSelectors'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from '@emotion/styled'
import { priceToView } from 'utils/priceToView'
import { DeliveryTypeTitle } from 'constants/constants'

const Item = ({ product }) => {
  console.log(product)
  return (
    <ItemWrapper>
      <div>{product?.property?.name}</div>
      <div>{product?.qty} шт.</div>
    </ItemWrapper>
  )
}

const OrderItem = ({ item }) => {
  return (
    <Accordion>
      <AccordionSummary
        style={{ width: '100%' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <HeaderRow>
          <div>
            <span>Сума:</span>
            <span>{priceToView(item.total)}</span>
          </div>
          <div>
            <span>Статус:</span>
            <span>{item.completed ? 'Виконано' : 'В роботі'}</span>
          </div>
          <div>
            <span>Тип:</span>
            <span>{DeliveryTypeTitle[item.delivery_type?.type]}</span>
          </div>
        </HeaderRow>
      </AccordionSummary>
      <AccordionDetails>
        {item?.products?.map(item => (
          <Item key={item.id} product={item} />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export const Ordered = () => {
  const isAuth = useSelector(isAuthSelector)

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchOrderedList = async () => {
      try {
        const res = await getUserOrderList()

        setData(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    if (isAuth) fetchOrderedList()
  }, [isAuth])
  return (
    <Wrapper>
      {data.map((item, idx) => (
        <OrderItem key={idx} item={item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const HeaderRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
`
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 200px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
`
