import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, useMap, Polygon } from 'react-leaflet'
import { polygonProcess } from '@/utils/data'

// 颜色列表
const colorArr = ['#fff', '#FFC000', '#dbd700', '#E47508', '#00DB54', '#db2c00', '#00dbd0']

/**  map组件  **/
const index = (
  {
    onPolygonClick,
    latlngs,
    polygonList,
  }: {
    coordinatesList?: {}
    onPolygonClick?: Function
    latlngs?: []
    polygonList?: [
      {
        coordinates: string
        farmlandId: number
        type: number
      }
    ]
  },
  ref
) => {
  const map = useRef(null)
  // const minimap = useMap()
  const [optionsData, setOptionsData] = useState({})
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    handleClearPolygon: id => {
      optionsData[id].forEach(polygon => {
        map.current.removeLayer(polygon)
      })
      optionsData[id] = []
      setOptionsData({ ...optionsData })
    },
  }))

  // 初始化
  useEffect(() => {
    setTimeout(() => {
      if (map.current) {
        if (latlngs && latlngs.length > 0) {
          let polygon = L.polygon(latlngs).addTo(map.current)
          map.current.fitBounds(polygon.getBounds())
        }
      }
    }, 0)
  }, [])

  useEffect(() => {
    // setTimeout(() => {
    if (map.current) {
      if (polygonList.length > 0) {
        console.log(polygonList)
        let arr = []
        let farmlandId = 0
        for (let i = 0; i < polygonList.length; i++) {
          // 创建多边形
          let polygon = L.polygon(polygonProcess(polygonList[i].coordinates), {
            color: colorArr[polygonList[i].farmlandId],
            type: polygonList[i].type,
            farmlandId: polygonList[i].farmlandId,
            latlngs: polygonProcess(polygonList[i].coordinates),
          } as any).addTo(map.current)
          // 添加事件
          polygon.on('click', function (e) {
            handlePolygonClick(e)
          })
          arr.push(polygon)
          farmlandId = polygonList[i].farmlandId
        }

        if (optionsData.hasOwnProperty(farmlandId) && optionsData[farmlandId].length > 0) {
          optionsData[farmlandId].push(...arr)
        } else {
          optionsData[farmlandId] = arr
        }
        setOptionsData({ ...optionsData })
      }
    }
    // }, 0)
  }, [polygonList])

  // 多边形单击事件
  const handlePolygonClick = e => {
    onPolygonClick(e)
  }
  return (
    <>
      <MapContainer
        ref={map}
        center={[30.4, 120.2]}
        zoom={11}
        zoomControl={false}
        attributionControl={false}
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.6)',
        }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      </MapContainer>
    </>
  )
}

export default forwardRef(index)
