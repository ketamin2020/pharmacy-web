import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { basketSelector } from 'redux/basket/basketSelectors'
import Button from 'common/Button/Button'

export const BusketInfo = ({ handleOpenBusketModal }) => {
  const busket = useSelector(basketSelector)

  const imagesArray = busket?.products?.map(item => item?.images?.items?.[0]).map(item => item?.url)

  return (
    <Wrapper>
      <div className='main-title'>{`В корзині ${busket?.totalQty || 0} товари`}</div>
      <div>
        {imagesArray?.map(imageUrl => (
          <img width={50} key={imageUrl} src={imageUrl} alt={imageUrl} />
        ))}
      </div>
      <Button onClick={handleOpenBusketModal} shape='square' color='green'>
        <div>Рудагувати замовлення</div>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  /* max-width: 700px; */
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(47, 162, 151, 0.3);
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  & .edit-title {
    color: var(--blueColor);
    cursor: pointer;
  }
  & .main-title {
    font-weight: 600;
  }
`
