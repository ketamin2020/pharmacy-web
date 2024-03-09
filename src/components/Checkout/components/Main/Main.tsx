import React, { useState, useEffect, ChangeEvent, useRef } from 'react'
import styled from '@emotion/styled'
import { NavLink, useNavigate } from 'react-router-dom'
import { ArrowLeft } from '@material-ui/icons'
import { SummaryBlock } from './components/SummaryBlock'
import { DeliveryBlock } from './components/DeliveryBlock'
import { ContactInfoBlock } from './components/ContactInfoBlock'
import { PaymentBlock } from './components/PaymentBlock'
import { BusketInfo } from './components/BusketInfo'
import { useSelector } from 'react-redux'
import { userSelector } from 'redux/user/userSelectors'
import { IPayment } from '../types'
import { basketIdSelector, basketSelector, basketlistSelector } from 'redux/basket/basketSelectors'
import { DeliveryTypeNum, PaymentTypeNum } from '../types'
import BusketModal from 'components/Modals/BusketModal/BusketModal'
import { toggleBusketModal } from 'redux/ui/modals/modalsActions'
import { useDispatch } from 'react-redux'
import notification from 'common/Notification/Notification'
import { createNewOrder } from 'api/ordered'
import { fetchBasketListByUser } from 'redux/basket/basketOperation'
import { fetchWishListByUser } from 'redux/wish/wishOperation'
import { fetchWishList } from 'redux/wish/wishOperation'
import { fetchBasketList } from 'redux/basket/basketOperation'
import { RoutePath } from 'routes/types'

const defaultCity = {
  AddressDeliveryAllowed: true,
  Area: 'Київська',
  DeliveryCity: '8d5a980d-391c-11dd-90d9-001a92567626',
  MainDescription: 'Київ',
  ParentRegionCode: 'обл.',
  ParentRegionTypes: 'область',
  Present: 'м. Київ, Київська обл.',
  Ref: 'e718a680-4b33-11e4-ab6d-005056801329',
  Region: '',
  RegionTypes: '',
  RegionTypesCode: '',
  SettlementTypeCode: 'м.',
  StreetsAvailability: true,
  Warehouses: 6399,
}

const initData: IPayment = {
  basket_id: '',
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
      id: '000000',
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
  warehouse: null,
  discount: {
    usedBonus: 0,
    warehouseId: 0,
  },
  payment: {
    type: PaymentTypeNum.CARD,
    name: '',
    price: {
      description: '',
      totalToPay: 0,
    },
  },
}
export const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(userSelector)
  const bascketID = useSelector(basketIdSelector)
  const products = useSelector(basketlistSelector)
  const busket = useSelector(basketSelector)
  const [state, setState] = useState<IPayment>(initData)
  const [liqpayBtn, setLiqPayBtn] = useState('')
  const [city, setCity] = useState(defaultCity)

  useEffect(() => {
    setState(prev => ({
      ...prev,
      basket_id: bascketID,
      user_id: user?.id,
      status: 1,
      total: busket?.totalPrice,
      products,
      client: {
        ...prev.client,
        first_name: user.first_name,
        last_name: user.last_name,
        middle_name: user.middle_name,
        phone: user.phone,
        user_id: user?.id,
      },
      delivery: {
        ...prev.delivery,
        recipient: {
          ...prev.delivery.recipient,
          first_name: user.first_name,
          last_name: user.last_name,
          middle_name: user.middle_name,
          phone: user.phone,
          email: user.email,
          user_id: user?.id,
        },
      },
    }))
  }, [user, bascketID, busket, products])

  const handleChangeDeliveryType = (type: number, title: string) => {
    setState(prev => ({
      ...prev,
      warehouse: prev.deliveryType.type !== type ? null : prev.warehouse,
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
  const handleChangePaymentType = (type: number, title: string) => {
    setState(prev => ({
      ...prev,
      payment: {
        ...prev.payment,
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

  const handleChangeWerehouseCity = city => {
    setCity(city)
    handleChangeCity(city?.Present)
  }

  const handleChangeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setState(prev => ({
      ...prev,
      client: {
        ...prev.client,
        [name]: value,
      },
      delivery: {
        ...prev.delivery,
        recipient: {
          ...prev.delivery.recipient,
          [name]: value,
        },
      },
    }))
  }

  const handleOpenBusketModal = () => {
    return dispatch(toggleBusketModal(true))
  }

  const handleSubmit = async () => {
    try {
      const { data: html, order } = await createNewOrder(state)
      notification('success', 'Успішно')
      await dispatch(fetchBasketListByUser())
      await dispatch(fetchBasketList())

      if (state.payment.type === PaymentTypeNum.IN_SHOP) {
        return navigate(`/checkout/success/${order.id}`)
      }

      setLiqPayBtn(html)
    } catch (error) {
      console.error(error)
    }
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
      <BusketInfo handleOpenBusketModal={handleOpenBusketModal} />
      <BlockWrapper>
        <MainBlock>
          <TabBlock>
            <TabTitle>1.Вибір способу доставки</TabTitle>
            <DeliveryBlock
              handleChangeWerehouse={handleChangeWerehouse}
              handleChangeDeliveryType={handleChangeDeliveryType}
              handleChangeAddress={handleChangeAddress}
              handleChangeCity={handleChangeCity}
              handleChangeWerehouseCity={handleChangeWerehouseCity}
              state={state}
              city={city}
            />
          </TabBlock>
          <TabBlock>
            <TabTitle>2.Контакта інформація</TabTitle>
            <ContactInfoBlock onChange={handleChangeInfo} state={state} />
          </TabBlock>
          <TabBlock>
            <TabTitle>3.Вибір способу оплати</TabTitle>
            <PaymentBlock handleChangePaymentType={handleChangePaymentType} state={state} />
          </TabBlock>
        </MainBlock>
        <RightBlock>
          <SummaryBlock html={liqpayBtn} type={state.deliveryType?.type} handleSubmit={handleSubmit} />
        </RightBlock>
      </BlockWrapper>
      <BusketModal />
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

const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const MainBlock = styled.div`
  width: 60%;
`
const RightBlock = styled.div`
  width: 30%;
`

const TabBlock = styled.div`
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  background: #fff;
`
const TabTitle = styled.h4``
const TabContent = styled.div``
