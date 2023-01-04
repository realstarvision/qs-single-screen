import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import Dialog from '@/components/Dialog'
import Echarts from '@/components/Echarts'
import { linearGradientOption } from '../../../Left/echartOption'
import Table from '@/components/Table'
import AnnouncementDialog from '@/pages/AnnouncementDialog'
import { announcementColumns, announcementListData, deviceListColumns, list, line, xAxisData } from './json'
import { garbageSorting } from '@/components/Map/json'
import './style.scss'

// 图片
import video from '@/assets/mp4/1.mp4'
import announcement from '@/assets/image/charts/announcement.png'
import event_processing from '@/assets/image/charts/event_processing.png'
import event_processing_condition from '@/assets/image/charts/event_processing_condition.png'
import garbage_classification_point from '@/assets/image/charts/garbage_classification_point.png'
import videoImage from '@/assets/image/charts/video.png'
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
    <Box className="GarbageSorting">
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
  )
}
