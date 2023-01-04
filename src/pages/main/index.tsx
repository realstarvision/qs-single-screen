import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, Typography, TextField, MenuItem, Snackbar, Slide } from '@mui/material'
import { setWms } from '@/store/module/wms'
import { setDangerLevel, reset } from '@/store/module/dangerLevel'
import { reset as resetNetworkMonitoring } from '@/store/module/networkMonitoring'
import { useSelector, useDispatch } from 'react-redux'
import Center from './components/Center'
import Left from './components/Left'
import Right from './components/Right'
import Map from '@/components/Map'
import KeyAreasDetails from '@/pages/Details/KeyAreas'
import WellLid from '@/pages/Details/WellLid'
import Waterlogging from '@/pages/Details/Waterlogging'
import Garbage from '@/pages/Details/Garbage'
import FlowImageDialog from '@/pages/FlowImageDialog'
import { setSwitch } from '@/store/module/switch'
import { waterlogging, wellLid1, wellLid2 } from '@/components/Map/json'
import SvgIcon from '@/components/SvgIcon'
import './style.scss'

// 图片
import safetyImage from '@/assets/image/tabs/safety.png'
import safetyActiveImage from '@/assets/image/tabs/safety_active.png'
import garbagesortingImage from '@/assets/image/tabs/garbagesorting.png'
import garbagesortingActiveImage from '@/assets/image/tabs/garbagesorting_active.png'
import waterloggingImage from '@/assets/image/tabs/waterlogging.png'
import waterloggingActiveImage from '@/assets/image/tabs/waterlogging_active.png'
import quitImg from '@/assets/image/btn/quit.png'
import enterImg from '@/assets/image/btn/enter.png'
import doc_file from '@/assets/image/doc/doc_file.png'
import doc_flow from '@/assets/image/doc/doc_flow.png'
import colour_strip_safety from '@/assets/image/png/colour_strip_safety.png'

let tabs = [
  [safetyImage, safetyActiveImage],
  [waterloggingImage, waterloggingActiveImage],
  [garbagesortingImage, garbagesortingActiveImage],
]

