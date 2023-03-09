import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
// 组件
import Echarts from '@/components/Echarts'
import Table from '@/components/Table'
import AnnouncementDialog from '@/pages/Dialog/AnnouncementDialog'
import EventSinkingDialog from '@/pages/Dialog/EventSinkingDialog'
import FloatFrame from '../../FloatFrame'
import EventCount from '../../EventCount'
import Switch from '@/components/Switch'
import SvgIcon from '@/components/SvgIcon'
import HexagonModule from '../../HexagonModule'
import Title from '../../Title'
// 数据及工具
import {
  columns,
  listData,
  announcementColumns,
  announcementListData,
  eventProcessingColumns,
  eventProcessingListData,
  hexagonList,
} from './json'
import { doubleBarOption, lineOrdinary, circularRingWaterloggingOption } from '../../echartOption'
import { setSwitch } from '@/store/module/switch'
import chartsAnimation from '@/utils/chartsAnimation'
// 样式
import './style.scss'
import '@/pages/main/components/FloatFrame/style.scss'

// 图片
import doughnut_chart_style from '@/assets/image/charts/doughnut_chart_style.png'

/* 图表数据 */
export let dangerList = [
  {
    name: '新建社区',
    data: [15, 20, 4, 23, 15, 10, 5],
  },
  {
    name: '乔司社区',
    data: [17, 3, 22, 7, 9, 6, 15],
  },
  {
    name: 'aa社区',
    data: [5, 6, 17, 20, 9, 26, 3],
  },
  {
    name: 'bb社区',
    data: [3, 9, 55, 23, 2, 5, 8],
  },
  {
    name: 'cc社区',
    data: [1, 5, 5, 20, 9, 30, 6],
  },
  {
    name: 'dd社区',
    data: [78, 5, 12, 50, 5, 7, 2],
  },
]

export let dangerLine = ['新建社区', '乔司社区', 'aa社区', 'bb社区', 'cc社区', 'dd社区']
export let xAxisDataDanger = ['2022/1', '2022/3', '2022/4', '2022/5', '2022/7', '2022/9', '2022/11       ']

// 气象数据
let meteorologicalData = [
  {
    icon: 'weather',
    label: '天气',
    data: '大雨',
  },
  {
    icon: 'temperature',
    label: '温度',
    data: '27℃',
  },
  {
    icon: 'wind',
    label: '风力风向',
    data: '西北风 4级',
  },
  {
    icon: 'humidness',
    label: '湿度',
    data: '51%',
  },
  {
    icon: 'precipitation',
    label: '降水量',
    data: '200mm',
  },
  {
    icon: 'atmospheric_pressure',
    label: '气压',
    data: '100hpa',
  },
]

// 定时器
let waterAreaTimer = null
let interValSafetyTimer = null

