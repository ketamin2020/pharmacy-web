import axiosInstance from 'services/axiosInstance'
import { AxiosResponse } from 'axios'

const GET_DRUGS_LIST = 'api/drugs/drugs-list'
const GET_DRUGS = 'api/drugs/drug'
const GET_MEDICINES_GROUP = 'api/drugs/medicines-group'
const SEARCH_ADDRESS = 'api/drugs/search-address'
const SEARCH_WEREHOUSES = 'api/drugs/search-werehouse'
const GET_DRUG_BY_SUBSTANCE = 'api/drugs/drugs-by-active-substance'
const GET_DRUG_BY_VIEWS = 'api/drugs/drugs-by-views'

export const getDrugsList = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUGS_LIST, { params }).then(res => res?.data)
}

export const getDrugById = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUGS, { params }).then(res => res?.data)
}
export const getMedicinesGroupList = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_MEDICINES_GROUP, { params }).then(res => res?.data)
}

export const getDrugsBySubstance = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUG_BY_SUBSTANCE, { params }).then(res => res?.data)
}

export const getDrugsByViews = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUG_BY_VIEWS, { params }).then(res => res?.data)
}

export const searchByCityName = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(SEARCH_ADDRESS, { params }).then(res => res?.data)
}
export const searchByWerehouse = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(SEARCH_WEREHOUSES, { params }).then(res => res?.data)
}
