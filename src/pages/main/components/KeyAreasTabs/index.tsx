import React from 'react'
import { Box } from '@mui/material'
import { mapTabs } from './json'
import s from './s.module.scss'

// 沉降标签切换菜单
export default function index({ active, onClick }) {
  const handleMapTabClick = index => {
    if (active !== index) {
      onClick(index)
    }
  }
  return (
    <Box className={s.cumulative_settlement_volume}>
      <Box className={s.map_tabs}>
        {mapTabs.map((tab, index) => (
          <Box
            // style={{
            //   minWidth: '190px',
            //   minHeight: '60px',
            // }}
            className={s.tab}
            onClick={() => handleMapTabClick(index)}
            key={index}
          >
            <img src={active === index ? tab.activeName : tab.name} className={s.bg}></img>
            {/* <span
              style={{
                color: active === index ? '#eee' : '#7DA9D0',
              }}
            >
              {tab.label}
            </span> */}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
