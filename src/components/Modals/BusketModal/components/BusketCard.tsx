import React from 'react'
import styled from '@emotion/styled'
const Wrapper = styled.article`
  display: flex;
`
const Item = styled.div``
interface IProps {
  image: string
  name: string
  code: number
  count: number
  price: number
}
export const BusketCard: React.FC<IProps> = ({ image, name, code, count, price }) => {
  return (
    <Wrapper>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </Wrapper>
  )
}
