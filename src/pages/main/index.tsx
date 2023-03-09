import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
// 组件
import Module from './components/module'
import Map from '@/components/Map'
import Menu from '@/pages/main/components/Menu'
import ButtonBox from './components/ButtonBox'
import SvgIcon from '@/components/SvgIcon'
// 详情模块
import KeyAreas from '@/pages/Details/KeyAreas'
import WellLid from '@/pages/Details/WellLid'
import Waterlogging from '@/pages/Details/Waterlogging'
import Garbage from '@/pages/Details/Garbage'
// 数据及工具
import { setWms, resetWms } from '@/store/module/wms'
import { setDangerLevel, reset } from '@/store/module/dangerLevel'
import { reset as resetNetworkMonitoring } from '@/store/module/networkMonitoring'
import { setSwitch } from '@/store/module/switch'
import { setTerrainClassificationActive } from '@/store/module/terrainClassificationActive'
import { keyArea, garbageSorting, wellLid, waterlogging } from '@/components/Map/json'
import './style.scss'

// 图片
import quitImg from '@/assets/image/btn/quit.png'
import enterImg from '@/assets/image/btn/enter.png'
import colour_strip_safety from '@/assets/image/png/colour_strip_safety.png'

export default function index() {
  const waterloggingRef = useRef(null)
  const flowImageDialogRef = useRef(null)
  const map = useRef(null)
  // 标签选择   0:护民地质安全监测   1:保民降水内涝监测   2:便民垃圾分类监测
  let [active, setActive] = useState(0)
  // 设置redux值
  const dispatch = useDispatch()
  let switchData = useSelector((state: { Switch }) => state.Switch.value)
  let keyAreasActive = useSelector((state: { keyAreasActive }) => state.keyAreasActive.value)
  // 选中点的信息
  let [checkedPoint, setCheckedPoint] = useState(null)
  // 标记点列表
  let [markerList, setMarkerList] = useState([])
  // polygon列表
  let [polygonList, setPolygonList] = useState([])
  // DSM中高度的点位
  let [DSMPoint, setDSMPoint] = useState([])
  // 社区范围和管理区域的点击状态
  let [communityOrRegionVisible, setCommunityOrRegionVisible] = useState({
    community: false,
    region: false,
  })
  // 易涝区中tab选中状态
  let [waterloggingActive, setWaterloggingActive] = useState(-1)
  // 是否进入乔司区域
  let [enterQS, setEnterQS] = useState(false)

  /* 查看易涝详情 */
  const handleCheckDetails = type => {
    // if (type === 'waterlogging') {
    //   setWaterloggingId(1)
    //   SetCoordinates(waterlogging[0].coordinates)
    //   dispatch(
    //     setSwitch({
    //       waterAcreage: true,
    //       wellLid: false,
    //     })
    //   )
    // } else {
    //   setWellLidId(1)
    //   SetCoordinates(wellLid1[0].coordinates)
    //   dispatch(
    //     setSwitch({
    //       waterAcreage: false,
    //       wellLid: true,
    //     })
    //   )
    // }
  }

  /* 监听沉降标签切换 */
  useEffect(() => {
    setListData(active, keyAreasActive)
  }, [keyAreasActive])

  /* 监听菜单切换 */
  useEffect(() => {
    if (active !== 0) {
      dispatch(resetWms())
      setListData(active, 0)
    } else {
      setListData(active, keyAreasActive)
    }
  }, [active])

  /* 监听选中点 */
  useEffect(() => {
    if (checkedPoint) {
      if (checkedPoint.type === 'waterlogging') {
        setPolygonList([...waterlogging])
        setMarkerList([])
      } else if (checkedPoint.type === 'wellLid') {
        setMarkerList([...wellLid])
        setPolygonList([])
      }
    } else {
      if (active === 1) {
        setListData(active, 0)
      }
    }
    // map.current.handleMarkerCenter(checkedPoint)
  }, [checkedPoint])

  /* 标签单击事件 */
  const handleMenuClick = index => {
    if (active !== index) {
      if (index === 1 || index === 2) {
        map.current.SetZoom()
      }
      // dispatch(reset())
      // dispatch(resetNetworkMonitoring())
      setActive(index)
      // if (index !== 0) {
      //   dispatch(setWms({}))
      // }
    }
  }

  /* 地图上图标点击事件 */
  const handleMarkerClick = item => {
    setCheckedPoint({ ...item })
  }

  /* 详情列表项的点击事件 */
  const handleDetailsListItemClick = item => {
    setCheckedPoint(item)
    // 选项在地图中视角定位
    map.current.handleMarkerCenter(item)
  }

  /* 设置标记列表数据 */
  function setListData(menuId, mapTabId) {
    if (menuId === 0) {
      let list = mapTabId === 3 ? [...keyArea] : []
      setPolygonList(list)
      setMarkerList([])
    } else if (menuId === 1) {
      setMarkerList([...wellLid])
      setPolygonList([...waterlogging])
    } else {
      setMarkerList(garbageSorting)
      setPolygonList([])
    }
  }

  /* 详情页返回 */
  const handleBack = () => {
    if (active === 1) {
      setWaterloggingActive(-1)
    }
    // 内涝tiff信息,点位信息
    setCheckedPoint(null)
    dispatch(setTerrainClassificationActive(null))
    // 重新定位地图视角
    if (active === 0) {
      map.current.wmsPositioning()
    } else {
      map.current.SetZoom()
    }
  }

  return (
    <Box className="main-container">
      {/* 地图 */}
      <Box className="map-box">
        <Map
          ref={map}
          markerList={markerList}
          polygonList={polygonList}
          onMarkerClick={handleMarkerClick}
          DSMHeightPoint={DSMPoint}
          checkedPoint={checkedPoint}
          communityOrRegionVisible={communityOrRegionVisible}
        ></Map>
      </Box>

      {/* 退出乔司全域 */}
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
          {/* {!keyAreaId && !wellLidId && !waterloggingId && !garbageId && (
            <img src={quitImg} className="quit_btn" onClick={()=>{setEnterQS(false)}} />
          )} */}

          {/* 左右两侧内容 */}
          <Module active={active} onDeviceRowClick={handleCheckDetails}></Module>

          {/* 主菜单和返回按钮 */}
          {!checkedPoint ? (
            <Menu active={active} onMenuClick={handleMenuClick}></Menu>
          ) : (
            <ButtonBox className="back_btn" onClick={handleBack}></ButtonBox>
          )}

          {/* 沉降 */}
          {active === 0 && checkedPoint && (
            <KeyAreas keyAreaId={checkedPoint.id} onItemClick={handleDetailsListItemClick}></KeyAreas>
          )}

          {/* 水井 , 水涝 */}
          {active === 1 && checkedPoint && (
            <>
              {checkedPoint.type === 'wellLid' ? (
                <WellLid wellLidId={checkedPoint.id} onItemClick={handleDetailsListItemClick}></WellLid>
              ) : (
                <Waterlogging
                  waterloggingId={checkedPoint.id}
                  active={waterloggingActive}
                  setActive={setWaterloggingActive}
                  onItemClick={handleDetailsListItemClick}
                ></Waterlogging>
              )}
            </>
          )}

          {/* 垃圾分类 */}
          {active === 2 && checkedPoint && (
            <Garbage garbageId={checkedPoint.id} onItemClick={handleDetailsListItemClick}></Garbage>
          )}
        </>
      )}

      {/* 沉降的色带 */}
      {enterQS && active === 0 && <img src={colour_strip_safety} className="colour_strip_safety" />}
    </Box>
  )
}
