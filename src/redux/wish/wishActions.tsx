import { createAction } from '@reduxjs/toolkit'

export enum wishAction {
  GET_LIST = 'wish/get_list',
  GET_LIST_BY_USER = 'wish/get_list_by_user',
}

const getWishListAction = createAction(wishAction.GET_LIST)
const getWishListByUserAction = createAction(wishAction.GET_LIST_BY_USER)

export { getWishListAction, getWishListByUserAction }
