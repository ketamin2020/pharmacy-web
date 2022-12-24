import React from 'react'
import styled from '@emotion/styled'
import { Avatar, Typography, makeStyles } from '@material-ui/core'

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
const UserList = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`

const UserItem = styled.div`
  width: 150px;
  text-align: center;
`

const users = [
  { name: 'Lorem Ipsum', position: 'Maneger' },
  { name: 'Lorem Ipsum', position: 'Maneger' },
  { name: 'Lorem Ipsum', position: 'Maneger' },
]
const useStyles = makeStyles(theme => ({
  avatar: {
    margin: '0.5rem auto',
    padding: '1rem',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}))
export const Team = () => {
  const classes = useStyles()
  return (
    <Wrapper>
      <Typography>
        Команда електронної медичної інформаційної системи apteka24.ua - це люди, закохані в свою справу. Ми зібралися
        разом, щоб переосмислити образ аптечних мереж, щоб викорінити недостовірність інформування в медицині і щоб
        зробити здоров&apos;я трендом, а не тим, про що намагаються не говорити.
      </Typography>
      <Typography>
        У нас працюють люди не просто з вищою освітою, але люди з масою талантів, цілеспрямовані, організовані,
        відповідальні, бажаючі щодня приносити успіх компанії. У нас різні спеціальності, але одне бачення. У нас є
        ідея. У нас є загальна мета. І у нас є прагнення робити свою справу краще, ніж добре.
      </Typography>
      <Typography>А тепер давайте знайомитися особисто:</Typography>
      <h3>Курівництво</h3>
      <UserList>
        {users.map(user => (
          <UserItem key={user.name}>
            <Avatar className={classes.avatar} src='https://i.ibb.co/rx5DFbs/avatar.png' alt='Juaneme8' />
            <p>{user.name}</p>
            <p>{user.position}</p>
          </UserItem>
        ))}
      </UserList>
    </Wrapper>
  )
}