export default function index() {
  const waterloggingRef = useRef(null)
  const flowImageDialogRef = useRef(null)
  const map = useRef(null)
  // 标签选择   0:护民地质安全监测   1:保民降水内涝监测   2:便民垃圾分类监测
  let [active, setActive] = useState(0)
  // 设置redux值
  const dispatch = useDispatch()
  let switchData = useSelector((state: { Switch }) => state.Switch.value)
  // 重点区详情显示状态  // 0代表关闭
  let [keyAreaId, setKeyAreaId] = useState(0)
  let [type, setType] = useState('')
  // 水井详情显示状态  // 0代表关闭
  let [wellLidId, setWellLidId] = useState(0)
  // 易涝区详情显示状态  // 0代表关闭
  let [waterloggingId, setWaterloggingId] = useState(0)
  // 垃圾柜详情显示状态  // 0代表关闭
  let [garbageId, setGarbageId] = useState(0)
  // 存储点击后点的位置
  let [coordinates, SetCoordinates] = useState([])

  // 易涝区中tab选中状态
  let [waterloggingActive, setWaterloggingActive] = useState(2)

  // 是否进入乔司区域
  let [enterQS, setEnterQS] = useState(false)

  /* 标签单击事件 */
  const handleTabClick = index => {
    if (active !== index) {
      dispatch(reset())
      dispatch(resetNetworkMonitoring())
      setActive(index)
      if (index !== 0) {
        dispatch(setWms({}))
      }
    }
  }

  /* 地图上图标点击事件 */
  const handleMarkerClick = (e, type, item) => {
    console.log(item)
    if (type == 'keyArea' || type == 'road' || type == 'bridge' || type == 'danger' || type == 'fluctuate') {
      setKeyAreaId(item.id)
      setType(type)
    } else if (type == 'wellLid') {
      setWellLidId(item.id)
      dispatch(
        setSwitch({
          waterAcreage: false,
          wellLid: true,
        })
      )
    } else if (type === 'waterlogging') {
      setWaterloggingId(item.id)
      dispatch(
        setSwitch({
          waterAcreage: true,
          wellLid: false,
        })
      )
      waterloggingRef.current.setActive(2)
    } else if (type === 'garbage') {
      setGarbageId(item.id)
    }
  }

  /* 重点区域详情中的返回按钮 */
  const handleKeyAreaBack = () => {
    setKeyAreaId(0)
    setType('')
    // map.current.SetZoom()
    SetCoordinates([])
  }

  /* 水井详情中的返回按钮 */
  const handleWellLidBack = () => {
    map.current.SetZoom()
    setWellLidId(0)
    dispatch(
      setSwitch({
        waterAcreage: true,
        wellLid: true,
      })
    )
    SetCoordinates([])
  }

  /* 易涝详情中的返回按钮 */
  const handleWaterloggingBack = () => {
    map.current.SetZoom()
    setWaterloggingId(0)
    dispatch(
      setSwitch({
        waterAcreage: true,
        wellLid: true,
      })
    )
    SetCoordinates([])
    setWaterloggingActive(2)
  }

  /* 垃圾柜详情中的返回按钮 */
  const handleGarbageBack = () => {
    map.current.SetZoom()
    setGarbageId(0)
    SetCoordinates([])
  }

  /* 详情里项的点击事件 */
  const handleItemClick = coordinates => {
    SetCoordinates(coordinates)
  }

  /* 查看易涝详情 */
  const handleCheckDetails = type => {
    if (type === 'waterlogging') {
      setWaterloggingId(1)
      SetCoordinates(waterlogging[0].coordinates)
      dispatch(
        setSwitch({
          waterAcreage: true,
          wellLid: false,
        })
      )
    } else {
      setWellLidId(1)
      SetCoordinates(wellLid1[0].coordinates)
      dispatch(
        setSwitch({
          waterAcreage: false,
          wellLid: true,
        })
      )
    }
  }

  /* 易涝下active改变 */
  const handleWaterloggingActive = index => {
    setWaterloggingActive(index)
  }

  /* 退出乔司区域按钮 */
  const handleQuitClick = () => {
    setEnterQS(false)
  }

  /* 查看文件 */
  const handleDocClick = type => {
    flowImageDialogRef.current.handleSetData(type)
  }

  /* 垃圾设备列表点击事件 */
  const handleDeviceRowClick = () => {
    setGarbageId(1)
  }
  return (
    <Box className="main-container">
      {/* 地图 */}
      <Box
        style={{
          position: 'absolute',
          zIndex: 998,
          width: '100%',
          height: '100%',
        }}
      >
        <Map
          ref={map}
          active={active}
          onMarkerClick={handleMarkerClick}
          coordinates={coordinates}
          waterloggingActive={waterloggingActive}
          enterQS={enterQS}
        ></Map>
      </Box>

      {!enterQS && (
        <img
          src={enterImg}
          className="enter_btn"
          onClick={() => {
            setEnterQS(true)
          }}
        />
      )}

      {/* 是否进入乔司区域 */}
      {enterQS && (
        <>
          {/* 退出乔司区域按钮 */}
          {!keyAreaId && !wellLidId && !waterloggingId && !garbageId && (
            <img src={quitImg} className="quit_btn" onClick={handleQuitClick} />
          )}

          {/* 文件查看 */}
          <Box className="doc">
            <img src={doc_file} onClick={() => handleDocClick(1)}></img>
            <img src={doc_flow} onClick={() => handleDocClick(2)}></img>
          </Box>

          {/* 左右中内容 */}
          <Box
            className="grid-left-box"
            style={{
              visibility: keyAreaId || wellLidId || waterloggingId || garbageId ? 'hidden' : 'visible',
            }}
          >
            <Left active={active} onCheckDetails={handleCheckDetails}></Left>
          </Box>
          <Box
            className="grid-right-box"
            style={{
              visibility: keyAreaId || wellLidId || waterloggingId || garbageId ? 'hidden' : 'visible',
            }}
          >
            <Right active={active} onDeviceRowClick={handleDeviceRowClick}></Right>
          </Box>

          {/* 菜单 */}
          <Box
            className="menu"
            style={{
              visibility: keyAreaId || wellLidId || waterloggingId || garbageId ? 'hidden' : 'visible',
            }}
          >
            {tabs.map((tab, index) => (
              <Box className="menu-item">
                <img src={active === index ? tab[1] : tab[0]} onClick={() => handleTabClick(index)}></img>
              </Box>
            ))}
          </Box>

          {/* 沉降 */}
          {keyAreaId && (
            <KeyAreasDetails
              onBack={handleKeyAreaBack}
              keyAreaId={keyAreaId}
              onItemClick={handleItemClick}
              type={type}
            ></KeyAreasDetails>
          )}

          {/* 水井 */}
          {wellLidId && (
            <WellLid onBack={handleWellLidBack} wellLidId={wellLidId} onItemClick={handleItemClick}></WellLid>
          )}

          {/* 垃圾柜 */}
          {garbageId && (
            <Garbage onBack={handleGarbageBack} garbageId={garbageId} onItemClick={handleItemClick}></Garbage>
          )}

          {/*易涝区 */}
          {waterloggingId && (
            <Waterlogging
              ref={waterloggingRef}
              onBack={handleWaterloggingBack}
              waterloggingId={waterloggingId}
              onItemClick={handleItemClick}
              onWaterloggingActive={handleWaterloggingActive}
            ></Waterlogging>
          )}
        </>
      )}

      {/* 沉降的色带 */}
      {enterQS && active === 0 && <img src={colour_strip_safety} className="colour_strip_safety" />}

      {/* 查看文档的弹窗 */}
      <FlowImageDialog ref={flowImageDialogRef}></FlowImageDialog>
    </Box>
  )
}
