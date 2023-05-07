import React from 'react'
import { ProductCard } from 'common/ProductCard/ProductCard'
import styled from '@emotion/styled'
interface IProps {
  id: string
  morion: number
  marked_name: {
    name: string
    slug: string
  }
  images: {
    morion: number
    items: { id: string; url: string }[]
  }
  price: {
    code: string
    current: number
    partner: string
    updatedAt: string
  }
}

export const MainList = ({ list }: IProps[]) => {
  return (
    <Wrapper>
      {list &&
        list?.map(item => (
          <ProductCard
            id={item?.id}
            image={item?.images?.items?.[0]?.url}
            key={item?.morion}
            price={item.price?.current}
            name={item?.name}
            reviews={item?.reviews}
          />
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`
