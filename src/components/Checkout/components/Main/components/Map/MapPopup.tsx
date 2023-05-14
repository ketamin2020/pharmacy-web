import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { Pharmacy } from '../ChooseAddressModal'
import { Phone } from '@material-ui/icons'
import Button from 'common/Button/Button'
import { Popup } from 'react-leaflet'
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

export const MapPopap = ({ item }: Pharmacy) => {
  return (
    <Popup keepInView>
      <PopapWrapper>
        <Title>{item.name}</Title>
        <Row>
          <span>
            <Phone />
          </span>
          <span>{item.phone}</span>
        </Row>
        <Button style={{ marginLeft: 'auto' }} color='green'>
          <span>Вибрати</span>
        </Button>
      </PopapWrapper>
    </Popup>
  )
}
