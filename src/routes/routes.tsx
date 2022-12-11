import { lazy } from 'react'
import { RoutePath, Routes } from './types'

// eslint-disable-next-line import/no-anonymous-default-export

const publicRoutes: Routes[] = [
  {
    path: RoutePath.HOME_PAGE,
    name: 'Головна',
    exact: true,
    element: lazy(() => import('../pages/HomePage/index' /* webpackChunkName: "Home Page" */)),
  },
  {
    path: RoutePath.ABOUT_PAGE,
    name: 'Про нас',
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },

  {
    name: 'Як зробити замовлення',
    path: RoutePath.HOW_TO,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Доставка і оплата',
    path: RoutePath.DELIVERY,
    exact: true,
    element: lazy(() => import('../pages/PaymentPage/index' /* webpackChunkName: "Payment Page" */)),
  },
  {
    name: 'Контакти',
    path: RoutePath.CONTACTS,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Наша місія',
    path: RoutePath.MISSION,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Наші партнери',
    path: RoutePath.PARTNERS,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Наша команда',
    path: RoutePath.TEAM,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Медичні експерти',
    path: RoutePath.EXPERTS,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },

  {
    name: 'Редакційна політика',
    path: RoutePath.EDITOR_POLICY,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Маркетингова політика',
    path: RoutePath.MARKETING_POLICY,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Політика конфіденційності',
    path: RoutePath.TERMS,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Угода про використання',
    path: RoutePath.AGREEMENT,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },

  {
    name: 'Умови повернення',
    path: RoutePath.ORDER_RETURN,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
  {
    name: 'Гарантії якості',
    path: RoutePath.WARRANTY,
    exact: true,
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
]
// const privateRoutes = []
export { publicRoutes }
