import { createAction } from '@reduxjs/toolkit'

const toggleBusketModal = createAction('ui/toggleBusketModal')
const toggleAuthModal = createAction('ui/toggleAuthModal')

export { toggleBusketModal, toggleAuthModal }
