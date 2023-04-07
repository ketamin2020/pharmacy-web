import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Rating from '@mui/material/Rating'
export const Heading = ({ name, code, children }) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <Row>
        <div className='review-block'>
          <Rating name='read-only' value={5} readOnly />
          <p className='review-link'>2 відгука</p>
        </div>
        <div>
          <span className='code'>Код товару:</span>
          {code}
        </div>
      </Row>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .MuiTabs-root {
    border: none;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  & .review-block {
    display: flex;
    align-items: center;
    gap: 10px;
    & .review-link {
      color: #1976d2;
      border-bottom: 1px dashed;
      cursor: pointer;
    }
  }
  & .code {
    color: grey;
  }
`
