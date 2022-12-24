import React from 'react'
import styled from '@emotion/styled'
import Map from 'common/Map/Map'
const Wrapper = styled.div`
  & * {
    font-family: var(--primaryFont);
  }
  & li::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--greenColor);
    position: absolute;
    top: 12px;
    left: -10px;
  }
`
export const Contacts = () => {
  return (
    <Wrapper>
      <Map />
    </Wrapper>
  )
}
