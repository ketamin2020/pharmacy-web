import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isOpenBusketModalSelectror } from 'redux/ui/modals/modalSelectors'
import { toggleBusketModal } from 'redux/ui/modals/modalsActions'
import Modal from '../Modal'

const BusketModal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenBusketModalSelectror)
  const onClose = () => dispatch(toggleBusketModal(false))
  return (
    <Modal title='Корзина' handleClose={onClose} open={isOpen}>
      <p>Modal</p>
    </Modal>
  )
}

export default BusketModal
