import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { mainInfoSelector } from 'redux/main/mainSelectors'
import { NavLink } from 'react-router-dom'
import { Logo } from 'images/icons/icons'
import { Phone } from '@material-ui/icons'
import { RoutePath } from 'routes/types'

const footerItems = [
  {
    id: 2,
    title: 'Гарантії',
    path: RoutePath.WARRANTY,
  },
  {
    id: 3,
    title: 'Доставка та оплата',
    path: RoutePath.DELIVERY,
  },
  {
    id: 4,
    title: 'Повернення',
    path: RoutePath.ORDER_RETURN,
  },
  {
    id: 5,
    title: 'Контакти',
    path: RoutePath.CONTACTS,
  },
]
export const Header = () => {
  const company = useSelector(mainInfoSelector)
  return (
    <Wrapper>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <LinksRow>
        {footerItems?.map(item => (
          <NavLink to={item.path} className='footer--link' key={item.id} end>
            {item.title}
          </NavLink>
        ))}
      </LinksRow>

      <PhoneRow>
        <Phone />
        <div>
          <a href={`tel:${company?.phone}`} type='tel'>
            {company?.phone}
          </a>
        </div>
      </PhoneRow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  background: #fff;
`

const PhoneRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const LinksRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
