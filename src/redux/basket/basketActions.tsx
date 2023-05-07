import { createAction } from '@reduxjs/toolkit'

export enum basketAction {
  GET_LIST = 'basket/get_list',
  GET_LIST_BY_USER = 'basket/get_list_by_user',
}

const getBasketListAction = createAction(basketAction.GET_LIST)
const getBasketListByUserAction = createAction(basketAction.GET_LIST_BY_USER)

export { getBasketListAction, getBasketListByUserAction }
