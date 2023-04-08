import React from 'react'
import styled from '@emotion/styled'
import { ImageBlock } from './components/ImageBlock'
import { PriceBlock } from './components/PriceBlock'
import { MainProperties } from './components/MainProperties'
const PropertyBlock = ({ product }) => {
  return (
    <Wrapper>
      <Row>
        <ImageBlock images={product?.images?.items} />
        <PriceBlock product={product} />
      </Row>
      <Row>
        <MainProperties product={product} />
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default PropertyBlock
