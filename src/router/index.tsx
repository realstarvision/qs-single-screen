import { lazy, Suspense, ReactNode } from 'react'
// 组件
import Error from '../pages/error/404'
import Main from '../pages/main'
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
    path: '/',
    name: '主页',
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default router
