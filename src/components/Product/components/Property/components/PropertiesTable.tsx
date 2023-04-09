import React from 'react'

import styled from '@emotion/styled'
export const PropertiesTable = ({ product }) => {
  const items = product?.property?.main?.items

  return (
    <Wrapper>
      <h3>{`Властивості препарату: ${product?.name}`}</h3>

      <TableWrapper>
        <Row>
          <Cell>{items?.active_ingredient?.title}</Cell>
          <Cell>{items?.active_ingredient?.value?.name_ua}</Cell>
        </Row>
        <Row>
          <Cell>{items?.manufacturing_country?.title}</Cell>
          <Cell>{items?.manufacturing_country?.value}</Cell>
        </Row>
        <Row>
          <Cell>{items?.maker?.title}</Cell>
          <Cell>{items?.maker?.value?.full_name}</Cell>
        </Row>
        <Row>
          <Cell>{items?.imported?.title}</Cell>
          <Cell>{items?.imported?.value}</Cell>
        </Row>
        <Row>
          <Cell>{items?.marked_name?.title}</Cell>
          <Cell>{items?.marked_name?.value?.name}</Cell>
        </Row>
        <Row>
          <Cell>{items?.dosage?.title}</Cell>
          <Cell>{items?.dosage?.value?.name}</Cell>
        </Row>
        <Row>
          <Cell>{items?.quantity?.title}</Cell>
          <Cell>{items?.quantity?.value?.name}</Cell>
        </Row>
        <Row>
          <Cell>{items?.administration_route?.title}</Cell>
          <Cell>{items?.administration_route?.value?.name}</Cell>
        </Row>
        <Row>
          <Cell>{items?.production_form?.title}</Cell>
          <Cell>{items?.production_form?.value?.name}</Cell>
        </Row>
        <Row>
          <Cell>Код Моріон</Cell>
          <Cell>{product?.morion}</Cell>
        </Row>
        <Row>
          <Cell>{items?.expiration?.title}</Cell>
          <Cell>{items?.expiration?.value}</Cell>
        </Row>
        <Row>
          <Cell>{items?.prescription?.title}</Cell>
          <Cell>{items?.prescription?.value}</Cell>
        </Row>
        <Row>
          <Cell>{items?.storage_temperature?.title}</Cell>
          <Cell>{items?.storage_temperature?.value?.name}</Cell>
        </Row>
      </TableWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background-color: rgba(0, 169, 80, 0.05);
  border-radius: 20px;
  margin-top: 20px;
`
const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  padding: 10px;
  border-radius: 10px;
  &:nth-child(even) {
    background-color: rgba(0, 169, 80, 0.05);
  }
`
const Cell = styled.div``
