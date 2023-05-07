import { getBasketListAction, getBasketListByUserAction } from './basketActions'

import { getBasketList, addProductToBasketList, deleteItemFromBasketList, getUserBasketList } from 'api/basket'

export const fetchBasketList = () => dispatch => {
  return getBasketList().then(data => dispatch(getBasketListAction(data)))
}

export const fetchBasketListByUser = () => dispatch => {
  return getUserBasketList().then(data => dispatch(getBasketListByUserAction(data)))
}

export const postNewBasket = productId => dispatch => {
  return addProductToBasketList({ productId }).then(data => dispatch(getBasketListAction(data)))
}

export const deleteBasketItem = productId => dispatch => {
  return deleteItemFromBasketList(productId).then(() =>
    getBasketList().then(data => dispatch(getBasketListAction(data))),
  )
}
