import React, { ChangeEvent, useState, useEffect } from 'react'
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
import { Phone, AccessTime } from '@material-ui/icons'
import { searchByWerehouse } from 'api/drugs'
import moment from 'moment'

const mockPharm = [
  {
    BicycleParking: '0',
    CanGetMoneyTransfer: '1',
    CategoryOfWarehouse: 'Branch',
    CityDescription: 'Київ',
    CityDescriptionRu: 'Київ',
    CityRef: '06f87976-4079-11de-b509-001d92f78698',
    Delivery: {
      Friday: '08:00-20:00',
      Monday: '08:00-20:00',
      Saturday: '08:00-20:00',
      Sunday: '08:00-20:00',
      Thursday: '08:00-20:00',
      Tuesday: '08:00-20:00',
      Wednesday: '08:00-20:00',
    },
    DenyToSelect: '0',
    Description: 'Аптека "АРТМЕД", вулиця Михайла Драгомирова, 2А, Київ, 02000 ',
    Direct: '',
    DistrictCode: 'Ск Чи',
    GeneratorEnabled: '1',
    InternationalShipping: '1',
    Latitude: 50.41365970726126,
    Longitude: 30.543992123578576,
    MaxDeclaredCost: '0',
    Number: '1',
    OnlyReceivingParcel: '0',
    POSTerminal: '1',
    PaymentAccess: '0',
    Phone: '380800500609',
    PlaceMaxWeightAllowed: '1000',
    PostFinance: '1',
    PostMachineType: '',
    PostalCodeUA: '02000',
    ReceivingLimitationsOnDimensions: { Width: 170, Height: 170, Length: 300 },
    Ref: '169227e3-e1c2-11e3-8c4a-0050568002cf',
    RegionCity: 'Київ',
    SelfServiceWorkplacesCount: '0',
    SendingLimitationsOnDimensions: { Width: 170, Height: 170, Length: 300 },
    SettlementAreaDescription: 'Київська область',
    SettlementDescription: 'Київ',
    SettlementRef: 'e71ff3e7-4b33-11e4-ab6d-005056801329',
    SettlementRegionsDescription: 'Київський р-н',
    SettlementTypeDescription: 'місто',
    SettlementTypeDescriptionRu: 'город',
    ShortAddress: 'Київ, вулиця Михайла Драгомирова, 2А',
    ShortAddressRu: 'Київ, вулиця Михайла Драгомирова, 2А',
    SiteKey: '245',
    TotalMaxWeightAllowed: '0',
    TypeOfWarehouse: '9a68df70-0267-42a8-bb5c-37f427e36ee4',
    WarehouseForAgent: '1',
    WarehouseIndex: '996/1',
    WarehouseStatus: 'Working',
    WarehouseStatusDate: '2022-03-02 00:00:00',
    WorkInMobileAwis: '0',
  },
]

interface IProps {
  state: IPayment
  handleChangeDeliveryType: (type: number, title: string) => void
  handleChangeWerehouse: (werehouse: IPayment['warehouse']) => void
  handleChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeCity: (city: IPayment['delivery']['city']['name']) => void
  handleChangeWerehouseCity: (city: any) => void
  city: object
}

export const DeliveryBlock = ({
  state,
  handleChangeDeliveryType,
  handleChangeWerehouse,
  handleChangeAddress,
  handleChangeCity,
  handleChangeWerehouseCity,
  city,
}: IProps) => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [werehouses, setWerehouses] = useState([])

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

  useEffect(() => {
    const fetchWerehouses = async () => {
      try {
        const { count, werehouses } = await searchByWerehouse({
          page: 1,
          limit: 200,
          search: city?.MainDescription,
          city_ref: city?.DeliveryCity,
        })
        setWerehouses(werehouses)
      } catch (error) {
        console.error(error)
      }
    }
    if (visible && DeliveryTypeNum.NOVA_POSHTA === state.deliveryType.type) fetchWerehouses()
    if (visible && DeliveryTypeNum.NOVA_POSHTA !== state.deliveryType.type) setWerehouses(mockPharm)
    if (!visible) setWerehouses([])
  }, [visible, state.deliveryType.type])
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
              <CheckCircle style={{ fill: '#00a990' }} />
            </div>

            <div className='icon-block'>
              <Store fontSize='large' />
            </div>
            <p className='price'>Забрати з аптеки</p>
            <p className='green'>Безплатно</p>
          </Tab>
          <Tab
            onClick={() => handleChangeDeliveryType(DeliveryTypeNum.DELIVERY, 'Доставка')}
            active={DeliveryTypeNum.DELIVERY === state.deliveryType?.type}
          >
            <div className='check-icon'>
              <CheckCircle style={{ fill: '#00a990' }} />
            </div>

            <div className='icon-block'>
              <LocalShipping fontSize='large' />
            </div>

            <p>{`Доставка`}</p>
            <p className='green'>70 грн</p>
          </Tab>
          <Tab
            onClick={() => handleChangeDeliveryType(DeliveryTypeNum.NOVA_POSHTA, 'Нова Пошта')}
            active={DeliveryTypeNum.NOVA_POSHTA === state.deliveryType?.type}
          >
            <div className='check-icon'>
              <CheckCircle style={{ fill: '#00a990' }} />
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
        {DeliveryTypeNum.PICKUP === state.deliveryType.type && !state?.warehouse ? (
          <ChoosenButton onClick={handleClickOpenModal}>
            <p className='button-link'>Виберіть відділення</p>
            <p>
              <KeyboardArrowRight />
            </p>
          </ChoosenButton>
        ) : (
          DeliveryTypeNum.PICKUP === state.deliveryType.type && (
            <WerehouseItem handleClickOpenModal={handleClickOpenModal} item={state.warehouse} />
          )
        )}
        {DeliveryTypeNum.DELIVERY === state.deliveryType.type && (
          <DeliveryAddress onChange={handleChangeAddress} state={state} />
        )}
        {DeliveryTypeNum.NOVA_POSHTA === state.deliveryType.type && !state?.warehouse ? (
          <ChoosenButton onClick={handleClickOpenModal}>
            <p className='button-link'>Виберіть відділення</p>
            <p>
              <KeyboardArrowRight />
            </p>
          </ChoosenButton>
        ) : (
          DeliveryTypeNum.NOVA_POSHTA === state.deliveryType.type && (
            <WerehouseItem handleClickOpenModal={handleClickOpenModal} item={state.warehouse} />
          )
        )}
      </Block>
      <ChangeAddressModal
        onSelect={handleChangeWerehouseCity}
        handleSave={handleChangeCity}
        open={open}
        handleClose={handleClose}
        city={city}
      />
      <ChooseAddressModal
        title='Виберіть відділення'
        handleSave={handleChangeWerehouse}
        open={visible}
        handleClose={handleCloseModal}
        items={werehouses}
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
    & svg {
      fill: ${props => (props.active ? '#00a990' : 'grey')};
    }
    & g {
      fill: ${props => (props.active ? '#00a990' : 'grey')};
    }
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
      <p>{item?.Description}</p>
      {/* <p>{item?.street}</p> */}
      {/* </ItemRow> */}
      <ItemRow>
        <span>
          <Phone />
        </span>
        <span>{item?.Phone}</span>
      </ItemRow>
      <ItemRow>
        <span>
          <AccessTime />
        </span>
        <span>{item?.Delivery?.[moment().format('dddd')]}</span>
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
