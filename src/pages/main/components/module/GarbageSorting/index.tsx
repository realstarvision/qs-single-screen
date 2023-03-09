import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@mui/material'
// 组件
import Echarts from '@/components/Echarts'
import Table from '@/components/Table'
import AnnouncementDialog from '@/pages/Dialog/AnnouncementDialog'
import FloatFrame from '../../FloatFrame'
import Title from '../../Title'
import HexagonModule from '../../HexagonModule'
// 数据及工具
import { linearGradientOption, doubleLinearOption, triangleOption } from '../../echartOption'
import { announcementColumns, announcementListData, deviceListColumns, hexagonList } from './json'
import { garbageSorting } from '@/components/Map/json'
import chartsAnimation from '@/utils/chartsAnimation'
import './style.scss'
import '@/pages/main/components/FloatFrame/style.scss'

let list1 = [
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

let line1 = ['生活垃圾', '厨余垃圾', '可回收垃圾']
let xAxisData1 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

// 数据
let xLabel = ['新建社区', '乔司社区', 'aa社区', 'bb社区', 'cc社区', 'dd社区']
let yData = [14, 19, 11, 12, 10, 18]

// 垃圾统计数据
let garbageStatisticalData = [
  {
    monthlyCount: 125,
    quarterCount: 351,
    typeName: '厨余垃圾',
  },
  {
    monthlyCount: 125,
    quarterCount: 351,
    typeName: '可回收物',
  },
  {
    monthlyCount: 125,
    quarterCount: 351,
    typeName: '有害垃圾',
  },
  {
    monthlyCount: 125,
    quarterCount: 351,
    typeName: '其他垃圾',
  },
]

// 图片
import garbage_statistics_loop_outer from '@/assets/image/png/garbage_statistics_loop_outer.png'
import garbage_statistics_loop_inner from '@/assets/image/png/garbage_statistics_loop_inner.png'

// 定时器
let garbageSortingTimer = null
let garbagePointTimer = null
let garbageDisposalTimer = null

export default function index({ onDeviceRowClick }) {
  const announcementDialogRef = useRef(null)
  const garbageSortingRef = useRef(null)
  const garbagePointRef = useRef(null)
  const garbageDisposalRef = useRef(null)

  // 初始化
  useEffect(() => {
    if (garbageSortingRef.current) {
      setTimeout(() => {
        garbageSortingTimer = chartsAnimation(garbageSortingRef.current, garbageSortingTimer, xAxisData1.length - 1)
      }, 0)
    }
  }, [garbageSortingRef.current])
  useEffect(() => {
    if (garbagePointRef.current) {
      setTimeout(() => {
        garbagePointTimer = chartsAnimation(garbagePointRef.current, garbagePointTimer, xLabel.length - 1)
      }, 0)
    }
  }, [garbagePointRef.current])
  useEffect(() => {
    if (garbageDisposalRef.current) {
      setTimeout(() => {
        garbageDisposalTimer = chartsAnimation(garbageDisposalRef.current, garbageDisposalTimer, 6, 3, 0)
      }, 0)
    }
  }, [garbageDisposalRef.current])

  // 初始化
  useEffect(() => {
    return function () {
      clearInterval(garbageSortingTimer)
      garbageSortingTimer = null
      clearInterval(garbagePointTimer)
      garbagePointTimer = null
      clearInterval(garbageDisposalTimer)
      garbageDisposalTimer = null
    }
  }, [])
  /* 表格行点击事件 */
  const handleRowClick = row => {
    announcementDialogRef.current.handleSetData(row)
  }
  const handleDeviceRowClick = () => {
    onDeviceRowClick()
  }

  // 图表鼠标移入移出事件
  const handleMouse = (action, type) => {
    if (action === 'enter') {
      if (type === 'garbageSorting') {
        if (garbageSortingTimer) {
          clearInterval(garbageSortingTimer)
          garbageSortingTimer = null
        }
      } else if (type === 'garbagePoint') {
        if (garbagePointTimer) {
          clearInterval(garbagePointTimer)
          garbagePointTimer = null
        }
      } else if (type === 'garbageDisposal') {
        if (garbageDisposalTimer) {
          clearInterval(garbageDisposalTimer)
          garbageDisposalTimer = null
        }
      }
    } else if (action === 'leave') {
      if (type === 'garbageSorting') {
        garbageSortingTimer = chartsAnimation(garbageSortingRef.current, garbageSortingTimer, xAxisData1.length - 1)
      } else if (type === 'garbagePoint') {
        garbagePointTimer = chartsAnimation(garbagePointRef.current, garbagePointTimer, xLabel.length - 1)
      } else if (type === 'garbageDisposal') {
        garbageDisposalTimer = chartsAnimation(garbageDisposalRef.current, garbageDisposalTimer, 6, 3, 0)
      }
    }
  }
  return (
    <>
      {/* 左 */}
      <FloatFrame className="left">
        <Box className="garbage_sorting_left side-wrapper">
          {/* 垃圾分类 */}
          <Box className="garbage_sorting_chart">
            <Title title="垃圾分类" />
            {/* <p className="unit">单位：kg</p> */}
            <div className="echarts-box">
              <Echarts
                ref={garbageSortingRef}
                onMouseEnter={() => handleMouse('enter', 'garbageSorting')}
                onMouseLeave={() => handleMouse('leave', 'garbageSorting')}
                options={linearGradientOption({
                  list: list1,
                  line: line1,
                  xAxisData: xAxisData1,
                  grid: { left: 35, top: '20%', bottom: 20, right: '3%' },
                  unit: 'kg',
                  endValue: 4,
                  startValue: 0,
                })}
              ></Echarts>
            </div>
          </Box>
          {/* 垃圾统计 */}
          <Box className="garbage_statistical_chart">
            <Title title="垃圾统计" />
            <div className="garbage_statistical">
              {garbageStatisticalData.map(item => (
                <StatisticalModule
                  quarterCount={item.quarterCount}
                  monthlyCount={item.monthlyCount}
                  typeName={item.typeName}
                ></StatisticalModule>
              ))}
            </div>
          </Box>
          {/* 累计沉降量 */}
          <Box className="garbage_disposal">
            <Title title="垃圾处理趋势" />
            <Echarts
              ref={garbageDisposalRef}
              onMouseEnter={() => handleMouse('enter', 'garbageDisposal')}
              onMouseLeave={() => handleMouse('leave', 'garbageDisposal')}
              options={doubleLinearOption({ unit: 'kg' })}
            ></Echarts>
          </Box>
        </Box>
      </FloatFrame>
      {/* 右 */}
      <FloatFrame className="right">
        <Box className="garbage_sorting_right side-wrapper">
          {/* 公告消息 */}
          <Box className="table_box">
            <Title title="公告信息" className="mb-10" />
            <Table
              onRowClick={handleRowClick}
              columns={announcementColumns}
              data={announcementListData}
              className="announcement_table"
            ></Table>
          </Box>
          {/* 设备监测和设备列表 */}
          <Box className="event_processing_garbageSorting">
            <Box onClick={handleDeviceRowClick}>
              <Title title="设备监测" size="small" />
              <HexagonModule list={hexagonList}></HexagonModule>
            </Box>
            <Box>
              <Title title="设备列表" size="small" className="mb-10" />
              <Table
                columns={deviceListColumns}
                data={garbageSorting}
                className="deviceList_table"
                onRowClick={handleDeviceRowClick}
              ></Table>
            </Box>
          </Box>
          {/* 垃圾站点位 */}
          <Box className="garbage_classification_point">
            <Title title="垃圾站点位" />
            <div className="echarts-box">
              <Echarts
                ref={garbagePointRef}
                onMouseEnter={() => handleMouse('enter', 'garbagePoint')}
                onMouseLeave={() => handleMouse('leave', 'garbagePoint')}
                options={triangleOption(xLabel, yData, '垃圾站点位数量（个）')}
              ></Echarts>
            </div>
          </Box>
          {/* 弹出框 */}
          <AnnouncementDialog ref={announcementDialogRef}></AnnouncementDialog>
        </Box>
      </FloatFrame>
    </>
  )
}

// 统计模块
function StatisticalModule({ monthlyCount, quarterCount, typeName }) {
  // 模块内容
  let moduleList = [
    {
      label: '季处理量',
      count: quarterCount,
    },
    {
      label: '月处理量',
      count: monthlyCount,
    },
  ]
  return (
    <div className="statistical_module">
      <div className="count">
        {moduleList.map(item => {
          return (
            <div>
              <p className="label">{item.label}</p>
              <p className="number">{item.count}</p>
              <img className="loop_outer" src={garbage_statistics_loop_outer} />
              <img className="loop_inner" src={garbage_statistics_loop_inner} />
            </div>
          )
        })}
      </div>
      <p className="type">{typeName}</p>
    </div>
  )
}
