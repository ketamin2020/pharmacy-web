import { LazyExoticComponent } from 'react'

enum RoutePath {
  HOME_PAGE = '/',
  ABOUT_PAGE = '/about',
  HOW_TO = '/about/howto',
  DELIVERY = '/about/delivery',
  CONTACTS = '/about/contacts',
  MISSION = '/about/missiya-kompanii',
  PARTNERS = '/about/partners',
  TEAM = '/about/team',
  EXPERTS = '/about/medical-experts',
  EDITOR_POLICY = '/about/editorial-policy',
  MARKETING_POLICY = '/about/marketing-policy',
  TERMS = '/about/terms',
  AGREEMENT = '/about/agreement',
  ORDER_RETURN = '/about/order-return',
  WARRANTY = '/about/warranty',
  PERSONAL_INFO = '/account/personal-data',
  WISHLIST = '/account/wishlist',
  ORDERS = '/account/orders',
  ADMIN = '/admin',
}

interface Routes {
  name: string
  path: string
  exact: boolean
  element: LazyExoticComponent<() => JSX.Element>
}

export { Routes, RoutePath }
