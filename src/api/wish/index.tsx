import axiosInstance from 'services/axiosInstance'
import { AxiosResponse } from 'axios'

const GET_WISH_LIST = 'api/wishes/wishlist'
const CREATE_WISH_LIST = 'api/wishes/wishlist-create'
export const getWishList = () => {
  return axiosInstance.get<AxiosResponse>(GET_WISH_LIST).then(res => res?.data)
}

export const addProductToWishList = params => {
  return axiosInstance.post<AxiosResponse>(CREATE_WISH_LIST, params).then(res => res?.data)
}
