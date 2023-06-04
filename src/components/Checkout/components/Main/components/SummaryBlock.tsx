import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { basketSelector } from 'redux/basket/basketSelectors'
import { priceToView } from 'utils/priceToView'
import Button from 'common/Button/Button'
import { NavLink } from 'react-router-dom'
import { RoutePath } from 'routes/types'

export const SummaryBlock = () => {
  const busket = useSelector(basketSelector)

  return (
    <Wrapper>
      <Heading>Разом</Heading>
      <Row>
        <p className='title'>{`${busket?.totalQty || 0} товарів на сумму:`}</p>
        <p className='value'>{priceToView(busket.totalPrice)}</p>
      </Row>
      <Row>
        <p className='title'>Сума доставки:</p>
        <p className='value'>{priceToView(70)}</p>
      </Row>
      <SummaryRow>
        <p>Разом до сплати:</p>
        <h3>{priceToView(busket.totalPrice + 70)}</h3>
      </SummaryRow>
      <Button buttonCustomClass='submit-btn' color='green' shape='square'>
        <p>Оформити замовленні</p>
      </Button>
      <p className='agrement'>
        Підтверджуючи замовлення, я приймаю умови <br></br>{' '}
        <NavLink to={RoutePath.AGREEMENT}>користувацької угоди</NavLink>
      </p>
    </Wrapper>
  )
}

const Heading = styled.h3``
const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 10px;
  & .title {
    font-size: 16px;
    color: rgba(57, 69, 86, 0.6);
  }
  & .value {
    font-weight: 500;
  }
`
const SummaryRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid grey;
`

const Wrapper = styled.div`
  width: 100%;
  min-width: 350px;
  max-width: 450px;
  margin: 0 0 0 16px;
  padding: 10px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  & .submit-btn {
    margin: 0 auto;
  }
  & .agrement {
    font-size: 16px;
    color: rgba(57, 69, 86, 0.6);
    text-align: center;
  }
`
