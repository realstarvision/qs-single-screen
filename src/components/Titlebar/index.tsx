import React from 'react'
import { Box } from '@mui/material'
import SvgIcon from '@/components/SvgIcon'
import s from './index.module.scss'

export default function index({
  icon,
  title,
  sub,
  rightFont,
  titleSize,
  iconSize
}: {
  icon: string
  title: string
  sub?: string
  rightFont?: string
  titleSize?: string
  iconSize?: string
}) {
  return (
    <Box className={s.titleBar}>
      <img src={icon} className={iconSize ? s.newIcon : s.icon} />
      <span className={titleSize ? s.newTitle : s.title}>{title}</span>
      <span className={s.sub}>{sub}</span>
      <span className={s.operate}>{rightFont}</span>
    </Box>
  )
}
