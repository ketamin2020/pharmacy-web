import React from 'react'
import './About.scss'
import { Box, List, ListItemText } from '@mui/material'
import { DeliveryIcon, QualityIcon, RefundsIcon } from 'common/CommonIcons/CommonIcons'
const items = [
  {
    title: 'Доставка і оплата ',
    subtitle: 'Онлайн-Аптека номер 1 в Україні з безкоштовною доставкою.',
    icon: <DeliveryIcon />,
  },
  { title: 'Якість товару', subtitle: 'Ми офіційні представники 100% оригінальної продукції.', icon: <QualityIcon /> },
  {
    title: 'Повернення коштів ',
    subtitle: 'Ми повертаємо 100% суми яку ви заплатили. Термін до 14 днів.',
    icon: <RefundsIcon />,
  },
]
const About = () => {
  return (
    <Box className='about'>
      <List className='about--list'>
        {items.map(item => (
          <li key={item.title}>
            <div className='about--lixt__icon'>{item.icon}</div>
            <ListItemText className='about--lixt__text' primary={item.title} secondary={item.subtitle} />
          </li>
        ))}
      </List>
    </Box>
  )
}

export default About
