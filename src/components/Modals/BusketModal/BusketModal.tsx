import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isOpenBusketModalSelectror } from 'redux/ui/modals/modalSelectors'
import { toggleBusketModal } from 'redux/ui/modals/modalsActions'
import Modal from '../Modal'
import { basketlistSelector, basketSelector } from 'redux/basket/basketSelectors'
import { BusketItem } from 'common/BusketItem/BusketItem'
import Button from 'common/Button/Button'
import styled from '@emotion/styled'
import { priceToView } from 'utils/priceToView'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/types'

const BusketModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isOpen = useSelector(isOpenBusketModalSelectror)
  const data = useSelector(basketlistSelector)
  const busket = useSelector(basketSelector)
  const onClose = () => dispatch(toggleBusketModal(false))

  const handleCheckout = () => {
    onClose()
    return navigate(`${RoutePath.CHECKOUT}`)
  }

  console.log(data)
  return (
    <Modal title='Корзина' handleClose={onClose} open={isOpen}>
      {!!data?.length
        ? data.map((item, idx) => (
            <BusketItem
              reviews={item.reviews}
              images={item.images.items}
              price={item.price}
              property={item.property}
              id={item.id}
              key={idx}
              qty={item.qty}
            />
          ))
        : 'Корзина порожня'}

      {!!data?.length && (
        <SummaryWrapper>
          <p>
            <span className='summary-title'>Разом:</span>
            <span className='summary-value'>{priceToView(busket?.totalPrice || 0)}</span>
          </p>
          <p>
            <Button onClick={handleCheckout} color='green' shape='square' buttonCustomClass='product-basket'>
              <p>Оформити заказ</p>
            </Button>
          </p>
        </SummaryWrapper>
      )}
    </Modal>
  )
}

export default BusketModal

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  & .summary-value {
    font-weight: bold;
    margin-left: 20px;
  }
`
