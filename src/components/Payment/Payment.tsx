import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { ListItem, List } from '@material-ui/core'
import { NewPostIcon, DeliveredIcon, CurierIcon } from 'images/icons/icons'
import { CreditCard, Money, Replay } from '@material-ui/icons'
import { QrCode } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { mainInfoSelector } from 'redux/main/mainSelectors'

const Wrapper = styled.div`
  & * {
    font-family: var(--primaryFont);
  }
  & li::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--greenColor);
    position: absolute;
    top: 12px;
    left: -10px;
  }
`

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`

const Box = styled.article`
  width: 100%;
  border: 1px solid rgba(136, 143, 154, 0.16);
  border-radius: 16px;
  @media screen and (min-width: 900px) {
    max-width: 450px;
  }

  & .box_header {
    min-height: 123px;
    padding: 20px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    border-bottom: 1px solid rgba(136, 143, 154, 0.16);
    & .background {
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--greenColor);
      border-radius: 40%;
    }
  }
  & .box_body {
    padding: 20px;
  }
  & li {
    position: relative;
  }
`
export const Payment = () => {
  const main = useSelector(mainInfoSelector)
  return (
    <Wrapper>
      <h2>Способи доставки</h2>
      <BoxWrapper>
        <Box>
          <div className='box_header'>
            <div>
              <CurierIcon />
            </div>
            <div>
              <h4>{`Кур'єр ${main.name}`}</h4>
              <p>Швидка доставка на сьогодні</p>
            </div>
          </div>
          <div className='box_body'>
            <ul>
              <li>Тариф за доставку замовлень складає 59 грн</li>
              <li>Безкоштовна доставка замовлень на суму від 500 грн</li>
              <li>Оплата карткою на сайті або готівкою кур`єру</li>
            </ul>
          </div>
        </Box>
        <Box>
          <div className='box_header'>
            <div>
              <NewPostIcon />
            </div>
            <div>
              <h4>Доставка Новою поштою</h4>
              <p>Відправка товарів Новою поштою</p>
            </div>
          </div>
          <div className='box_body'>
            <ul>
              <li>Доставка у відділення Нової пошти - 59 грн</li>
              <li>Доставка кур`єром Нової пошти - 79 грн</li>
              <li>Безкоштовна доставка замовлень на суму від 500 грн!</li>
              <li>Оплата готівкою або карткою на сайті</li>
            </ul>
          </div>
        </Box>
        <Box>
          <div className='box_header'>
            <div>
              <DeliveredIcon />
            </div>
            <div>
              <h4>Самовивіз із аптеки</h4>
            </div>
          </div>
          <div className='box_body'>
            <ul>
              <li>За наявності товару на полиці в аптеці отримання можливе у день замовлення</li>
              <li>Ціни на сайті відрізняються від цін в аптеках — на сайті вони нижчі</li>
              <li>Оплата готівкою або карткою при отриманні</li>
              <li>Безкоштовна доставка замовлень</li>
            </ul>
          </div>
        </Box>
      </BoxWrapper>
      <h2>Способи оплати</h2>
      <BoxWrapper>
        <Box>
          <div className='box_header'>
            <div className='background'>
              <Money />
            </div>
            <div>
              <h4>Оплата готівкою при отриманні</h4>
            </div>
          </div>
          <div className='box_body'>
            <p>
              Оплата готівкою при отриманні доступна для будь-яких способів доставки. Ви можете сплатити замовлення
              готівкою при отриманні в наших аптеках, у відділеннях служб доставки або при зустрічі з кур`єром.
            </p>
          </div>
        </Box>
        <Box>
          <div className='box_header'>
            <div className='background'>
              <CreditCard />
            </div>
            <div>
              <h4>Оплата карткою на сайті</h4>
            </div>
          </div>
          <div className='box_body'>
            <p>
              Оплата банківською карткою доступна для будь-яких способів доставки. Ви можете сплатити за замовлення при
              його оформленні або пізніше – після отримання від нас повідомлення з підтвердженням замовлення.
              Замовлення, що доставляються до аптеки, можна сплатити безпосередньо при отриманні. Ми не беремо додаткову
              комісію за оплату карткою.
            </p>
          </div>
        </Box>
        <Box>
          <div className='box_header'>
            <div className='background'>
              <QrCode />
            </div>
            <div>
              <h4>Використання бонусів та промокодів</h4>
            </div>
          </div>
          <div className='box_body'>
            <p>
              Для економії на ліках можна при оформленні замовлення використовувати промокод або бонуси. Зверніть увагу,
              що дія промокоду може бути обмежена за часом або сумою замовлення. Якщо у вас немає промокоду, ви можете
              застосувати на замовлення накопичені бонуси. Баланс бонусів можна перевірити у особистому кабінеті.
            </p>
          </div>
        </Box>
        <Box>
          <div className='box_header'>
            <div className='background'>
              <Replay />
            </div>
            <div>
              <h4>Повернення коштів</h4>
            </div>
          </div>
          <div className='box_body'>
            <p>
              Повернення коштів за скасоване замовлення може тривати до 3 банківських днів. Повернення за замовленнями,
              що доставляються через службу Укрпошти, після оформлення яких минуло менше ніж 2 години, надходить на
              картку одразу після скасування замовлення.
            </p>
          </div>
        </Box>
      </BoxWrapper>
    </Wrapper>
  )
}
