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
export const Warranty = () => {
  return (
    <Wrapper>
      <Typography>
        Як електронна медична інформаційна система ми бачимо своїм завданням організацію вибору та доставки якісної
        продукції аптечного асортименту клієнту. Тому ми співпрацюємо з надійними аптеками-партнерами, яким товари
        медичного призначення постачають лише великі та перевірені дистрибютори в Україні.
      </Typography>
      <Typography>
        У свою чергу наші аптеки-партнери здійснюють перевірку всіх товарів, що надходять, через систему трирівневого
        контролю:
      </Typography>
      <List>
        <ListItem>
          кожен етап реалізації лікарських засобів супроводжується чітким контролем температурного режиму та вологості
          (перша перевірка відбувається при надходженні продукції на склад, друга – при виході зі складу в аптеку, третя
          – при прийомі товару в аптеці);
        </ListItem>
        <ListItem>
          в аптеках відбувається відстеження продукції з терміном придатності, що закінчується, товар з таким терміном
          вилучається заздалегідь з реалізації;
        </ListItem>
        <ListItem>
          при надходженні продукції в аптеки-партнери уповноважена особа проводить вхідний контроль, перевіряє лікарські
          засоби на відсутність у Реєстрі документів якості лікарських засобів, обіг яких заборонено в Україні, а також
          проводить візуальний контроль за такими показниками, як «Маркування», «Упаковка», «Термін придатності».
        </ListItem>
      </List>
      <Typography>
        До того ж у кожному аптечному закладі, з яким ми співпрацюємо, покупець може попросити надати сертифікати якості
        на продукцію та інформацію про виробника чи дистрибютора — і ці документи будуть надані.
      </Typography>
    </Wrapper>
  )
}
