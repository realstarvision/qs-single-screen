import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react'
import { Box, Fade, Grid, FormLabel, MenuItem } from '@mui/material'
import Input from '@/components/Input'
import MyMenuItem from '@/components/MenuItem'
import { keyArea } from '@/components/Map/json'
import { useSelector, useDispatch } from 'react-redux'
import { setTerrainClassificationActive } from '@/store/module/terrainClassificationActive'
import SvgIcon from '@/components/SvgIcon'
import time_bar from '@/assets/image/keyAreas/time_bar.png'
import { circularRingOption, surfaceCircularRingOption } from './option'
import Echarts from '@/components/Echarts'
import { waterlogging } from '@/components/Map/json'
import { colourStripData, echartTabs, hazardLevel, tabs, detailsInfo } from './json'

// 图片
import waterlogging_title from '@/assets/image/charts/waterlogging_title.png'
// import back_btn from '@/assets/image/png/back_btn.png'
import buttonIcon from '@/assets/image/png/button_icon.png'
// import buttonActiveIcon from '@/assets/image/png/button_active_icon.png'
import colour_strip from '@/assets/image/png/colour_strip.png'
import colour_strip_DSM from '@/assets/image/png/colour_strip_DSM.png'

// 样式
import './style.scss'
import '../common.scss'

function index({ onBack, waterloggingId, onItemClick, onWaterloggingActive }, ref) {
  // 设置redux值
  const dispatch = useDispatch()
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
  // tab选中项
  let [active, setActive] = useState(2)
  // echartTab选中项

  useImperativeHandle(ref, () => ({
    setActive,
  }))

  useEffect(() => {
    let itemData: any = [...waterlogging].find(item => {
      return item.id === waterloggingId
    })
    Object.keys(data).forEach(item => {
      data[item] = itemData[item]
    })
    setData({ ...data })
    setActive(2)
    setVisible(true)
  }, [waterloggingId])

  /* 监听tab选择项 如果为0就隐藏右侧栏 */
  useEffect(() => {
    if (active === 0) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    onWaterloggingActive(active)
  }, [active])

  /* 返回按钮 */
  const handleBack = () => {
    // dispatch(setTerrainClassificationActive(0))
    onBack()
  }

  /* 列表项点击事件 */
  const handleItemClick = itemData => {
    // keyArea.forEach(ele => {
    //   ele.icon = ele.defaultIcon
    // })
    // item.icon = item.activeIcon
    Object.keys(data).forEach(item => {
      data[item] = itemData[item]
    })
    setData({ ...data })
    onItemClick(itemData.coordinates)
    setActive(2)
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
    setActive(index)
  }

  /* echartTabs 的点击事件 */
  const handleEchartTabClick = index => {
    // setEchartTabActive(index)
    // if (index === 0 || index === 1 || index === 2) {
    dispatch(setTerrainClassificationActive(index))
    // }
  }

  return (
    <>
      <Box className={'leftBox leftBox_waterlogging'}>
        <Box className={'left'}>
          <img src={waterlogging_title}></img>
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
                  width: '70%',
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
          <Box className="title_bar">
            {active === 2 && (
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

            <SvgIcon
              svgName="closeX"
              svgClass="closeX"
              onClick={() => {
                setVisible(false)
              }}
            ></SvgIcon>
          </Box>
          {active === 2 && (
            <Box className="content_area ">
              <p
                className="mt font mt-30"
                style={{
                  display: 'flex',
                }}
              >
                <span>经纬度：</span>
                <div>
                  {data.coordinates.length > 0 ? data.coordinates[0] : ''}
                  <br />
                  {data.coordinates.length > 0 ? data.coordinates[1] : ''}
                </div>
              </p>
              <p className="mt font">详细地址：{data.position}</p>
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
                    <div className="echart_tab" onClick={() => handleEchartTabClick(index)}>
                      <SvgIcon
                        svgClass="icon"
                        svgName={terrainClassificationActive === index ? item.activeIcon : item.icon}
                      ></SvgIcon>
                      <p
                        style={{
                          color: terrainClassificationActive === index ? '#77B5FF' : '#2D7FE0',
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="soilWaterContentDetails_box">
                <p className="title">{active === 1 ? '地物分类信息' : '土壤湿度信息'}</p>
                <p className="details">
                  {active === 1
                    ? detailsInfo[0].map(item => {
                        return (
                          <span>
                            {item}
                            <br />
                          </span>
                        )
                      })
                    : detailsInfo[1].map(item => {
                        return (
                          <span>
                            {item} <br />
                          </span>
                        )
                      })}
                  {/* {echartTabs[terrainClassificationActive].waterContentData.description} */}
                </p>
              </div>
            </Box>
          )}
        </Box>
      </Fade>
      {/* 时间条 */}
      <img src={time_bar} className="time_bar" />
      {/* 标签栏 */}
      <Box className="waterlogging_tabs">
        {tabs.map(tab => (
          <Box className="tab" onClick={() => handleTabClick(tab.id)}>
            {/* <img src={tab.id == active ? buttonActiveIcon : buttonIcon} /> */}
            <p style={{ color: tab.id == active ? '#61A8FC' : '#fff' }}>{tab.title}</p>
          </Box>
        ))}
      </Box>
      {/* 返回按钮 */}
      {/* <img src={back_btn} className="back_btn" onClick={handleBack} /> */}

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
