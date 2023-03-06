import React, { useEffect, useState } from 'react'
import Sinking from './Sinking'
import Waterlogging from './Waterlogging'
import GarbageSorting from './GarbageSorting'
// 图片

export default function index({ active, onDeviceRowClick }) {
  /* 设备列表 */
  const handleDeviceRowClick = () => {
    onDeviceRowClick()
  }
  return (
    <>
      {active === 0 ? (
        /* 护民地质安全监测 */
        <Sinking />
      ) : active === 1 ? (
        /* 保民降水内涝监测 */
        <Waterlogging onCheckDetails={handleDeviceRowClick} />
      ) : active === 2 ? (
        /* 便民垃圾分类监测 */
        <GarbageSorting onDeviceRowClick={handleDeviceRowClick} />
      ) : (
        ''
      )}
    </>
  )
}
