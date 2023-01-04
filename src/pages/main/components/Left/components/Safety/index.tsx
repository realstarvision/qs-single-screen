import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, DialogTitle, DialogContent, DialogContentText, Divider } from '@mui/material'
import Dialog from '@/components/Dialog'
import { useSelector, useDispatch } from 'react-redux'
import { setWms } from '@/store/module/wms'
import { setDangerLevel } from '@/store/module/dangerLevel'

import Echarts from '@/components/Echarts'
import { linearGradientOption, circularRingOption } from '../../echartOption'
import { menuList, mapTabs, list, line, xAxisData, dangerList, dangerLine, xAxisDataDanger } from './json'
import './style.scss'

// 图片
import subsidence_area from '@/assets/image/charts/subsidence_area.png'
import menu_active_bg from '@/assets/image/png/menu_active_bg.png'
import menu_bg from '@/assets/image/png/menu_bg.png'
import area_change from '@/assets/image/charts/area_change.png'
import history_data from '@/assets/image/charts/history_data.png'
import hazard_level from '@/assets/image/charts/hazard_level.png'
import danger from '@/assets/image/charts/danger.png'
import steady from '@/assets/image/charts/steady.png'
import fluctuate from '@/assets/image/charts/fluctuate.png'
import dangerChecked from '@/assets/image/charts/danger_checked.png'
import steadyChecked from '@/assets/image/charts/steady_checked.png'
import fluctuateChecked from '@/assets/image/charts/fluctuate_checked.png'
import subsidence_area_tab from '@/assets/image/charts/subsidence_area_tab.png'
import doughnut_chart_style from '@/assets/image/charts/doughnut_chart_style.png'

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
  const threatLevelEchartRef = useRef(null)
  const dangerLevelEchartRef = useRef(null)
  // let open = useSelector((state: { dangerLevel }) => state.dangerLevel.value)
  // 设置redux值
  const dispatch = useDispatch()

  // 沉降面积圆环标题
  let [title, setTitle] = useState('16.8')

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
  }, [])

  /* 地图标签切换事件 */
  const handleMapTabClick = index => {
    // 全局存储卫星列表数据
    if (mapTabActive !== index) {
      setMapTabActive(index)
      dispatch(setWms(menuList[index]))
    }

    /* 重置危险等级 */
    if (index !== 0) {
      Object.keys(open).forEach(item => {
        open[item] = false
      })
      setOpen({ ...open })
      dispatch(setDangerLevel({ ...open }))
    }

    // 切换计算面积
    if (index == 0 || index == 3) {
      subsidenceAreaEchartRef.current.setOption({
        title: {
          text: '16.8',
        },
      })
    } else {
      subsidenceAreaEchartRef.current.setOption({
        title: {
          text: '5',
        },
      })
    }

    // 控制图标legend选中
    subsidenceAreaEchartRef.current.setOption({
      legend: {
        selected: {
          ['道路']: index == 2 ? false : true,
          ['桥梁']: index == 1 ? false : true,
          ['其它']: index == 1 || index == 2 ? false : true,
        },
      },
    })
    threatLevelEchartRef.current.setOption({
      legend: {
        selected: {
          ['道路']: index == 2 ? false : true,
          ['桥梁']: index == 1 ? false : true,
          ['其它']: index == 1 || index == 2 ? false : true,
        },
      },
    })
  }

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

  return (
    <Box className="safety">
      {/* AI沉降风险预测 */}
      {/* <Box className="subsidence_risk_prediction">
        <img src={subsidence_risk_prediction} />
        <Echarts options={subsidenceRiskPredictionOption()}></Echarts>
      </Box> */}
      <Grid container className="subsidence_risk_prediction">
        <Grid xs={6} className="subsidence_area">
          <img src={subsidence_area_tab} />
          <img src={doughnut_chart_style} className="doughnut_chart" />
          <Echarts options={circularRingOption(title)} ref={subsidenceAreaEchartRef}></Echarts>
        </Grid>
        <Grid xs={6} className="threat_level">
          <img src={history_data} />
          <Echarts
            ref={threatLevelEchartRef}
            options={linearGradientOption({
              list,
              line,
              xAxisData,
              grid: { left: 35, top: '25%', bottom: 20, right: '3%' },
            })}
          ></Echarts>
          <p className="unit">单位：km²</p>
        </Grid>
      </Grid>
      {/* 沉降面积和危险等级 */}
      <Grid container className="middle">
        <Grid xs={6}>
          <img src={hazard_level} className="img" />
          <Box>
            <img
              src={open.danger ? dangerChecked : danger}
              className="honeycomb_icon danger"
              style={{
                transform: `scale(${open.danger ? 1.2 : 1})`,
              }}
              onClick={() => handleOpen('danger')}
            />
            <img
              src={open.steady ? steadyChecked : steady}
              className="honeycomb_icon steady"
              style={{
                transform: `scale(${open.steady ? 1.2 : 1})`,
              }}
              onClick={() => handleOpen('steady')}
            />
            <img
              src={open.fluctuate ? fluctuateChecked : fluctuate}
              className="honeycomb_icon fluctuate"
              style={{
                transform: `scale(${open.fluctuate ? 1.2 : 1})`,
              }}
              onClick={() => handleOpen('fluctuate')}
            />
          </Box>
        </Grid>
        <Grid xs={6} className="threat_level">
          <img src={area_change} />
          <Echarts
            ref={dangerLevelEchartRef}
            options={linearGradientOption({
              list: dangerList,
              line: dangerLine,
              xAxisData: xAxisDataDanger,
              grid: { left: 35, top: '25%', bottom: 20, right: '3%' },
              lineStyle: ['#05D201', '#D28B01', '#D20101'],
              color: ['5,210,1', '210, 139, 1', '210,1,1'],
              unit: 'km²',
            })}
          ></Echarts>
          <p className="unit">单位：km²</p>
        </Grid>
      </Grid>
      {/* 累计沉降量 */}
      <Box className="cumulative_settlement_volume">
        {/* 切换地图内容 */}
        <Box className="map_tabs">
          {mapTabs.map((tab, index) => (
            <Box className="tab" onClick={() => handleMapTabClick(index)}>
              <img src={mapTabActive === index ? tab.activeName : tab.name} className={'bg'}></img>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
