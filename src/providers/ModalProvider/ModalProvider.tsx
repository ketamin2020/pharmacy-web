import React from 'react'
import BusketModal from 'components/Modals/BusketModal/BusketModal'
import AuthModal from 'components/Modals/AuthModal/AuthModal'
export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <BusketModal />
      <AuthModal />
    </>
  )
}
