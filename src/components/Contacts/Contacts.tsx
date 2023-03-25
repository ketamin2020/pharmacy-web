import React from 'react'
import styled from '@emotion/styled'
import Map from 'common/Map/Map'
import { Phone } from '@material-ui/icons'
import { EmailOutlined } from '@material-ui/icons'
import { AccessTime } from '@material-ui/icons'
import { LocationOn } from '@mui/icons-material'
import { Phone as PhoneNumber, Email } from 'public'
import { useSelector } from 'react-redux'
import { mainInfoSelector } from 'redux/main/mainSelectors'
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
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
const Row = styled.div`
  margin-bottom: 30px;
  & .title {
    color: grey;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 4px;
  }
`
const Box = styled.div`
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
`

export const Contacts = () => {
  const main = useSelector(mainInfoSelector)
  const items = [
    { title: 'Директор з маркетингу', phone: main.marketing.phone, email: main.marketing.email },
    { title: 'Постачальникам', phone: main.sales.phone, email: main.sales.email },
    { title: 'Оптовий продаж', phone: main.provider.phone, email: main.provider.email },
  ]
  return (
    <Wrapper>
      <>
        {' '}
        <Box>
          <h3>Клієнтам</h3>
          <Row>
            <div className='title'>
              <AccessTime /> Гаряча лінія:
            </div>
            <div>
              <a href={`tel:${main.phone}`} type='tel'>
                {main.phone}
              </a>
            </div>
          </Row>
          <Row>
            <div className='title'>
              <Phone /> Графік роботи:
            </div>
            <div>з 8:00 до 21:00 (без вихідних)</div>
          </Row>
          <Row>
            <div className='title'>
              <EmailOutlined /> Служба підтримки:
            </div>
            <div>
              <a href={`mailto:${main.support_email}`} type='email'>
                {main.support_email}
              </a>
            </div>
          </Row>
          <Row>
            <div className='title'>
              <LocationOn /> Адреса:
            </div>
            <div>{main.address}</div>
          </Row>
          <p style={{ width: '300px' }}>
            Ви можете звернутися за консультацією фармацевта або з будь-якого іншого питання до нас, використовуючи
            зручний для спосіб.
          </p>
        </Box>
        <Box>
          {items.map((item, i) => (
            <Row key={i}>
              <p>{item.title}</p>
              <p className='title'>
                <Phone />
                <a href={`tel:${item.phone}`} type='tel'>
                  {item.phone}
                </a>
              </p>
              <p className='title'>
                <EmailOutlined />
                <a href={`mailto:${item.email}`} type='email'>
                  {item.email}
                </a>
              </p>
            </Row>
          ))}
        </Box>
        <Map style={{ width: '300px', height: '400px' }} />
      </>
    </Wrapper>
  )
}
