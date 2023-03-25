import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'images/icons/icons'
import { Phone as PhoneNumber, Email } from 'public'
import { Phone, EmailOutlined } from '@mui/icons-material'
import { MastercardLogo, VisaLogo } from 'images/icons/icons'
import { useSelector } from 'react-redux'
import { RoutePath } from 'routes/types'
import './Footer.scss'
import { mainInfoSelector } from 'redux/main/mainSelectors'
const footerItems = [
  {
    id: 0,
    title: 'Про нас',
    path: RoutePath.ABOUT_PAGE,
  },
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
const Footer = () => {
  const main = useSelector(mainInfoSelector)
  return (
    <>
      <article className='footer__wrapper'>
        <div className='container footer__wrapper__inner'>
          {' '}
          <article className='footer--logo'>
            <Logo />
          </article>
          <article className='footer--links'>
            {footerItems.map(item => (
              <NavLink to={item.path} className='footer--link' key={item.id} end>
                {item.title}
              </NavLink>
            ))}
          </article>
          <article className='footer--contacts'>
            <div className='footer--contacts__block'>
              <Phone />
              <div>
                <a href={`tel:${main.phone}`} type='tel'>
                  {main.phone}
                </a>
              </div>
            </div>
            <div className='footer--contacts__block'>
              <EmailOutlined />
              <div>
                <a href={`mailto:${main.support_email}`} type='email'>
                  {main.support_email}
                </a>
              </div>
            </div>
          </article>
        </div>
      </article>
      <div className='separator'></div>
      <article className='footer--policy'>
        <div className='container footer--policy__inner'>
          <div>2022 Всі права захищені. Політика конфіденційності</div>
          <div className='logo__wrap'>
            <MastercardLogo />
            <VisaLogo />
          </div>
        </div>
      </article>
    </>
  )
}

export default Footer
