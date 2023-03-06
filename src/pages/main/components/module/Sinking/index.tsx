import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setWms } from '@/store/module/wms'
import { setDangerLevel } from '@/store/module/dangerLevel'
// 组件
import Echarts from '@/components/Echarts'
import Table from '@/components/Table'
import FloatFrame from '../../FloatFrame'
import Title from '../../Title'
import HexagonModule from '../../HexagonModule'
import KeyAreasTabs from '../../KeyAreasTabs'
import EventCount from '../../EventCount'
// 数据样式
import { linearGradientOption, circularRingOption, doubleBarOption } from '../../echartOption'
import {
  menuList,
  list,
  line,
  xAxisData,
  list1,
  line1,
  xAxisData1,
  dangerList,
  dangerLine,
  xAxisDataDanger,
  announcementColumns,
  announcementListData,
  eventProcessingColumns,
  eventProcessingListData,
  dangerLevelHexagonList,
} from './json'
import AnnouncementDialog from '@/pages/AnnouncementDialog'
import './style.scss'
import '@/pages/main/components/FloatFrame/style.scss'

// 图片
import doughnut_chart_style from '@/assets/image/charts/doughnut_chart_style.png'

// 定时器
let historyDataTimer = null
let areaChangeTimer = null
let interValSafetyTimer = null

// 沉降面积圆环数据
let doughnutChartData = [
  { value: 5, name: '道路' },
  { value: 5, name: '桥梁' },
  { value: 6.8, name: '其它' },
]

