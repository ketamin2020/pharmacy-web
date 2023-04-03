import axiosInstance from 'services/axiosInstance'
import { AxiosResponse } from 'axios'

const GET_DRUGS_LIST = 'api/drugs/drugs-list'

export const getDrugsList = params => {
  return axiosInstance.get<AxiosResponse<{ data: object }>>(GET_DRUGS_LIST, { params }).then(res => res?.data?.data)
}
