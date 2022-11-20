import React from 'react'
import { Logo } from 'common/icon/icons'
import { Phone as PhoneNumber, Email } from 'public'
import { Phone, EmailOutlined } from '@mui/icons-material'
import { MastercardLogo, VisaLogo } from 'common/icon/icons'
import './Footer.scss'
const footerItems = [
  { id: 0, title: 'Про нас' },
  { id: 1, title: 'Гарантії' },
  { id: 2, title: 'Доставка та оплата' },
  { id: 3, title: 'Повернення' },
  { id: 4, title: 'Контакти' },
]
const Footer = () => {
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
              <span className='footer--link' key={item.id}>
                {item.title}
              </span>
            ))}
          </article>
          <article className='footer--contacts'>
            <div className='footer--contacts__block'>
              <Phone />
              <div>
                <a href={`tel:${PhoneNumber.PHONE_1}`} type='tel'>
                  {PhoneNumber.PHONE_1_PRETY}
                </a>
              </div>
            </div>
            <div className='footer--contacts__block'>
              <EmailOutlined />
              <div>
                <a href={`mailto:${Email.EMAIL_1}`} type='email'>
                  {Email.EMAIL_1}
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
