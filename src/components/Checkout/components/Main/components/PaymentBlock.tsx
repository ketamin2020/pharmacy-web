import React from 'react'
import styled from '@emotion/styled'
import { CheckCircle, CreditCard, Money } from '@material-ui/icons'
import { IPayment } from '../../types'
import { PaymentTypeNum } from '../../types'
interface IProps {
  state: IPayment
  handleChangePaymentType: (type: number, title: string) => void
}

export const PaymentBlock = ({ state, handleChangePaymentType }: IProps) => {
  return (
    <Wrapper>
      <Block>
        <Tab
          onClick={() => handleChangePaymentType(PaymentTypeNum.CARD, 'Оплата картою')}
          active={PaymentTypeNum.CARD === state?.payment?.type}
        >
          <div className='check-icon'>
            <CheckCircle
              style={{
                fill: '#00a990',
              }}
            />
          </div>
          <div className='icon-block'>
            <CreditCard
              style={{
                fill: '#00a990',
              }}
              fontSize='large'
            />
          </div>
          <p className='price'>Оплата картою на сайті</p>
        </Tab>
        <Tab
          onClick={() => handleChangePaymentType(PaymentTypeNum.IN_SHOP, 'Оплата готівкою')}
          active={PaymentTypeNum.IN_SHOP === state?.payment?.type}
        >
          <div className='check-icon'>
            <CheckCircle
              style={{
                fill: '#00a990',
              }}
            />
          </div>
          <div className='icon-block'>
            <Money
              style={{
                fill: '#00a990',
              }}
              fontSize='large'
            />
          </div>
          <p className='price'>Оплата готівкою</p>
        </Tab>
      </Block>
    </Wrapper>
  )
}

const Wrapper = styled.div``

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

const Block = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`
