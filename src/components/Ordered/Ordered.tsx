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

const OrderItem = ({ item }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Typography>
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
