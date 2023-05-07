import React from 'react'
import styled from '@emotion/styled'
import { priceToView } from 'utils/priceToView'
import { Clear } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/types'
import { useDispatch } from 'react-redux'
import { toggleBusketModal } from 'redux/ui/modals/modalsActions'
import { deleteBasketItem, fetchBasketList, fetchBasketListByUser } from 'redux/basket/basketOperation'

export const BusketItem = ({ reviews, images, price, property, id }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleOpenProduct = id => {
    dispatch(toggleBusketModal(false))
    navigate(`${RoutePath.PRODUCT}/${id}`)
  }

  const handleDeleteFromBasketList = async id => {
    await dispatch(deleteBasketItem(id))
    await dispatch(fetchBasketList())
    await dispatch(fetchBasketListByUser())
  }
  return (
    <Wrapper>
      <Section>
        <img width={90} src={images?.[0]?.url} alt={property?.name} />
      </Section>
      <Section className='property-block'>
        <p onClick={() => handleOpenProduct(id)} className='property-name'>
          {property?.name}
        </p>
        <p className='property-code_wrapper'>
          Код товару: <span className='property-code'>{price.code}</span>{' '}
        </p>
      </Section>
      <Section className='price-value'>{priceToView(price.current)}</Section>
      <Section onClick={() => handleDeleteFromBasketList(id)} className='busket-action'>
        <Clear />
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  border: 1px solid rgba(136, 143, 154, 0.16);
  padding: 26px;
  border-radius: 10px;
  & .property-block {
    width: 100%;
    max-width: 200px;
  }
  & .property-name {
    overflow: hidden; /* скрываем текст, выходящий за пределы элемента */
    text-overflow: ellipsis; /* добавляем троеточие в конце текста */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* количество строк, которые вы хотите показать */
    -webkit-box-orient: vertical;
    font-size: 16px;
    height: 54px;
    cursor: pointer;
    &:hover {
      color: var(--greenColorSecondary);
    }
  }
  & .property-code_wrapper {
    color: rgba(57, 69, 86, 0.6);
    font-size: 14px;
    & .property-code {
      color: black;
    }
  }
  & .price-value {
    font-weight: bold;
  }
  & .busket-action {
    cursor: pointer;
  }
`

const Section = styled.div``
