import React, { useState } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { CheckCircle } from '@material-ui/icons'
import { priceToView } from 'utils/priceToView'
import Button from 'common/Button/Button'
import { Logo } from 'images/icons/icons'
import { mainInfoSelector } from 'redux/main/mainSelectors'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RoutePath } from 'routes/types'
import { ListItem } from '@mui/material'

export const PriceBlock = ({ product }) => {
  const [value, setValue] = useState(0)

  const company = useSelector(mainInfoSelector)
  const maker = product?.property?.main?.items?.maker
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Wrapper>
      <Maker src={maker?.value?.logo?.url} name={maker?.value?.full_name} />
      <ActualPrice time={product?.price?.updatedAt} />
      <Status />
      <PriceRow>
        <p className='price_value'>{priceToView(product?.price?.current)}</p>
        <Button shape='oval' color='green'>
          <p>У кошик</p>
        </Button>
      </PriceRow>
      <Saller name={company.name} />
      <PaymentSection value={value} handleChange={handleChange} />
    </Wrapper>
  )
}

function Maker({ src, name }) {
  return (
    <MakerWrapper>
      <img src={src} />
      <p>Виробник:</p>
      <p>
        <strong>{name}</strong>
      </p>
    </MakerWrapper>
  )
}
function Saller({ name }) {
  return (
    <SallerWrapper>
      <p>
        Продавець: <span className='saller_name'>{name}</span>
      </p>
      <Logo />
    </SallerWrapper>
  )
}
function ActualPrice({ time }) {
  return (
    <ActualWrapper>
      <p>
        {`Ціна та наявність актуальні на ${moment(time).format('DD.MM.YYYY HH:mm')} і діють тільки для покупки онлайн`}
      </p>
    </ActualWrapper>
  )
}
function Status() {
  return (
    <StatusWrapper>
      <span>
        <CheckCircle />
      </span>
      <span>в наявності</span>
    </StatusWrapper>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

function PaymentSection({ value, handleChange }) {
  return (
    <>
      <Tabs
        style={{ color: '#00a990', borderRadius: '8px', border: '1px solid #d3d8d8' }}
        orientation='horizontal'
        value={value}
        onChange={handleChange}
        aria-label='icon label tabs example'
      >
        <Tab key={0} {...a11yProps(0)} label='Оплата' />
        <Tab key={1} {...a11yProps(1)} label='Гарантія' />
        <Tab key={2} {...a11yProps(2)} label='Умови повернення' />
      </Tabs>
      <TabPanel
        style={{ minHeight: '150px', borderRadius: '8px', border: '1px solid #d3d8d8' }}
        index={0}
        value={value}
      >
        <ListItem> - Готівкою при отриманні</ListItem>
        <ListItem> - Oплата картою на сайті</ListItem>
        <ListItem> - Hакладений платіж</ListItem>
      </TabPanel>
      <TabPanel
        style={{ minHeight: '150px', borderRadius: '8px', border: '1px solid #d3d8d8' }}
        index={1}
        value={value}
      >
        <p>
          Весь товар сертифікований. <NavLink to={RoutePath.WARRANTY}>Детальніше</NavLink>
        </p>
        <p></p>
        <p>
          Продавець гарантує упаковку замовленого товару, яка забезпечує його цілісність і збереження належної якості і
          товарного вигляду
        </p>
      </TabPanel>
      <TabPanel
        style={{ minHeight: '150px', borderRadius: '8px', border: '1px solid #d3d8d8' }}
        index={2}
        value={value}
      >
        <p>
          Товары надлежащего качества обмену и возврату не підлягають.{' '}
          <NavLink to={RoutePath.WARRANTY}>Детальніше</NavLink>
        </p>
      </TabPanel>
    </>
  )
}
const MakerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(136, 143, 154, 0.16);
  border-radius: 8px;
  padding: 7px 16px;
  overflow-x: auto;
  margin-bottom: 20px;
  & img {
    width: 50px;
    height: 50px;
  }
`
const SallerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid rgba(136, 143, 154, 0.16);
  border-radius: 8px;
  padding: 7px 16px;
  overflow-x: auto;
  margin-bottom: 20px;
  & .saller_name {
    font-weight: 600;
  }
  & img {
    width: 50px;
    height: 50px;
  }
`
const ActualWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(112, 176, 247, 0.121569);
  color: #212121;
  background-color: rgba(141, 192, 249, 0.121569);
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
`
const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  background-color: rgba(0, 160, 70, 0.08);
  font-size: 14px;
  color: #00a046;
  text-transform: uppercase;
  padding: 6px 10px 6px 6px;
  border-radius: 20px;
`

const PriceRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .price_value {
    font-size: 36px;
  }
`

const Wrapper = styled.div`
  width: 100%;
`
