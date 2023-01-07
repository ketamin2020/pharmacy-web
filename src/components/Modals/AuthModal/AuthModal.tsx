import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isOpenAuthModalSelectror } from 'redux/ui/modals/modalSelectors'
import { toggleAuthModal } from 'redux/ui/modals/modalsActions'
import Modal from '../Modal'

const AuthModal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenAuthModalSelectror)
  const onClose = () => dispatch(toggleAuthModal(false))
  return (
    <Modal title='Увійдіть вприватний кабінет' handleClose={onClose} open={isOpen}>
      <p></p>
    </Modal>
  )
}

export default AuthModal
