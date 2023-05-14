import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { ArrowLeft } from '@material-ui/icons'
import { SummaryBlock } from './components/SummaryBlock'
import { DeliveryBlock } from './components/DeliveryBlock'
import { ContactInfoBlock } from './components/ContactInfoBlock'
import { PaymentBlock } from './components/PaymentBlock'

export const Main = () => {
  return (
    <Wrapper>
      <Heading>
        <h2>Оформення заказу</h2>
        <NavLink to={'/'}>
          <BackBlock>
            <ArrowLeft />
            <span>Повернутися до покупок</span>
          </BackBlock>
        </NavLink>
      </Heading>
      <MainBlock>
        <TabBlock>
          <TabTitle>1.Вибір способу доставки</TabTitle>
          <DeliveryBlock />
        </TabBlock>
        <TabBlock>
          <TabTitle>2.Контакта інформація</TabTitle>
          <ContactInfoBlock />
        </TabBlock>
        <TabBlock>
          <TabTitle>3.Вибір способу оплати</TabTitle>
          <PaymentBlock />
        </TabBlock>
      </MainBlock>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1460px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const MainBlock = styled.div`
  width: 80%;
`

const TabBlock = styled.div`
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  background: #fff;
`
const TabTitle = styled.h4``
const TabContent = styled.div``
