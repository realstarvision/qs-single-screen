import React, { useEffect, useState } from 'react'
import { Box, Fade } from '@mui/material'
import { keyArea } from '@/components/Map/json'
import SvgIcon from '@/components/SvgIcon'
import key_settlement_area_title from '@/assets/image/keyAreas/key_settlement_area_title.png'
import time_bar from '@/assets/image/keyAreas/time_bar.png'
import { circularRingOption, linearGradientOption } from './option'
import Echarts from '@/components/Echarts'
import rectangle from '@/assets/image/map/rectangle.png'
// import back_btn from '@/assets/image/png/back_btn.png'
import { keyArea as keyArealist, roadPoinList, bridgePoinList } from '@/components/Map/json'
import './style.scss'
import '../common.scss'

export default function index({ onBack, keyAreaId, onItemClick, type }) {
  let line = ['道路', '桥梁', '建筑']
  let xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

  // 显示状态
  let [visible, setVisible] = useState(true)
  // 数据
  let [data, setData] = useState({
    id: 0,
    lineChartData: [],
    time: '',
    accumulativeTotal: '',
    acreage: '',
    circularRingData: [],
    title: '',
    type: '',
  })

  // 列表
  let [list, setList] = useState([])

  useEffect(() => {
    let itemData: any = [...keyArealist, ...roadPoinList, ...bridgePoinList].find(item => {
      return item.id === keyAreaId
    })
    let listData = []
    switch (type) {
      case 'keyArea':
        listData = keyArealist
        break
      case 'road':
        listData = roadPoinList
        break
      case 'bridge':
        listData = bridgePoinList
        break
      case 'danger':
        listData = [...keyArealist, ...roadPoinList, ...bridgePoinList].filter(item => {
          return item.type === 'danger'
        })
        break
      case 'fluctuate':
        listData = [...keyArealist, ...roadPoinList, ...bridgePoinList].filter(item => {
          return item.type === 'fluctuate'
        })
        break
    }
    Object.keys(data).forEach(item => {
      data[item] = itemData[item]
    })
    setData({ ...data })
    setList(listData)
  }, [keyAreaId])

  /* 返回按钮 */
  const handleBack = () => {
    onBack()
  }

  /* 列表项点击事件 */
  const handleItemClick = itemData => {
    Object.keys(data).forEach(item => {
      data[item] = itemData[item]
    })
    setData({ ...data })
    onItemClick(itemData.coordinates)
    setVisible(true)
  }
  return (
    <>
      <Box className={'leftBox leftBox_keyAreas'}>
        <Box className={'left'}>
          <img src={key_settlement_area_title}></img>

          <Box className={'list'}>
            {list.map((item, index) => (
              <Box onClick={() => handleItemClick(item)} className={'item ' + (item.id === data.id ? 'active' : '')}>
                <p className={'title'}>{item.title}</p>
                <p className={'time'}>{item.time}</p>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Fade in={visible}>
        <Box className={'rightBox rightBox_keyAreas'}>
          <Box className="title_bar">
            <div className="title_info">
              <span className="title">{data.title}</span>
              <div
                className={
                  'tigs ' +
                  (data.type == 'danger' ? 'tigs_red' : data.type == 'fluctuate' ? 'tigs_yellow' : 'tigs_green')
                }
              >
                {data.type === 'danger' ? '危险区域' : data.type === 'fluctuate' ? '波动区域' : '平稳区域'}
              </div>
            </div>
            <SvgIcon
              svgName="closeX"
              svgClass="closeX"
              onClick={() => {
                setVisible(false)
              }}
            ></SvgIcon>
          </Box>
          <img
            src={rectangle}
            style={{
              width: '70%',
            }}
          />
          <p className="mt font">监测时间：{data.time}</p>
          <p className="mt font">累计沉降：{data.accumulativeTotal}</p>
          <p className="mt font">沉降面积统计</p>
          <div className="subsidenceAreaEchart_box">
            <Echarts options={circularRingOption(data.acreage, data.circularRingData)}></Echarts>
          </div>
          <p className="font">沉降趋势统计</p>
          <div className="trendSettlementEchart_box">
            <Echarts
              options={linearGradientOption({
                list: data.lineChartData,
                line,
                xAxisData,
                grid: { left: 35, top: '20%', bottom: 20, right: '3%' },
              })}
            ></Echarts>
          </div>
        </Box>
      </Fade>

      <img src={time_bar} className="time_bar" />
      {/* <img src={back_btn} className="back_btn" onClick={handleBack} /> */}
    </>
  )
}
