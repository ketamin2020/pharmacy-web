import { getWishListAction, getWishListByUserAction } from './wishActions'
import { getWishList, addProductToWishList, deleteItemFromWishList, getUserWishList } from 'api/wish'

export const fetchWishList = () => dispatch => {
  return getWishList().then(data => dispatch(getWishListAction(data)))
}
export const fetchWishListByUser = () => dispatch => {
  return getUserWishList().then(data => dispatch(getWishListByUserAction(data)))
}

export const postNewWish = productId => dispatch => {
  return addProductToWishList({ productId }).then(data => dispatch(getWishListAction(data)))
}

export const deleteWishItem = productId => dispatch => {
  return deleteItemFromWishList(productId).then(() => getWishList().then(data => dispatch(getWishListAction(data))))
}
