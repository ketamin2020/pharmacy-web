import axiosInstance from 'services/axiosInstance'
import { AxiosResponse } from 'axios'

const GET_DRUGS_LIST = 'api/drugs/drugs-list'
const GET_DRUGS = 'api/drugs/drug'
const GET_MEDICINES_GROUP = 'api/drugs/medicines-group'

export const getDrugsList = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUGS_LIST, { params }).then(res => res?.data)
}

export const getDrugById = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUGS, { params }).then(res => res?.data)
}
export const getMedicinesGroupList = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_MEDICINES_GROUP, { params }).then(res => res?.data)
}
