import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Table from '@/components/Table'
import './center.scss'

// 图片
import safetyActiveImage from '@/assets/image/tabs/safety_active.png'
import garbagesortingImage from '@/assets/image/tabs/garbagesorting.png'
import garbagesortingActiveImage from '@/assets/image/tabs/garbagesorting_active.png'
import waterloggingImage from '@/assets/image/tabs/waterlogging.png'
import waterloggingActiveImage from '@/assets/image/tabs/waterlogging_active.png'

let tabs = [
  [safetyActiveImage, safetyActiveImage],
  [garbagesortingImage, garbagesortingActiveImage],
  [waterloggingImage, waterloggingActiveImage],
]

export default function Center() {
  let [active, setActive] = useState(0)

  /* 标签单击事件 */
  const handleTabClick = index => {
    if (active !== index) {
      setActive(index)
      console.log(111)
    }
  }

  return (
    <Box className="center-container">
      {/* <Box className="tab_bar">
        {tabs.map((tab, index) => (
          <Box className={'tab ' + (active === index ? 'active' : '')} onClick={() => handleTabClick(index)}>
            {tab}
          </Box>
        ))}
      </Box> */}
    </Box>
  )
}