export default function index({ onCheckDetails }) {
  const announcementDialogRef = useRef(null)
  const waterAreaRef = useRef(null)
  const eventProcessingWaterloggingRef = useRef(null)
  const eventSinkingDialogRef = useRef(null)

  // 设置redux值
  const dispatch = useDispatch()
  let switchData = useSelector((state: { Switch }) => state.Switch.value)

  const handleOpen = type => {
    // open[type] = !open[type]
    // dispatch(setNetworkMonitoring({ ...open }))
    // setOpen({ ...open })
    onCheckDetails('wellLid')
  }

  /* 初始图表化动画 */
  useEffect(() => {
    if (waterAreaRef.current) {
      setTimeout(() => {
        waterAreaTimer = chartsAnimation(waterAreaRef.current, waterAreaTimer, 6)
      }, 0)
    }
  }, [waterAreaRef.current])
  useEffect(() => {
    if (eventProcessingWaterloggingRef.current) {
      setTimeout(() => {
        interValSafetyTimer = chartsAnimation(eventProcessingWaterloggingRef.current, interValSafetyTimer, 11)
      }, 0)
    }
  }, [eventProcessingWaterloggingRef.current])

  useEffect(() => {
    return () => {
      clearInterval(waterAreaTimer)
      waterAreaTimer = null
      clearInterval(interValSafetyTimer)
      interValSafetyTimer = null
    }
  }, [])

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
  // 图表鼠标移入移出事件
  const handleMouse = (action, type) => {
    if (action === 'enter') {
      if (type === 'area') {
        if (waterAreaTimer) {
          clearInterval(waterAreaTimer)
          waterAreaTimer = null
        }
      } else if (type === 'event') {
        if (interValSafetyTimer) {
          clearInterval(interValSafetyTimer)
          interValSafetyTimer = null
        }
      }
    } else if (action === 'leave') {
      if (type === 'area') {
        waterAreaTimer = chartsAnimation(waterAreaRef.current, waterAreaTimer, 6)
      } else if (type === 'event') {
        interValSafetyTimer = chartsAnimation(eventProcessingWaterloggingRef.current, interValSafetyTimer, 11)
      }
    }
  }

  /* 查看详情按钮 */
  const handleCheckDetails = () => {
    onCheckDetails('waterlogging')
  }

  /* 表格行点击事件 */
  const handleRowClick = (row, type) => {
    if (type === 'announcement') {
      announcementDialogRef.current.handleSetData(row)
    } else {
      eventSinkingDialogRef.current.handleSetData(row)
    }
  }
  return (
    <>
      {/* 左 */}
      <FloatFrame className="left">
        <Box className="waterlogging_left side-wrapper">
          {/* 气象数据和管网监测 */}
          <Grid container className="top">
            <Grid xs={6}>
              <Title title="气象数据" size="small" />
              <Grid container className="meteorological">
                {meteorologicalData.map((data, index) => (
                  <Grid item xs={index % 2 !== 0 ? 5 : 7}>
                    <WeatherModule data={data}></WeatherModule>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid xs={6} style={{ position: 'relative' }}>
              <Title title="设备监测" size="small" />
              <HexagonModule list={hexagonList} onOpen={handleOpen} open={open}></HexagonModule>
              {/* <p className="unit">单位：km²</p> */}
              {/* <DangerLevelLegend></DangerLevelLegend> */}
              <div className="switch">
                <span>水井设备分布</span>
                <Switch checked={switchData.wellLid} onChange={e => handleSwitch(e, 'wellLid')}></Switch>
              </div>
            </Grid>
          </Grid>
          {/* 水体面积监测 */}
          <Box className="water_acreage">
            <Title title="水体面积监测"></Title>
            <Echarts
              ref={waterAreaRef}
              onMouseEnter={() => handleMouse('enter', 'area')}
              onMouseLeave={() => handleMouse('leave', 'area')}
              options={lineOrdinary({
                list: dangerList,
                line: dangerLine,
                xAxisData: xAxisDataDanger,
                grid: { left: 35, top: '20%', bottom: 30, right: '3%' },
              })}
            ></Echarts>
          </Box>

          {/* 窖井盖消息通知 */}
          <Box className="well_lid">
            <Title size="normal" style={{ marginBottom: '10px' }} title="易涝地区监测"></Title>
            <div className="echart">
              <img src={doughnut_chart_style} className="doughnut_chart " />
              <Echarts options={circularRingWaterloggingOption('277')}></Echarts>
            </div>
            <div className="switch">
              <span>易涝点分布</span>
              <Switch checked={switchData.waterAcreage} onChange={e => handleSwitch(e, 'waterAcreage')}></Switch>
            </div>
            <div className="check" onClick={handleCheckDetails}>
              查看内涝分析详情 &gt;&gt;&gt;
            </div>
          </Box>
        </Box>
      </FloatFrame>
      {/* 右 */}
      <FloatFrame className="right">
        <Box className="waterlogging_right side-wrapper">
          {/* 公告消息 */}
          <Box className="table_box">
            <Title title="公告信息" className="mb-10" />
            <Table
              onRowClick={row => handleRowClick(row, 'announcement')}
              columns={announcementColumns}
              data={announcementListData}
              className="announcement_table"
            ></Table>
          </Box>
          {/* 事件处理趋势 */}
          <Box className="event_processing_waterlogging">
            <Title title="事件处理统计" />
            <EventCount />
            <Echarts
              options={doubleBarOption()}
              ref={eventProcessingWaterloggingRef}
              onMouseEnter={() => handleMouse('enter', 'event')}
              onMouseLeave={() => handleMouse('leave', 'event')}
            ></Echarts>
          </Box>
          {/* 事件处理情况 */}
          <Box className="table_box ">
            <Title title="事件处理情况" className="mb-10" />
            <Table
              columns={eventProcessingColumns}
              data={eventProcessingListData}
              className="announcement_table"
              onRowClick={row => handleRowClick(row, 'event')}
            ></Table>
          </Box>
          {/* 弹出框 */}
          <AnnouncementDialog ref={announcementDialogRef}></AnnouncementDialog>

          {/* 事件处理弹出框 */}
          <EventSinkingDialog ref={eventSinkingDialogRef}></EventSinkingDialog>
        </Box>
      </FloatFrame>
    </>
  )
}

// 气象模块
function WeatherModule({ data }) {
  return (
    <div className="weather_module">
      <SvgIcon
        svgName={data.icon}
        svgClass="icon"
        style={{
          minWidth: '10px !important',
          minHeight: '10px !important',
        }}
      ></SvgIcon>
      <div className="right">
        <p className="label">{data.label}</p>
        <p className="data">{data.data}</p>
      </div>
    </div>
  )
}
