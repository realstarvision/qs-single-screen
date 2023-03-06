import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid } from '@mui/material'
import Dialog from '@/components/Dialog'
import Echarts from '@/components/Echarts'
import Table from '@/components/Table'
import AnnouncementDialog from '@/pages/AnnouncementDialog'
import FloatFrame from '../../FloatFrame'
import {
  columns,
  listData,
  announcementColumns,
  announcementListData,
  eventProcessingColumns,
  eventProcessingListData,
} from './json'
import { useSelector, useDispatch } from 'react-redux'
import { doubleBarOption } from '../../echartOption'
import { setSwitch } from '@/store/module/switch'
import Switch from '@/components/Switch'
import SvgIcon from '@/components/SvgIcon'
import './style.scss'
import '@/pages/main/components/FloatFrame/style.scss'

// 图片
import weather_data from '@/assets/image/charts/weather_data.png'
import water_acreage from '@/assets/image/charts/water_acreage.png'
import waterlogging_area from '@/assets/image/charts/waterlogging_area.png'
import network from '@/assets/image/charts/network.png'
import normal_device from '@/assets/image/charts/normal_device.png'
import offline_device from '@/assets/image/charts/offline_device.png'
import alarm_device from '@/assets/image/charts/alarm_device.png'
import announcement from '@/assets/image/charts/announcement.png'
import event_processing_condition from '@/assets/image/charts/event_processing_condition.png'
import groud from '@/assets/image/charts/groud.png'

export default function index({ onCheckDetails }) {
  const announcementDialogRef = useRef(null)
  // 设置redux值
  const dispatch = useDispatch()
  let switchData = useSelector((state: { Switch }) => state.Switch.value)

  const handleOpen = type => {
    // open[type] = !open[type]
    // dispatch(setNetworkMonitoring({ ...open }))
    // setOpen({ ...open })
    onCheckDetails('wellLid')
  }

  /* 开关事件 */
  const handleSwitch = (e, type) => {
    if (type === 'waterAcreage') {
      dispatch(
        setSwitch({
          waterAcreage: e.target.checked,
          wellLid: switchData.wellLid,
        })
      )
    } else {
      dispatch(
        setSwitch({
          waterAcreage: switchData.waterAcreage,
          wellLid: e.target.checked,
        })
      )
    }
  }

  /* 查看详情按钮 */
  const handleCheckDetails = () => {
    onCheckDetails('waterlogging')
  }

  /* 表格行点击事件 */
  const handleRowClick = row => {
    console.log(row)
    announcementDialogRef.current.handleSetData(row)
  }
  return (
    <>
      {/* 左 */}
      <FloatFrame className="left">
        <Box className="waterlogging_left">
          {/* 气象数据和管网监测 */}
          <Grid
            container
            className="top"
            // spacing={{ xs: 4 }}
            sx={{
              padding: 0,
            }}
          >
            <Grid xs={6} className="left">
              <img src={weather_data} />
            </Grid>
            <Grid xs={6} className="right">
              <img src={network} />
              <Box>
                <img
                  src={offline_device}
                  className="honeycomb_icon danger"
                  onClick={() => handleOpen('offline')}
                  // style={{
                  //   opacity: open.offline ? 1 : 0.6,
                  // }}
                />
                <img
                  src={normal_device}
                  className="honeycomb_icon steady"
                  onClick={() => handleOpen('normal')}
                  // style={{
                  //   opacity: open.normal ? 1 : 0.6,
                  // }}
                />
                <img
                  src={alarm_device}
                  className="honeycomb_icon fluctuate"
                  onClick={() => handleOpen('alarm')}
                  // style={{
                  //   opacity: open.alarm ? 1 : 0.6,
                  // }}
                />
              </Box>
              <div className="switch">
                <span>水井设备分布</span>
                <Switch checked={switchData.wellLid} onChange={e => handleSwitch(e, 'wellLid')}></Switch>
              </div>
            </Grid>
          </Grid>
          {/* 水体面积监测 */}
          <Box className="water_acreage">
            <div className="month">
              <SvgIcon svgName="arrows" svgClass="leftArrows"></SvgIcon>
              <span>12月</span>
              <SvgIcon svgName="arrows" svgClass="rightArrows"></SvgIcon>
            </div>
            <img src={water_acreage} />
          </Box>

          {/* 窖井盖消息通知 */}
          <Box className="well_lid">
            <img src={waterlogging_area} />
            <div className="switch">
              <span>易涝点分布</span>
              <Switch checked={switchData.waterAcreage} onChange={e => handleSwitch(e, 'waterAcreage')}></Switch>
            </div>
            <div className="check" onClick={handleCheckDetails}>
              查看内涝分析详情&gt;&gt;&gt;
            </div>
          </Box>
        </Box>
      </FloatFrame>
      {/* 右 */}
      <FloatFrame className="right">
        <Box className="waterlogging_right">
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
          <Box className="event_processing_waterlogging">
            {/* <img src={event_processing} />
        <Echarts
          options={linearGradientOption({
            list,
            line,
            xAxisData,
            grid: { left: 35, top: '20%', bottom: 20, right: '3%' },
          })}
        ></Echarts> */}
            <img src={groud} />
            <Echarts options={doubleBarOption()}></Echarts>
          </Box>
          {/* 事件处理情况 */}
          <Box className="table_box ">
            <img src={event_processing_condition} />
            <Table
              columns={eventProcessingColumns}
              data={eventProcessingListData}
              className="announcement_table"
            ></Table>
          </Box>
          {/* 弹出框 */}
          <AnnouncementDialog ref={announcementDialogRef}></AnnouncementDialog>
        </Box>
      </FloatFrame>
    </>
  )
}
