import { lazy, Suspense, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
// 组件
const Error = lazy(() => import('../pages/error/404'))
const Main = lazy(() => import('../pages/main'))
// 组件懒加载
const lazyload = (children: ReactNode): ReactNode => {
  // return <Suspense>{children}</Suspense>
}

import Layout from '@/components/Layout'

// 免登录名单
export const whiteList = ['/login']

export interface Router {
  show?: boolean
  path: string
  element: JSX.Element
  name: string
  open?: boolean
  icon?: JSX.Element | string
  children?: Array<{
    index?: boolean
    path: string
    element: ReactNode
    name: string
    icon?: JSX.Element | string
    show?: boolean
  }>
}

// 一般路由
const router = [
  {
    path: '/main',
    element: <Layout />,
    children: [
      {
        path: 'index',
        element: lazyload(<Main />),
        name: '主页',
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/main/index"></Navigate>,
  },
  {
    path: '*',
    element: lazyload(<Error />),
  },
]

export default router
