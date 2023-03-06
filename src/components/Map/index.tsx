import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react'
import L from 'leaflet'
import { useSelector, useDispatch } from 'react-redux'
import { MapContainer, TileLayer, useMap, Polygon, WMSTileLayer, Marker, Popup } from 'react-leaflet'
import { polygonProcess } from '@/utils/data'
import {
  dangerLevelPointData,
  networkMonitoring,
  garbageSorting,
  wellLid1,
  wellLid2,
  wellLid3,
  keyArea,
  waterlogging,
  roadPoinList,
  bridgePoinList,
  DSMHeightPoint,
} from './json'
import { echartTabs } from '@/pages/Details/Waterlogging/json'
import WMSCapabilities from 'wms-capabilities'
import axios from 'axios'
import { setWms } from '@/store/module/wms'
import './style.scss'

// 颜色列表
const colorArr = ['#fff', '#FFC000', '#dbd700', '#E47508', '#00DB54', '#db2c00', '#00dbd0']

interface WMS {
  work_spaces: ''
  layers: ''
  id: 0
}

/* 图标 */
function Icon(iconUrl, iconSize) {
  return L.icon({
    iconUrl: iconUrl,
    // iconSize: [40, 30],
    popupAnchor: [0, -20],
    iconSize: iconSize,
  })
}

