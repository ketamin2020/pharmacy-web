import React, { useState, useEffect, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { ArrowLeft } from '@material-ui/icons'
import { SummaryBlock } from './components/SummaryBlock'
import { DeliveryBlock } from './components/DeliveryBlock'
import { ContactInfoBlock } from './components/ContactInfoBlock'
import { PaymentBlock } from './components/PaymentBlock'
import { useSelector } from 'react-redux'
import { userSelector } from 'redux/user/userSelectors'
import { IPayment } from '../types'
import { basketIdSelector } from 'redux/basket/basketSelectors'
import { DeliveryTypeNum } from '../types'

const initData: IPayment = {
  basketId: '',
  callback: false,
  comment: '',
  client: {
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    phone: '',
    user_id: null,
  },
  deliveryType: {
    type: DeliveryTypeNum.PICKUP,
    title: '',
  },

  delivery: {
    city: {
      id: '',
      latitude: '',
      longitude: '',
      name: 'Київ',
    },
    recipient: {
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      phone: '',
      user_id: null,
      itself: true,
      street: '',
      house_number: '',
      flat_number: '',
    },
  },
  requiredRecipient: false,
  warehouse: {
    houseNumber: '',
    id: '928853',
    latitude: 50.41365970726126,
    longitude: 30.543992123578576,
    loyalty: false,
    name: 'Аптека Артмед',
    number: '+38(098)-53-69-386',
    postcode: '',
    selfService: true,
    street: 'вулиця Михайла Драгомирова, 2 а, Київ, 02000',
    typeSlug: 'artmed',
    workTime: '8:00 - 21:00',
    workTimeArray: [],
  },
  discount: {
    usedBonus: 0,
    warehouseId: 0,
  },
  payment: {
    name: '',
    price: {
      description: '',
      totalToPay: 0,
    },
  },
}
export const Main = () => {
  const user = useSelector(userSelector)
  const bascketID = useSelector(basketIdSelector)
  const [state, setState] = useState<IPayment>(initData)

  useEffect(() => {
    setState(prev => ({
      ...prev,
      basketId: bascketID,
      client: {
        ...prev.client,
        first_name: user.first_name,
        last_name: user.last_name,
        middle_name: user.middle_name,
        phone: user.phone,
        user_id: user.id,
      },
      delivery: {
        ...prev.delivery,
        recipient: {
          ...prev.delivery.recipient,
          first_name: user.first_name,
          last_name: user.last_name,
          middle_name: user.middle_name,
          phone: user.phone,
          user_id: user.id,
        },
      },
    }))
  }, [user, bascketID])

  const handleChangeDeliveryType = (type: number, title: string) => {
    setState(prev => ({
      ...prev,
      deliveryType: {
        type: type,
        title: title,
      },
    }))
    if (type !== DeliveryTypeNum.NOVA_POSHTA) {
      setState(prev => ({
        ...prev,
        delivery: {
          ...prev.delivery,
          city: {
            ...prev.delivery.city,
            name: 'Київ',
          },
        },
      }))
    }
  }
  const handleChangeWerehouse = (warehouse: IPayment['warehouse']) => {
    setState(prev => ({
      ...prev,
      warehouse,
    }))
  }

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setState(prev => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        recipient: {
          ...prev.delivery.recipient,
          [name]: value,
        },
      },
    }))
  }

  const handleChangeCity = (city: IPayment['delivery']['city']['name']) => {
    setState(prev => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        city: {
          ...prev.delivery.city,
          name: city,
        },
      },
    }))
  }
  return (
    <Wrapper>
      <Heading>
        <h2>Оформення заказу</h2>
        <NavLink to={'/'}>
          <BackBlock>
            <ArrowLeft />
            <span>Повернутися до покупок</span>
          </BackBlock>
        </NavLink>
      </Heading>
      <MainBlock>
        <TabBlock>
          <TabTitle>1.Вибір способу доставки</TabTitle>
          <DeliveryBlock
            handleChangeWerehouse={handleChangeWerehouse}
            handleChangeDeliveryType={handleChangeDeliveryType}
            handleChangeAddress={handleChangeAddress}
            handleChangeCity={handleChangeCity}
            state={state}
          />
        </TabBlock>
        <TabBlock>
          <TabTitle>2.Контакта інформація</TabTitle>
          <ContactInfoBlock state={state} />
        </TabBlock>
        <TabBlock>
          <TabTitle>3.Вибір способу оплати</TabTitle>
          <PaymentBlock />
        </TabBlock>
      </MainBlock>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1460px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const MainBlock = styled.div`
  width: 80%;
`

const TabBlock = styled.div`
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  background: #fff;
`
const TabTitle = styled.h4``
const TabContent = styled.div``
