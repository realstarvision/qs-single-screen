import React from 'react'
import { Box, Grid } from '@mui/material'
import './style.scss'

export default function index({ children }) {
  return <Box className="float_frame-container">{children}</Box>
}
