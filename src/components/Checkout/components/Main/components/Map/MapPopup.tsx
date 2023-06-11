import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { Pharmacy } from '../ChooseAddressModal'
import { Phone, AccessTime } from '@material-ui/icons'
import Button from 'common/Button/Button'
import { Popup } from 'react-leaflet'
import moment from 'moment'

const PopapWrapper = styled.div``

const Title = styled.p`
  font-weight: 600;
`
const Row = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`

export const MapPopap = ({ item, handleChooseWerehouse }: Pharmacy) => {
  return (
    <Popup keepInView>
      <PopapWrapper>
        <Title>{item?.Description}</Title>
        <Row>
          <span>
            <Phone />
          </span>
          <span>{item?.Phone}</span>
        </Row>
        <Row>
          <span>
            <AccessTime />
          </span>
          <span>{item?.Delivery?.[moment().format('dddd')]}</span>
        </Row>
        <Button onClick={() => handleChooseWerehouse(item)} style={{ marginLeft: 'auto' }} color='green'>
          <span>Вибрати</span>
        </Button>
      </PopapWrapper>
    </Popup>
  )
}
