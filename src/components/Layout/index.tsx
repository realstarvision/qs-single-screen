import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

export default function index() {
  return (
    <Box>
      <Header></Header>
      <Outlet />
    </Box>
  )
}
