import React, { ChangeEvent, useState } from 'react'
import styled from '@emotion/styled'
import { LocationCity } from '@material-ui/icons'
import { ChangeAddressModal } from './ChangeAddressModal'
import { ChooseAddressModal } from './ChooseAddressModal'
import Button from 'common/Button/Button'
import { Store } from '@material-ui/icons'
import { TextField } from '@mui/material'
import { KeyboardArrowRight } from '@material-ui/icons'
import { CheckCircle, LocalShipping } from '@material-ui/icons'
import { IPayment, DeliveryTypeNum } from '../../types'
import { NewPostIcon } from 'images/icons/icons'
import { Phone } from '@material-ui/icons'

const mock = [
  {
    id: '1ec09d88-e1c2-11e3-8c4a-0050568002cf11',
    latitude: 50.354786,
    longitude: 30.542884,
    loyalty: true,
    maxDeclaredCost: 0,
    name: 'Отделение №1 (до 30 кг на одно место): ул. Пироговский путь, 135',
    number: 1,
    phone: '380800500609',
    selfService: false,
    workTime: '',
    workTimeArray: [],
  },
  {
    id: '7b422fbe-e1b8-11e3-8c4a-0050568002cf22',
    latitude: 50.5260795,
    longitude: 30.4826465,
    loyalty: true,
    maxDeclaredCost: 0,
    name: 'Отделение №2: ул. Богатырская, 11',
    number: 2,
    phone: '380800500609',
    selfService: false,
    workTime: '',
    workTimeArray: [],
  },
  {
    id: '7b422fc3-e1b8-11e3-8c4a-0050568002cf33',
    latitude: 50.442423,
    longitude: 30.651501,
    loyalty: true,
    maxDeclaredCost: 0,
    name: 'Отделение №3  (до 30 кг на одне місце): ул. Калачевская, 13 (Старая Дарница)',
    number: 3,
    phone: '380800500609',
    selfService: false,
    workTime: '',
    workTimeArray: [],
  },
]

const mockPharm = [
  {
    id: '1ec09d88-e1c2-11e3-8c4a-0050568002cf',
    latitude: 50.41365970726126,
    longitude: 30.543992123578576,
    loyalty: true,
    maxDeclaredCost: 0,
    name: 'Аптека Артмед, вулиця Михайла Драгомирова, 2 а, Київ, 02000',
    number: 1,
    phone: '380800500609',
    selfService: false,
    workTime: '',
    workTimeArray: [],
  },
]

interface IProps {
  state: IPayment
  handleChangeDeliveryType: (type: number, title: string) => void
  handleChangeWerehouse: (werehouse: IPayment['warehouse']) => void
  handleChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeCity: (city: IPayment['delivery']['city']['name']) => void
}

