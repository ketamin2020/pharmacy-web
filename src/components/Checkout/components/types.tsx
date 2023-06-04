export interface Client {
  first_name: string
  last_name: string
  middle_name: string
  email: string
  phone: string
  user_id: null | number
}

export interface City {
  id: string
  latitude: string
  longitude: string
  name: string
}

export interface Recipient {
  first_name: string
  last_name: string
  middle_name: string
  email: string
  phone: string
  user_id: null | number
  itself: boolean
  street: string
  house_number: string
  flat_number: string
}

export enum DeliveryTypeNum {
  PICKUP = 1,
  NOVA_POSHTA = 2,
  DELIVERY = 3,
}

export interface DeliveryType {
  type: DeliveryTypeNum
  title: string
}

export interface Warehouse {
  houseNumber: string
  iconUrl?: string
  id: string
  latitude: number
  longitude: number
  loyalty: boolean
  name: string
  number: number
  postcode: string
  selfService: boolean
  street: string
  typeSlug: string
  workTime: string
  workTimeArray: any[] // or specify the specific type of array elements
}

export interface Price {
  description: string
  totalToPay: number
}

export interface Discount {
  usedBonus: number
  warehouseId: number
}

export interface Payment {
  name: string
  price: Price
}

export interface Delivery {
  city: City
  recipient: Recipient
}

export interface IPayment {
  basketId: string
  callback: boolean
  comment: string
  client: Client
  deliveryType: DeliveryType
  delivery: Delivery
  requiredRecipient: boolean
  warehouse: Warehouse
  discount: Discount
  payment: Payment
}
