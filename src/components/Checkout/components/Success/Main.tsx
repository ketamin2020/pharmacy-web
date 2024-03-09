import React from 'react'
import styled from '@emotion/styled'
import { CheckCircleOutline } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import { RoutePath } from 'routes/types'
import Button from 'common/Button/Button'
import { priceToView } from 'utils/priceToView'

const DeliveryTypeNum = {
  1: 'Заберу сам',
  2: `${'Нова Пошта'}`,
  3: `Кур'єрська доставка`,
}
const PaymentTypeNum = {
  1: 'Банківський платіж',
  2: 'При отриманні',
}

export const Main = ({ order }) => {
  return (
    <Wrapper>
      <SuccessBlock>
        <div>
          <CheckCircleOutline style={{ color: 'green' }} fontSize='24' />
        </div>
        <div>
          <h2>Ми прийняли Ваше замовлення</h2>
          <p>
            Ваше замовлення буде оброблено автоматично, у разі потреби зв&apos;яжеться з вами фармацевт. Через кілька
            хвилин ми відправляємо підтвердження та номер вашого замовлення у sms або viber
          </p>
          <p>
            Щоб отримати інформацію про стан замовлення у розділі
            <NavLink to={RoutePath.ORDERS}>&quot;Мої замовлення&quot;</NavLink>
          </p>
        </div>
      </SuccessBlock>
      <InfoBlock>
        <h3>Деталі замовлення:</h3>
        <Row>
          <p className='detail-title'>Отримувач</p>
          <p className='detail-value'>
            {`${order?.delivery?.recipient?.last_name} ${order?.delivery?.recipient?.first_name} ${order?.delivery?.recipient?.middle_name}` ||
              ''}
          </p>
        </Row>
        <Row>
          <p className='detail-title'>Телефон</p>
          <p className='detail-value'>{order?.delivery?.recipient?.phone || ''}</p>
        </Row>
        <Row>
          <p className='detail-title'>Спосіб доставки</p>
          <p className='detail-value'>{DeliveryTypeNum[order?.delivery_type?.type] || ''}</p>
        </Row>
        <Row>
          <p className='detail-title'>Спосіб оплати</p>
          <p className='detail-value'>{PaymentTypeNum[order?.payment?.type] || ''}</p>
        </Row>
        <Row>
          <p className='detail-title'>Вартість</p>
          <p className='detail-value'>{priceToView(order?.total || 0)}</p>
        </Row>
      </InfoBlock>
      <Button shape='square' color='green'>
        <NavLink to={RoutePath.HOME_PAGE}>Продовжити покупки</NavLink>
      </Button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

const SuccessBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
`
const InfoBlock = styled.div`
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  & .detail-title {
    color: rgba(57, 69, 86, 0.6);
  }
`