export const DeliveryBlock = ({
  state,
  handleChangeDeliveryType,
  handleChangeWerehouse,
  handleChangeAddress,
  handleChangeCity,
}: IProps) => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickOpenModal = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleCloseModal = () => {
    setVisible(false)
  }

  return (
    <>
      {' '}
      <Wrapper>
        <Block>
          <AddressBlock>
            <span>Ваше місто</span>
            <p className='adress-wrapper'>
              <LocationCity /> <p>{state?.delivery?.city?.name}</p>
            </p>
          </AddressBlock>
          <Button
            disabled={DeliveryTypeNum.NOVA_POSHTA !== state.deliveryType.type}
            shape='square'
            onClick={handleClickOpen}
            color='green'
          >
            <span>Змінити</span>
          </Button>
        </Block>
        <Block style={{ justifyContent: 'start' }}>
          <Tab
            onClick={() => handleChangeDeliveryType(DeliveryTypeNum.PICKUP, 'Забрати з аптеки')}
            active={DeliveryTypeNum.PICKUP === state.deliveryType?.type}
          >
            <div className='check-icon'>
              <CheckCircle
                style={{
                  fill: '#00a990',
                }}
              />
            </div>

            <div className='icon-block'>
              <Store
                style={{
                  fill: '#00a990',
                }}
                fontSize='large'
              />
            </div>
            <p className='price'>Забрати з аптеки</p>
            <p className='green'>Безплатно</p>
          </Tab>
          <Tab
            onClick={() => handleChangeDeliveryType(DeliveryTypeNum.DELIVERY, 'Доставка')}
            active={DeliveryTypeNum.DELIVERY === state.deliveryType?.type}
          >
            <div className='check-icon'>
              <CheckCircle
                style={{
                  fill: '#00a990',
                }}
              />
            </div>

            <div className='icon-block'>
              <LocalShipping
                fontSize='large'
                style={{
                  fill: '#00a990',
                }}
              />
            </div>

            <p>{`Доставка`}</p>
            <p className='green'>70 грн</p>
          </Tab>
          <Tab
            onClick={() => handleChangeDeliveryType(DeliveryTypeNum.NOVA_POSHTA, 'Нова Пошта')}
            active={DeliveryTypeNum.NOVA_POSHTA === state.deliveryType?.type}
          >
            <div className='check-icon'>
              <CheckCircle
                style={{
                  fill: '#00a990',
                }}
              />
            </div>

            <div className='icon-block'>
              <NewPostIcon width={30} height={30} />
            </div>

            <p>{`"Нова пошта"`}</p>
            <p className='green'>70 грн</p>
          </Tab>
        </Block>
      </Wrapper>
      <Block>
        {DeliveryTypeNum.PICKUP === state.deliveryType.type && (
          <WerehouseItem handleClickOpenModal={handleClickOpenModal} item={state.warehouse} />
        )}
        {DeliveryTypeNum.DELIVERY === state.deliveryType.type && (
          <DeliveryAddress onChange={handleChangeAddress} state={state} />
        )}
        {DeliveryTypeNum.NOVA_POSHTA === state.deliveryType.type && (
          <ChoosenButton onClick={handleClickOpenModal}>
            <p className='button-link'>Виберіть відділення</p>
            <p>
              <KeyboardArrowRight />
            </p>
          </ChoosenButton>
        )}
      </Block>
      <ChangeAddressModal handleSave={handleChangeCity} open={open} handleClose={handleClose} />
      <ChooseAddressModal
        title='Виберіть відділення'
        handleSave={handleChangeWerehouse}
        open={visible}
        handleClose={handleCloseModal}
        items={mock}
      />
    </>
  )
}
const Wrapper = styled.div``
const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`
const Block = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
const Tab = styled.div<{ active: boolean }>`
  width: 150px;
  height: 150px;
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid ${props => (props.active ? '#00a990' : 'grey')};
  padding: 10px;
  position: relative;
  & .green {
    color: var(--greenColor);
    margin: 0;
  }

  & .icon-block {
    min-height: 50px;
  }
  & p {
    text-align: center;
  }
  & .price {
    min-height: 38px;
    margin-bottom: 4px;
  }
  & .check-icon {
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    top: 0px;
    right: 0px;
  }
`
const AddressBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & .adress-wrapper {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 20px;
  }
  & span {
    color: rgba(57, 69, 86, 0.6);
    font-size: 12px;
  }
`
const ChoosenButton = styled.div`
  font-size: 16px;
  padding: 15px 18px;
  border-radius: 16px;
  border: 1px solid #333266;
  background: rgba(51, 50, 102, 0.04);
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & .button-link {
    color: var(--greenColor);
    font-weight: 600;
  }
`
const ItemWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--greenColor);
  border-radius: 12px;
  cursor: pointer;
  padding: 10px;
  & .text-title {
    color: var(--greenColor);
    text-align: end;
  }
`
const ItemRow = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`

const InputRow = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`

function WerehouseItem({ item, handleClickOpenModal }: IPayment['warehouse']) {
  return (
    <ItemWrapper>
      <p className='text-title' onClick={handleClickOpenModal}>
        Змінити
      </p>
      {/* <ItemRow> */}
      {/* <span>
          <NewPostIcon width={20} />
        </span> */}
      <p>{item?.name}</p>
      <p>{item?.street}</p>
      {/* </ItemRow> */}
      <ItemRow>
        <span>
          <Phone />
        </span>
        <span>{item?.number}</span>
      </ItemRow>
    </ItemWrapper>
  )
}

function DeliveryAddress({ state, onChange }) {
  return (
    <InputWrapper>
      {' '}
      <InputRow>
        <TextField
          value={state?.delivery?.recipient?.street}
          defaultValue={state?.delivery?.recipient?.street}
          onChange={onChange}
          name='street'
          size='small'
          fullWidth
          label='Вулиця'
          autoFocus={true}
          style={{ minWidth: '300px' }}
        />
      </InputRow>
      <InputRow>
        <TextField
          value={state?.delivery?.recipient?.house_number}
          defaultValue={state?.delivery?.recipient?.house_number}
          onChange={onChange}
          name='house_number'
          size='small'
          label={`Дім`}
        />
      </InputRow>
      <InputRow>
        <TextField
          value={state?.delivery?.recipient?.flat_number}
          defaultValue={state?.delivery?.recipient?.flat_number}
          onChange={onChange}
          name='flat_number'
          size='small'
          label={`Квартира`}
        />
      </InputRow>
    </InputWrapper>
  )
}
