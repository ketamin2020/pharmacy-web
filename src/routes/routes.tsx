import { lazy } from 'react'
import { RoutePath } from './types'

// eslint-disable-next-line import/no-anonymous-default-export

const publicRoutes = [
  {
    path: RoutePath.HOME_PAGE,
    name: 'home_page',
    element: lazy(() => import('../pages/HomePage/index' /* webpackChunkName: "Home Page" */)),
  },
  {
    path: RoutePath.ABOUT_PAGE,
    name: 'about_page',
    element: lazy(() => import('../pages/AboutPage/index' /* webpackChunkName: "About Page" */)),
  },
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
