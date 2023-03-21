import { createAction } from '@reduxjs/toolkit'

export enum groupsActionEnum {
  GET_GROUPS = 'groups/get',
}

const groupsAction = createAction(groupsActionEnum.GET_GROUPS)

export { groupsAction }
