import { getWishListAction } from './wishActions'
import { getWishList, addProductToWishList } from 'api/wish'

export const fetchWishList = () => dispatch => {
  return getWishList().then(data => dispatch(getWishListAction(data?.products)))
}

export const postNewWish = productId => dispatch => {
  return addProductToWishList({ productId }).then(data => dispatch(getWishListAction(data?.products)))
}
