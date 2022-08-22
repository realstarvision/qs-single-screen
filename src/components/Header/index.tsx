import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Box, AppBar } from '@mui/material'
import headerImg from '@/assets/image/png/header.png'
import { barHeight } from '@/config'
import './header.scss'

export const DrawerHeader = styled('div')(({ theme }) => ({
  height: barHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

export default function Header() {
  return (
    <AppBar
      position="fixed"
      className="header"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1
      }}
    >
      <Box className="bar">
        <img src={headerImg}></img>
        <Box className="font-box">
          <Box className="title-box">
            <span className="title">非农非粮</span>
            <span className="title-sub">临平区“百千万”亩方农田提质试点工程</span>
          </Box>
          <Typography className="place">-杭州市-</Typography>
        </Box>
      </Box>
    </AppBar>
  )
}