export default function index() {
  let [mapTabActive, setMapTabActive] = useState(0)
  // redux获取未读消息数据
  let [open, setOpen] = useState({
    danger: false,
    steady: false,
    fluctuate: false,
  })
  const subsidenceAreaEchartRef = useRef(null)
  const historyDataEchartRef = useRef(null)
  const dangerLevelEchartRef = useRef(null)
  const announcementDialogRef = useRef(null)
  const eventProcessingSafetyRef = useRef(null)
  // let open = useSelector((state: { dangerLevel }) => state.dangerLevel.value)
  // 设置redux值
  const dispatch = useDispatch()

  // 沉降面积数据
  let [subsidenceArea, setSubsidenceArea] = useState([
    { value: 5, name: '上升' },
    { value: 5, name: '下降' },
  ])

  // 初始化
  useEffect(() => {
    if (historyDataEchartRef.current) {
      setTimeout(() => {
        historyDataTimer = chartEvent(historyDataEchartRef.current, historyDataTimer)
      }, 0)
    }
  }, [historyDataEchartRef.current])

  useEffect(() => {
    if (dangerLevelEchartRef.current) {
      setTimeout(() => {
        areaChangeTimer = chartEvent(dangerLevelEchartRef.current, areaChangeTimer)
      }, 0)
    }
  }, [dangerLevelEchartRef.current])

  useEffect(() => {
    if (eventProcessingSafetyRef.current) {
      setTimeout(() => {
        interValSafetyTimer = chartEvent(eventProcessingSafetyRef.current, interValSafetyTimer)
      }, 0)
    }
  }, [eventProcessingSafetyRef.current])

  // 初始化
  useEffect(() => {
    setTimeout(() => {
      dispatch(setWms(menuList[0]))
      /* 监听legend改变来计算面积 */
      subsidenceAreaEchartRef.current.myChart.on('legendselectchanged', function (obj) {
        let count = 0
        console.log(obj.selected)
        Object.keys(obj.selected).map(item => {
          if (obj.selected[item]) {
            let n = doughnutChartData.find(data => {
              if (data.name === item) {
                return data
              }
            })
            count += n.value
          }
        })
        subsidenceAreaEchartRef.current.setOption({
          title: {
            text: count + '',
          },
        })
      })
    }, 300)

    return function () {
      clearInterval(historyDataTimer)
      clearInterval(areaChangeTimer)
      clearInterval(interValSafetyTimer)
      historyDataTimer = null
      areaChangeTimer = null
      interValSafetyTimer = null
    }
  }, [])

  useEffect(() => {
    /* 重置危险等级 */
    // if (mapTabActive !== 0) {
    Object.keys(open).forEach(item => {
      open[item] = false
    })
    setOpen({ ...open })
    dispatch(setDangerLevel({ ...open }))
    // }
    // 改变图表数据
    if (mapTabActive === 0) {
      setSubsidenceArea([
        { value: 5, name: '上升' },
        { value: 5, name: '下降' },
      ])
      dangerLevelHexagonList.forEach(item => {
        item.value = '5.00'
      })
    } else if (mapTabActive === 1) {
      setSubsidenceArea([
        { value: 1, name: '上升' },
        { value: 3, name: '下降' },
      ])
      dangerLevelHexagonList.forEach(item => {
        item.value = '4.00'
      })
    } else if (mapTabActive === 2) {
      setSubsidenceArea([
        { value: 8, name: '上升' },
        { value: 6, name: '下降' },
      ])
      dangerLevelHexagonList.forEach(item => {
        item.value = '3.00'
      })
    } else if (mapTabActive === 3) {
      setSubsidenceArea([
        { value: 7, name: '上升' },
        { value: 2, name: '下降' },
      ])
      dangerLevelHexagonList.forEach(item => {
        item.value = '2.00'
      })
    }

    // 图表变化
    // chartsChange()
  }, [mapTabActive])

  /* 地图标签切换事件 */
  const handleMapTabClick = index => {}

  const handleOpen = type => {
    if (mapTabActive === 0) {
      open[type] = !open[type]
      dispatch(setDangerLevel({ ...open }))
      setOpen({ ...open })
    }
    // 没有选中的情况
    let isAll = Object.keys(open).findIndex(item => {
      if (open[item]) {
        return item
      }
    })
    // 设置
    dangerLevelEchartRef.current.setOption({
      legend: {
        selected: {
          ['平稳']: open.steady || isAll === -1 ? true : false,
          ['有波动']: open.fluctuate || isAll === -1 ? true : false,
          ['危险']: open.danger || isAll === -1 ? true : false,
        },
      },
    })
  }

  /* 表格行点击事件 */
  const handleRowClick = row => {
    console.log(row)
    announcementDialogRef.current.handleSetData(row)
  }

  // 定时器滚动事件
  function chartEvent(ref, timerName, length = 6, endValue = 2, startValue = 0, timeout = 3500) {
    // 定时器
    if (timerName) {
      clearInterval(timerName)
    }
    let timer = setInterval(function () {
      // 每次向后滚动一个，最后一个从头开始。
      let option = ref.myChart.getModel().option
      let obj
      if (option.dataZoom[0].endValue == length) {
        obj = {
          startValue: startValue,
          endValue: endValue,
        }
      } else {
        obj = {
          startValue: option.dataZoom[0].startValue + 1,
          endValue: option.dataZoom[0].endValue + 1,
        }
      }
      ref.setOption({
        dataZoom: [obj],
      })
    }, timeout)
    return timer
  }

  /* 图表鼠标移入移出事件 */
  const handleChartMouse = (action, type) => {
    if (action === 'enter') {
      if (type === 'history') {
        if (historyDataTimer) {
          clearInterval(historyDataTimer)
          historyDataTimer = null
        }
      } else if (type === 'area') {
        if (areaChangeTimer) {
          clearInterval(areaChangeTimer)
          areaChangeTimer = null
        }
      } else if (type === 'event') {
        if (interValSafetyTimer) {
          clearInterval(interValSafetyTimer)
          interValSafetyTimer = null
        }
      }
    } else if (action === 'leave') {
      if (type === 'history') {
        historyDataTimer = chartEvent(historyDataEchartRef.current, historyDataTimer)
      } else if (type === 'area') {
        areaChangeTimer = chartEvent(dangerLevelEchartRef.current, areaChangeTimer)
      } else if (type === 'event') {
        interValSafetyTimer = chartEvent(eventProcessingSafetyRef.current, interValSafetyTimer)
      }
    }
  }

  return (
    <>
      {/* 左 */}
      <FloatFrame className="left">
        <Box className="sinking_left">
          <Grid spacing={{ xs: 2 }} container className="subsidence_risk_prediction">
            <Grid xs={6} className="subsidence_area">
              {/* <img src={subsidence_area_tab} /> */}
              <Title
                title="沉降面积"
                size="normal"
                style={{
                  marginBottom: '5px',
                }}
              />
              <div className="chart-box">
                <img src={doughnut_chart_style} className="doughnut_chart " />
                <Echarts options={circularRingOption(subsidenceArea)} ref={subsidenceAreaEchartRef}></Echarts>
              </div>
            </Grid>
            <Grid xs={6} className="threat_level">
              <Title title="历史数据" size="normal" />
              <Echarts
                ref={historyDataEchartRef}
                onMouseEnter={() => handleChartMouse('enter', 'history')}
                onMouseLeave={() => handleChartMouse('leave', 'history')}
                options={linearGradientOption({
                  list,
                  line,
                  xAxisData,
                  grid: { left: 35, top: '22%', bottom: 20, right: '3%' },
                })}
              ></Echarts>
              {/* <p className="unit">单位：km²</p> */}
            </Grid>
          </Grid>
          {/* 沉降面积和危险等级 */}
          <Grid container className="middle">
            <Grid xs={6}>
              <Title title="危险等级" size="small" />
              <HexagonModule list={dangerLevelHexagonList} onOpen={handleOpen} open={open}></HexagonModule>
            </Grid>
            <Grid xs={6} className="threat_level">
              <Title title="面积变化" size="small" />
              <Echarts
                ref={dangerLevelEchartRef}
                onMouseEnter={() => handleChartMouse('enter', 'area')}
                onMouseLeave={() => handleChartMouse('leave', 'area')}
                options={linearGradientOption({
                  list: dangerList,
                  line: dangerLine,
                  xAxisData: xAxisDataDanger,
                  grid: { left: 35, top: '22%', bottom: 20, right: '3%' },
                  lineStyle: ['#05D201', '#D28B01', '#D20101'],
                  color: ['5,210,1', '210, 139, 1', '210,1,1'],
                  unit: 'km²',
                })}
              ></Echarts>
              <p className="unit">单位：km²</p>
            </Grid>
          </Grid>
          {/* 累计沉降量 */}
          <KeyAreasTabs active={mapTabActive} onClick={handleMapTabClick}></KeyAreasTabs>
        </Box>
      </FloatFrame>

      {/* 右 */}
      <FloatFrame className="right">
        <Box className="sinking_right">
          {/* 公告消息 */}
          <Box className="table_box">
            <Title
              size="normal"
              style={{
                marginBottom: '10px',
              }}
              title="公告信息"
            />
            <Table
              columns={announcementColumns}
              data={announcementListData}
              className="announcement_table"
              onRowClick={handleRowClick}
            ></Table>
          </Box>
          {/* 事件处理趋势 */}
          <Box className="event_processing_sinking">
            <Title size="normal" title="事件处理统计" />
            <EventCount />
            <Echarts
              options={doubleBarOption()}
              ref={eventProcessingSafetyRef}
              onMouseEnter={() => handleChartMouse('enter', 'event')}
              onMouseLeave={() => handleChartMouse('leave', 'event')}
            ></Echarts>
          </Box>
          {/* 事件处理情况 */}
          <Box className="table_box">
            <Title
              size="normal"
              title="事件处理情况"
              style={{
                marginBottom: '10px',
              }}
            />
            <Table
              columns={eventProcessingColumns}
              data={eventProcessingListData}
              className="announcement_table"
            ></Table>
          </Box>

          {/* 弹出框 */}
          <AnnouncementDialog ref={announcementDialogRef}></AnnouncementDialog>
          {/* 事件处理弹出框 */}
          {/* <EventSinkingDialog ref={eventSinkingDialogRef}></EventSinkingDialog> */}
        </Box>
      </FloatFrame>
    </>
  )
}
