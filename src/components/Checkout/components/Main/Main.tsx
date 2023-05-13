import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { ArrowLeft } from '@material-ui/icons'
import { SummaryBlock } from './components/SummaryBlock'

export const Main = () => {
  return (
    <Wrapper>
      <Heading>
        <h2>Оформення заказу</h2>
        <NavLink to={'/'}>
          <BackBlock>
            <ArrowLeft />
            <span>Повернутися до покупок</span>
          </BackBlock>
        </NavLink>
      </Heading>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1460px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
