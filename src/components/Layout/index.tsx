import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

export default function index({ children }: { children?: any }) {
  return (
    <Box>
      <Header></Header>
      {children ? children : <Outlet />}
    </Box>
  )
}
