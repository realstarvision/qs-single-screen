import React, { ReactElement } from 'react'
import { Box, Grid } from '@mui/material'
import './style.scss'

export default function index({ children, className }: { children: ReactElement; className?: string }) {
  return <Box className={'float_frame-container ' + className}>{children}</Box>
}
