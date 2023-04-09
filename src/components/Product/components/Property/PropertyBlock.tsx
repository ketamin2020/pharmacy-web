import React from 'react'
import styled from '@emotion/styled'
import { ImageBlock } from './components/ImageBlock'
import { PriceBlock } from './components/PriceBlock'
import { InstructionBlock } from './components/InstructionBlock'
import { PropertiesTable } from './components/PropertiesTable'
import { MainProperties } from './components/MainProperties'
const PropertyBlock = ({ product }) => {
  return (
    <Wrapper>
      <Row>
        <ImageBlock images={product?.images} />
        <PriceBlock product={product} />
      </Row>

      <Row>
        <PropertiesTable product={product} />
        <MainProperties product={product} />
      </Row>
      <Row>
        <InstructionBlock product={product} />
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export default PropertyBlock
