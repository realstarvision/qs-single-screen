import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid } from '@mui/material'
import Echarts from '@/components/Echarts'
import { doubleBarOption, linearGradientOption } from '../../../Left/echartOption'
import Table from '@/components/Table'
import AnnouncementDialog from '@/pages/AnnouncementDialog'
import {
  announcementColumns,
  announcementListData,
  eventProcessingColumns,
  eventProcessingListData,
  list,
  line,
  xAxisData,
} from './json'
import './style.scss'

// 图片
import announcement from '@/assets/image/charts/announcement.png'
import event_processing from '@/assets/image/charts/event_processing.png'
import event_processing_condition from '@/assets/image/charts/event_processing_condition.png'
import groud from '@/assets/image/charts/groud.png'

export default function index() {
  const announcementDialogRef = useRef(null)

  /* 表格行点击事件 */
  const handleRowClick = row => {
    console.log(row)
    announcementDialogRef.current.handleSetData(row)
  }
  return (
    <Box className="safety">
      {/* 公告消息 */}
      <Box className="table_box">
        <img src={announcement} />
        <Table
          columns={announcementColumns}
          data={announcementListData}
          className="announcement_table"
          onRowClick={handleRowClick}
        ></Table>
      </Box>
      {/* 事件处理趋势 */}
      <Box className="event_processing_safety">
        <img src={groud} />
        <Echarts options={doubleBarOption()}></Echarts>
      </Box>
      {/* 事件处理情况 */}
      <Box className="table_box">
        <img src={event_processing_condition} />
        <Table columns={eventProcessingColumns} data={eventProcessingListData} className="announcement_table"></Table>
      </Box>

      {/* 弹出框 */}
      <AnnouncementDialog ref={announcementDialogRef}></AnnouncementDialog>
    </Box>
  )
}
