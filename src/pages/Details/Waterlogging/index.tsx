import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react'
import { Box, Fade, Grid, FormLabel, MenuItem } from '@mui/material'
import Input from '@/components/Input'
import MyMenuItem from '@/components/MenuItem'
import Title from '@/pages/main/components/Title'
import TimeBar from '@/components/TimeBar'
import WaterloggingTab from '@/pages/main/components/WaterloggingTab'
import { useSelector, useDispatch } from 'react-redux'
import { setTerrainClassificationActive } from '@/store/module/terrainClassificationActive'
import SvgIcon from '@/components/SvgIcon'
import { circularRingOption, surfaceCircularRingOption } from './option'
import Echarts from '@/components/Echarts'
import { waterlogging } from '@/components/Map/json'
import { colourStripData, echartTabs, hazardLevel, waterloggingTabs, detailsInfo } from './json'

// 图片
import colour_strip from '@/assets/image/png/colour_strip.png'

// 样式
import './style.scss'
import '../common.scss'

function index({ active, waterloggingId, onItemClick, setActive }, ref) {
  // 设置redux值
  const dispatch = useDispatch()
  // 地物分类信息
  let terrainClassificationActive = useSelector(
    (state: { terrainClassificationActive }) => state.terrainClassificationActive.value
  )
  // 显示状态
  let [visible, setVisible] = useState(true)
  // 列表
  const [list, setList] = useState([...waterlogging])
  // 数据
  let [data, setData] = useState({
    id: 0,
    title: '',
    state: 0,
    coordinates: [],
    acreage: '',
    mapImg: '',
    position: '',
  })
  // 参数
  const [formParams, setFormParams] = useState({
    state: 0,
  })

  useImperativeHandle(ref, () => ({}))

  useEffect(() => {
    let itemData: any = [...waterlogging].find(item => {
      return item.id === waterloggingId
    })
    Object.keys(data).forEach(item => {
      data[item] = itemData[item]
    })
    setData({ ...data })
    setActive(-1)
    setVisible(true)
  }, [waterloggingId])

  /* 列表项点击事件 */
  const handleItemClick = itemData => {
    // keyArea.forEach(ele => {
    //   ele.icon = ele.defaultIcon
    // })
    // item.icon = item.activeIcon
    onItemClick(itemData)
    setActive(-1)
    setVisible(true)
  }

  /* 下拉框选择 */
  const handleInputChange = (e, type) => {
    formParams[type] = e.target.value
    setFormParams({ ...formParams })
    let newList = []
    if (formParams.state !== 0) {
      newList = [...waterlogging].filter(item => {
        if (item.state === formParams.state) {
          return item
        }
      })
    } else {
      newList = [...waterlogging]
    }
    setList([...newList])
  }

  /* tab点击事件 */
  const handleTabClick = index => {
    let terrainClassification = null
    if (index === 1) {
      terrainClassification = echartTabs[0]
    } else if (index === 2) {
      terrainClassification = null
    } else if (index === 0 || index === 3) {
      let data = waterloggingTabs.find(item => {
        return item.id === index
      })
      terrainClassification = {
        layers: data.layers,
      }
    }
    dispatch(setTerrainClassificationActive(terrainClassification))
    setActive(index)
  }

  /* echartTabs 的点击事件 */
  const handleEchartTabClick = item => {
    // setEchartTabActive(index)
    // if (index === 0 || index === 1 || index === 2) {
    dispatch(setTerrainClassificationActive(item))
    // }
  }

  /* 十二期选择器的点击事件 */
  const handleTimeBarClick = active => {
    console.log(active)
  }

  return (
    <>
      <Box className={'leftBox leftBox_waterlogging'}>
        <Box className={'left'}>
          <Box className="top">
            <Title title="易涝区列表"></Title>
            <Grid container spacing={{ xs: 1 }} className="from">
              <Grid item xs={6} className="from-item">
                <FormLabel component="span" className="label">
                  危险等级
                </FormLabel>
                <Input
                  select
                  required
                  id="phoneInput"
                  size="small"
                  placeholder="危险等级"
                  value={formParams.state}
                  onChange={e => handleInputChange(e, 'state')}
                  autoComplete="off"
                  sx={{
                    width: '55%',
                  }}
                >
                  {hazardLevel.map((item, index) => (
                    <MyMenuItem key={index} value={index}>
                      {item}
                    </MyMenuItem>
                  ))}
                </Input>
              </Grid>
            </Grid>
          </Box>
          <Box className={'list'}>
            {list.map((item, index) => (
              <Box onClick={() => handleItemClick(item)} className={'item ' + (item.id === data.id ? 'active' : '')}>
                <p className={'title'}>
                  <span>
                    <SvgIcon svgName="waterlogging_text"></SvgIcon>
                    <span
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      {item.title}
                    </span>
                  </span>
                  <p
                    className={
                      'tigs ' + (item.state === 1 ? 'tigs_green' : item.state === 2 ? 'tigs_yellow' : 'tigs_red')
                    }
                  >
                    {hazardLevel[item.state]}
                  </p>
                </p>
                <p className={'time'}>
                  <SvgIcon svgName="place"></SvgIcon>
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    {item.place}
                  </span>
                </p>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Fade in={visible}>
        <Box className={'rightBox rightBox_waterlogging'}>
          <Box className="rightBox-warpper">
            {/* 叉叉 */}
            {active !== -1 && (
              <div className="closeX-box">
                <SvgIcon
                  svgName="closeX"
                  svgClass="closeX"
                  onClick={() => {
                    setActive(-1)
                  }}
                ></SvgIcon>
              </div>
            )}
            {/* 点位的详情 */}
            <Box className="title_bar">
              {active === -1 && (
                <div className="title_info">
                  <span className="title">{data.title}</span>
                  <p
                    className={
                      'tigs ' + (data.state === 1 ? 'tigs_green' : data.state === 2 ? 'tigs_yellow' : 'tigs_red')
                    }
                  >
                    {hazardLevel[data.state]}
                  </p>
                </div>
              )}
              {active === 1 && <span className="title_model">地物分类</span>}
              {active === 3 && <span className="title_model">土壤湿度</span>}
            </Box>
            {active === -1 && (
              <Box className="content_area ">
                <p
                  className="mt font mt-30"
                  style={{
                    display: 'flex',
                  }}
                >
                  <span>位置：</span>
                  <div>{data.position}</div>
                </p>
                <p className="mt font">易涝面积：{data.acreage}</p>
                <p className="mt font">地理显示</p>
                <img
                  src={data.mapImg}
                  style={{
                    width: '100%',
                  }}
                ></img>
              </Box>
            )}
            {/* 图表 */}
            {(active === 1 || active === 3) && (
              <Box className="content_model">
                <div className="soilWaterContentEchart_box">
                  {active == 1 ? (
                    <Echarts options={surfaceCircularRingOption()}></Echarts>
                  ) : (
                    <Echarts options={circularRingOption()}></Echarts>
                  )}
                </div>
                {active === 1 && (
                  <div className="echart_tab_box">
                    {echartTabs.map((item, index) => (
                      <div className="echart_tab" onClick={() => handleEchartTabClick(item)}>
                        <SvgIcon
                          svgClass="icon"
                          svgName={
                            terrainClassificationActive && terrainClassificationActive.id === item.id
                              ? item.activeIcon
                              : item.icon
                          }
                        ></SvgIcon>
                        <p
                          style={{
                            color:
                              terrainClassificationActive && terrainClassificationActive.id === item.id
                                ? '#77B5FF'
                                : '#2D7FE0',
                          }}
                        >
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Box>
            )}
            {/* 详情描述 */}
            {active !== -1 && (
              <div className="soilWaterContentDetails_box">
                <p className="title">
                  {waterloggingTabs.find(item => {
                    return item.id === active
                  }).title + '信息'}
                </p>
                <p className="details">
                  <span>
                    {
                      waterloggingTabs.find(item => {
                        return item.id === active
                      }).details
                    }
                  </span>
                </p>
              </div>
            )}
          </Box>
        </Box>
      </Fade>
      {/* 时间轴 */}
      <div className="time_bar">
        <TimeBar dataIndex={1} onClick={handleTimeBarClick}></TimeBar>
      </div>

      {/* 标签栏 */}
      <WaterloggingTab list={waterloggingTabs} active={active} onChange={handleTabClick}></WaterloggingTab>

      {/* 色带 */}
      {(active === 3 || active === 0) && (
        <Box className="colour_strip_details-box">
          <span>{colourStripData[active].top}</span>
          <img src={colour_strip} className="colour_strip" />
          <span>{colourStripData[active].bottom}</span>
        </Box>
      )}
    </>
  )
}

export default forwardRef(index)