/**  map组件  **/
const index = (
  {
    active,
    onMarkerClick,
    coordinates,
    waterloggingActive,
    enterQS,
  }: { active?: number; onMarkerClick?: Function; coordinates; waterloggingActive; enterQS: boolean },
  ref
) => {
  const dispatch = useDispatch()
  const map = useRef(null)
  const streetTiff = useRef(null)
  const wmsControler = useRef(null)
  const terrainClassificationRef = useRef(null)
  // 初始化geoserver原始数据
  const [capabilities, setCapabilities] = useState(null)
  // const minimap = useMap()
  const [optionsData, setOptionsData] = useState({})
  // redux获取未读消息数据
  let wms = useSelector((state: { wms }) => state.wms.value)
  let dangerLevel = useSelector((state: { dangerLevel }) => state.dangerLevel.value)
  let networkData = useSelector((state: { networkMonitoring }) => state.networkMonitoring.value)
  let switchData = useSelector((state: { Switch }) => state.Switch.value)
  let terrainClassificationActive = useSelector(
    (state: { terrainClassificationActive }) => state.terrainClassificationActive.value
  )
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    handleClearPolygon: id => {
      optionsData[id].forEach(polygon => {
        map.current.removeLayer(polygon)
      })
      optionsData[id] = []
      setOptionsData({ ...optionsData })
    },
    SetZoom,
  }))

  /* 初始化  */
  useEffect(() => {
    // 获取初始化geoserver原始数据
    const callback = async () => {
      let response
      for (let i = 0; i < 5; i++) {
        response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/geoserver/wms/?service=wms&version=1.1.0&request=GetCapabilities`
        )
        if (response) {
          setCapabilities(response)
          return false
        }
      }
    }

    callback()
  }, [])

  /* 监听易涝中tab改变事件 */
  // useEffect(() => {
  //   if (waterloggingActive !== 2) {
  //     fitWMSBounds(map.current, 'QS_demo:QS_street_tiff', capabilities)
  //   }
  // }, [waterloggingActive])

  /* 监听地物分类的切换事件 */
  useEffect(() => {
    if (terrainClassificationRef.current) {
      terrainClassificationRef.current.setParams({
        layers: echartTabs[terrainClassificationActive].layers,
        url: `${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`,
        transparent: true,
        format: 'image/png',
        version: '1.1.0',
        TILED: true,
      })
    }
  }, [terrainClassificationActive])

  /* 监听乔司全局唤醒 */
  useEffect(() => {
    if (!enterQS) {
      if (map.current) {
        // SetZoom('qs_group_cut')

        map.current.flyTo([30.357607839433694, 120.26355743408205])
        map.current.setZoom(12)
      }
      dispatch(setWms({ work_spaces: '', layers: '', id: 0 }))
    }
  }, [enterQS])

  /* 监听wms参数变化 */
  useEffect(() => {
    if (wms.work_spaces) {
      map.current.on('click', e => {
        console.log(e)
      })
      wmsControler.current.setParams({
        layers: wms.layers,
        url: `${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`,
        transparent: true,
        format: 'image/png',
        version: '1.1.0',
        TILED: true,
      })
      fitWMSBounds(map.current, wms.layers, capabilities)
    }
  }, [wms])

  /* 监听tab切换 */
  useEffect(() => {
    SetZoom()
  }, [active])

  /* 设置地图缩放 */
  function SetZoom(place = 'QS_demo:QS_street_tiff') {
    if (map.current) {
      fitWMSBounds(map.current, place, capabilities)
    }
  }

  /* 监听点位点击 */
  useEffect(() => {
    if (map.current && coordinates.length > 0) {
      // 移动至
      map.current.flyTo(coordinates, 17)
    }
  }, [JSON.stringify(coordinates)])

  /* 将地图居中到目标位置 */
  const fitWMSBounds = async (mapEle, layer_name, res) => {
    const json = new WMSCapabilities(res.data).toJSON()
    const layers = json?.Capability?.Layer?.Layer
    const layer = layers?.filter(lay => lay.Name === layer_name)[0]
    // To get the bounding box of the layer
    const bbox = layer?.LatLonBoundingBox
    mapEle.fitBounds([
      [bbox[1], bbox[0]],
      [bbox[3], bbox[2]],
    ])
  }

  /* 危险等级标记鼠标移入 */
  const handleDangerLevelPointMouseover = e => {
    console.log(e)
    e.target.openPopup()
  }

  /* 危险等级标记鼠标移出 */
  const handleDangerLevelPointMouseout = e => {
    console.log(e)
    e.target.closePopup()
  }

  /* Marker的点击事件 */
  const handleMarkerClick = (e, type, item) => {
    /* 移动至点 */
    map.current.flyTo(item.coordinates, 17)
    /* 触发父级点击事件 */
    onMarkerClick(e, type, item)
  }

  return (
    <>
      <MapContainer
        ref={map}
        center={[30.357607839433694, 120.26355743408205]}
        zoom={12}
        zoomControl={false}
        attributionControl={false}
        style={{
          width: '100%',
          height: '100%',
          background: '#001B47',
        }}
        // minZoom={7}
        // maxZoom={13}
      >
        {!enterQS && (
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        )}
        {wms.layers && enterQS && (
          <WMSTileLayer ref={wmsControler} url={`${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`} />
        )}

        {/* DSM模型 */}
        {waterloggingActive === 0 && active == 1 && enterQS && (
          <WMSTileLayer
            url={`${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`}
            layers="QS_demo:test2"
            transparent={true}
            format="image/png"
            version="1.1.0"
          />
        )}

        {/* 地物分类 */}
        {waterloggingActive === 1 && active == 1 && enterQS && (
          <WMSTileLayer
            layers={echartTabs[terrainClassificationActive].layers}
            ref={terrainClassificationRef}
            // layers={echartTabs[terrainClassificationActive].layers}
            url={`${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`}
            transparent={true}
            format="image/png"
            version="1.1.0"
          />
        )}

        {/* 土壤湿度 */}
        {waterloggingActive === 3 && active == 1 && enterQS && (
          <WMSTileLayer
            layers="QS_demo:hsl"
            url={`${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`}
            transparent={true}
            format="image/png"
            version="1.1.0"
          />
        )}

        {/* 乔司底图 */}
        <WMSTileLayer
          ref={streetTiff}
          url={`${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`}
          layers="qs_group_cut"
          transparent={true}
          format="image/png"
          version="1.1.0"
        />

        {/* 乔司底图 */}
        {!enterQS && (
          <WMSTileLayer
            ref={streetTiff}
            url={`${import.meta.env.VITE_BASE_URL}/geoserver/QS_demo/wms`}
            layers="qs_group_cut"
            transparent={true}
            format="image/png"
            version="1.1.0"
            // TILED={true}
          />
        )}

        {enterQS && (
          <>
            {/* 道路沉降 */}
            {wms.id === 1 &&
              active == 0 &&
              roadPoinList.map(item => (
                <Marker
                  draggable={false}
                  eventHandlers={{
                    mouseover: handleDangerLevelPointMouseover,
                    mouseout: handleDangerLevelPointMouseout,
                    click: e => handleMarkerClick(e, 'road', item),
                  }}
                  position={item.coordinates as any}
                  icon={Icon(item.icon, [25, 20])}
                >
                  <Popup minWidth={90} closeButton={false} className="marker_popup">
                    {/* <span>{item.title}</span> */}
                    <span>名称：{item.code}</span>
                    {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                    <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                    <span>地址：{item.position}</span>
                  </Popup>
                </Marker>
              ))}

            {/* 桥梁沉降 */}
            {wms.id === 2 &&
              active == 0 &&
              bridgePoinList.map(item => (
                <Marker
                  draggable={false}
                  eventHandlers={{
                    mouseover: handleDangerLevelPointMouseover,
                    mouseout: handleDangerLevelPointMouseout,
                    click: e => handleMarkerClick(e, 'bridge', item),
                  }}
                  position={item.coordinates as any}
                  icon={Icon(item.icon, [25, 20])}
                >
                  <Popup minWidth={90} closeButton={false} className="marker_popup">
                    {/* <span>{item.title}</span> */}
                    <span>名称：{item.code}</span>
                    {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                    <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                    <span>地址：{item.position}</span>
                  </Popup>
                </Marker>
              ))}

            {/* 重点区域 */}
            {wms.id === 3 &&
              active == 0 &&
              keyArea.map(item => (
                <Marker
                  draggable={false}
                  eventHandlers={{
                    mouseover: handleDangerLevelPointMouseover,
                    mouseout: handleDangerLevelPointMouseout,
                    click: e => handleMarkerClick(e, 'keyArea', item),
                  }}
                  position={item.coordinates as any}
                  icon={Icon(item.icon, [25, 20])}
                >
                  <Popup minWidth={90} closeButton={false} className="marker_popup">
                    <span>名称：{item.code}</span>
                    {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                    <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                    <span>地址：{item.position}</span>
                  </Popup>
                </Marker>
              ))}

            {/* 危险等级 */}
            {[...keyArea, ...bridgePoinList, ...roadPoinList].map(item => {
              return (item.type === 'danger' && dangerLevel.danger) ||
                (item.type === 'fluctuate' && dangerLevel.fluctuate) ? (
                <Marker
                  draggable={false}
                  eventHandlers={{
                    mouseover: handleDangerLevelPointMouseover,
                    mouseout: handleDangerLevelPointMouseout,
                    click: e => handleMarkerClick(e, item.type, item),
                  }}
                  position={item.coordinates as any}
                  icon={Icon(item.icon, [25, 20])}
                >
                  <Popup minWidth={90} closeButton={false} className="marker_popup">
                    <span>名称：{item.code}</span>
                    {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                    <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                    <span>地址：{item.position}</span>
                  </Popup>
                </Marker>
              ) : (
                ''
              )
            })}

            {/* 管网监测 */}
            {networkMonitoring.map(item => {
              return (item.type === 'offline' && networkData.offline) ||
                (item.type === 'normal' && networkData.normal) ||
                (item.type === 'alarm' && networkData.alarm) ? (
                <Marker
                  draggable={false}
                  eventHandlers={{
                    mouseover: handleDangerLevelPointMouseover,
                    mouseout: handleDangerLevelPointMouseout,
                  }}
                  position={item.coordinates as any}
                  icon={Icon(item.icon, [25, 20])}
                >
                  <Popup minWidth={90} closeButton={false} className="marker_popup">
                    <span>名称：{item.code}</span>
                    {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                    <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                    <span>地址：{item.position}</span>
                  </Popup>
                </Marker>
              ) : (
                ''
              )
            })}
            {/* 污水井 */}
            {active == 1 &&
              switchData.wellLid &&
              wellLid1.map(item => {
                return (
                  <Marker
                    draggable={false}
                    eventHandlers={{
                      mouseover: handleDangerLevelPointMouseover,
                      mouseout: handleDangerLevelPointMouseout,
                      click: e => handleMarkerClick(e, 'wellLid', item),
                    }}
                    position={item.coordinates as any}
                    icon={Icon(item.icon, [30, 40])}
                  >
                    <Popup minWidth={90} closeButton={false} className="marker_popup">
                      <span>名称：{item.title}</span>
                      {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                      <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                      <span>地址：{item.position}</span>
                    </Popup>
                  </Marker>
                )
              })}
            {/* 雨水井 */}
            {active == 1 &&
              switchData.wellLid &&
              wellLid2.map(item => {
                return (
                  <Marker
                    draggable={false}
                    eventHandlers={{
                      mouseover: handleDangerLevelPointMouseover,
                      mouseout: handleDangerLevelPointMouseout,
                      click: e => handleMarkerClick(e, 'wellLid', item),
                    }}
                    position={item.coordinates as any}
                    icon={Icon(item.icon, [30, 40])}
                  >
                    <Popup minWidth={90} closeButton={false} className="marker_popup">
                      <span>名称：{item.title}</span>
                      {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                      <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                      <span>地址：{item.position}</span>
                    </Popup>
                  </Marker>
                )
              })}

            {/* 涝 */}
            {active == 1 &&
              switchData.waterAcreage &&
              waterlogging.map(item => {
                return (
                  <Marker
                    draggable={false}
                    eventHandlers={{
                      mouseover: handleDangerLevelPointMouseover,
                      mouseout: handleDangerLevelPointMouseout,
                      click: e => handleMarkerClick(e, 'waterlogging', item),
                    }}
                    position={item.coordinates as any}
                    icon={Icon(item.icon, [30, 40])}
                  >
                    <Popup minWidth={90} closeButton={false} className="marker_popup">
                      <span>名称：{item.title}</span>
                      {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                      <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                      <span>地址：{item.position}</span>
                    </Popup>
                  </Marker>
                )
              })}
            {/* DSM高度点位 */}
            {active == 1 &&
              waterloggingActive === 0 &&
              DSMHeightPoint.map(item => {
                return (
                  <Marker
                    draggable={false}
                    eventHandlers={{
                      mouseover: handleDangerLevelPointMouseover,
                      mouseout: handleDangerLevelPointMouseout,
                      // click: e => handleMarkerClick(e, 'waterlogging', item),
                    }}
                    position={item.coordinates as any}
                    icon={Icon(item.icon, [25, 20])}
                  >
                    <Popup minWidth={90} closeButton={false} className="marker_popup">
                      <span>名称：{item.code}</span>
                      {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                      <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                      <span>地址：{item.position}</span>
                      <span>高度：{item.height}</span>
                    </Popup>
                  </Marker>
                )
              })}
            {/* 垃圾分类 */}
            {active == 2 &&
              garbageSorting.map(item => {
                return (
                  <Marker
                    draggable={false}
                    eventHandlers={{
                      mouseover: handleDangerLevelPointMouseover,
                      mouseout: handleDangerLevelPointMouseout,
                      click: e => handleMarkerClick(e, 'garbage', item),
                    }}
                    position={item.coordinates as any}
                    icon={Icon(item.icon, [30, 41])}
                  >
                    <Popup minWidth={90} closeButton={false} className="marker_popup">
                      <span>名称：{item.code}</span>
                      {/* <span>经度：{item.coordinates[1].toFixed(6)}</span>
                      <span>维度：{item.coordinates[0].toFixed(6)}</span> */}
                      <span>地址：{item.position}</span>
                    </Popup>
                  </Marker>
                )
              })}
          </>
        )}
      </MapContainer>
    </>
  )
}

export default forwardRef(index)
