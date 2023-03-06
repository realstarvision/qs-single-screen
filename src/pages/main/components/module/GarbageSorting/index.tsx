import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@mui/material'
import Echarts from '@/components/Echarts'
import Table from '@/components/Table'
import AnnouncementDialog from '@/pages/AnnouncementDialog'
import FloatFrame from '../../FloatFrame'
import { linearGradientOption, doubleLinearOption } from '../../echartOption'
import { announcementColumns, announcementListData, deviceListColumns, list, line, xAxisData } from './json'
import { garbageSorting } from '@/components/Map/json'
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

// 图片
import garbage_sorting_title from '@/assets/image/charts/garbage_sorting_title.png'
import garbage_statistics from '@/assets/image/charts/garbage_statistics.png'
import garbage_disposal from '@/assets/image/charts/garbage_disposal.png'
import announcement from '@/assets/image/charts/announcement.png'
import garbage_classification_point from '@/assets/image/charts/garbage_classification_point.png'
import garbageDeviceModule from '@/assets/image/charts/garbage_device_module.png'
import garbage_device_list_title from '@/assets/image/charts/garbage_device_list_title.png'

export default function index({ onDeviceRowClick }) {
  const announcementDialogRef = useRef(null)
  /* 表格行点击事件 */
  const handleRowClick = row => {
    announcementDialogRef.current.handleSetData(row)
  }
  const handleDeviceRowClick = () => {
    onDeviceRowClick()
  }
  return (
    <>
      {/* 左 */}
      <FloatFrame className="left">
        <Box className="garbage_sorting_left">
          {/* 垃圾分类 */}
          <Box className="garbage_sorting_chart">
            <img src={garbage_sorting_title} />
            <p className="unit">单位：kg</p>
            <Echarts
              options={linearGradientOption({
                list: list1,
                line: line1,
                xAxisData: xAxisData1,
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
      </FloatFrame>
      {/* 右 */}
      <FloatFrame className="right">
        <Box className="garbage_sorting_right">
          {/* 公告消息 */}
          <Box className="table_box">
            <img src={announcement} />
            <Table
              onRowClick={handleRowClick}
              columns={announcementColumns}
              data={announcementListData}
              className="announcement_table"
            ></Table>
          </Box>
          {/* 事件处理趋势 */}
          <Box className="event_processing_garbageSorting">
            <img
              src={garbageDeviceModule}
              style={{
                cursor: 'pointer',
                width: '48%',
              }}
              onClick={handleDeviceRowClick}
            />
            <Box
              style={{
                width: '50%',
              }}
            >
              <img src={garbage_device_list_title} className="deviceList_table_title" />
              <Table
                columns={deviceListColumns}
                data={garbageSorting}
                className="deviceList_table"
                onRowClick={handleDeviceRowClick}
              ></Table>
            </Box>
          </Box>
          {/* 事件处理情况 */}
          <Box className="garbage_classification_point">
            <img src={garbage_classification_point} />
          </Box>
          {/* 弹出框 */}
          <AnnouncementDialog ref={announcementDialogRef}></AnnouncementDialog>
        </Box>
      </FloatFrame>
    </>
  )
}
