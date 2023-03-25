import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { ListItem, List } from '@material-ui/core'

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
    top: 13px;
    left: -20px;
  }
`

export const About = () => {
  return (
    <Wrapper>
      <Typography>
        Електронна медична інформаційна система {window.location.host} співпрацює з кількома сотнями
        аптеками-партнерами, завдяки яким клієнти отримують можливість бронювання ліків з полиці найближчої аптеки.
      </Typography>
      <Typography>
        Замовляючи ліки та товари медичного призначення через електронну медичну інформаційну систему{' '}
        {window.location.host}, ви:
      </Typography>
      <List>
        <ListItem>знаходите на сайті лікарський засіб, якого немає у багатьох аптеках;</ListItem>
        <ListItem>в один клік бронюєте товар;</ListItem>
        <ListItem>забираєте його в аптеці, яка до вас найближча;</ListItem>
        <ListItem>можете отримати кур&apos;єрську доставку на адресу.</ListItem>
      </List>

      <Typography>
        Крім того, сайт {window.location.host} — це портал освітнього формату з інформацією про медицину, лікарські
        препарати, а також про здоров&apos;я та добробут як такі. Ми, в {window.location.host}, надаємо користувачам
        можливість ознайомитися з великими медичними даними з питань здоров&apos;я та застосування лікарських засобів.
        Для нас дуже важливо бути джерелом надійної, достовірної та науково доведеної інформації, яка була б корисна
        людям і допомагала б викорінити плутанину та дезінформацію в медичній сфері.
      </Typography>
    </Wrapper>
  )
}
