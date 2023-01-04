import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Echarts from '@/components/Echarts'
import FloatFrame from '../FloatFrame'
import Safety from './components/Safety'
import Waterlogging from './components/Waterlogging'
import GarbageSorting from './components/GarbageSorting'
// 图片

export default function index({ active, onDeviceRowClick }) {
  /* 设备列表 */
  const handleDeviceRowClick = () => {
    onDeviceRowClick()
  }
  return (
    <FloatFrame>
      {active === 0 ? (
        /* 护民地质安全监测 */
        <Safety></Safety>
      ) : active === 1 ? (
        /* 保民降水内涝监测 */
        <Waterlogging></Waterlogging>
      ) : active === 2 ? (
        /* 便民垃圾分类监测 */
        <GarbageSorting onDeviceRowClick={handleDeviceRowClick}></GarbageSorting>
      ) : (
        ''
      )}
      {/* 护民地质安全监测 */}
      {/* <Safety></Safety> */}
      {/* 保民降水内涝监测 */}
      {/* <Waterlogging></Waterlogging> */}
      {/* 便民垃圾分类监测 */}
      {/* <GarbageSorting></GarbageSorting> */}
    </FloatFrame>
  )
}
