import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Box, AppBar } from '@mui/material'
import headerImg from '@/assets/image/png/header.png'
import projectNameImg from '@/assets/image/png/project_name.png'
import { barHeight } from '@/config'
import './header.scss'

export const DrawerHeader = styled('div')(({ theme }) => ({
  height: barHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

export default function Header() {
  return (
    <Box
      className="header"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Box className="bar">
        <img src={headerImg}></img>
        <Box className="font-box">
          <Box className="title-box">
            {/* <span className="title">乔司街道智慧护民保障平台</span> */}
            <img src={projectNameImg} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
