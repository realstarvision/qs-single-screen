import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Echarts from '@/components/Echarts'
import { subsidenceRiskPredictionOption, linearGradientOption, doubleLinearOption } from '../../echartOption'
import './style.scss'

let list = [
  {
    name: '生活垃圾',
    data: [10, 60, 50, 70, 79, 26, 55, 35, 65, 3, 11, 47],
  },
  {
    name: '厨余垃圾',
    data: [7, 33, 9, 70, 79, 26, 60, 35, 22, 3, 63, 77],
  },
  {
    name: '可回收垃圾',
    data: [50, 66, 9, 20, 79, 26, 53, 35, 72, 3, 63, 44],
  },
]

let line = ['生活垃圾', '厨余垃圾', '可回收垃圾']
let xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

// 图片
import garbage_sorting_title from '@/assets/image/charts/garbage_sorting_title.png'
import garbage_statistics from '@/assets/image/charts/garbage_statistics.png'
import garbage_disposal from '@/assets/image/charts/garbage_disposal.png'

export default function index() {
  return (
    <Box className="garbage_sorting">
      {/* 垃圾分类 */}
      <Box className="garbage_sorting_chart">
        <img src={garbage_sorting_title} />
        <p className="unit">单位：kg</p>
        <Echarts
          options={linearGradientOption({
            list,
            line,
            xAxisData,
            grid: { left: 35, top: '20%', bottom: 20, right: '3%' },
          })}
        ></Echarts>
      </Box>
      {/* 垃圾统计 */}
      <Box className="garbage_statistics">
        <img src={garbage_statistics} />
        <p className="unit">单位：kg</p>
      </Box>
      {/* 累计沉降量 */}
      <Box className="garbage_disposal">
        <img src={garbage_disposal} />
        <p className="unit">单位：kg</p>
        <Echarts options={doubleLinearOption()}></Echarts>
      </Box>
    </Box>
  )
}
