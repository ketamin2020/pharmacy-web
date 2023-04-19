import { createAction } from '@reduxjs/toolkit'

export enum wishAction {
  GET_LIST = 'wish/get_list',
}

const getWishListAction = createAction(wishAction.GET_LIST)

export { getWishListAction }
