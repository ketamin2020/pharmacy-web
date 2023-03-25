import { createAction } from '@reduxjs/toolkit'

export enum mainActionEnum {
  GET_MAIN = 'main/get',
  GET_BANNERS = 'banners/get',
}

const mainAction = createAction(mainActionEnum.GET_MAIN as string)
const bannerAction = createAction(mainActionEnum.GET_BANNERS as string)

export { mainAction, bannerAction }
