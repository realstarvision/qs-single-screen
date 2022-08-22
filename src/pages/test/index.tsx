import L from 'leaflet'
import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function index() {
  useEffect(() => {
    let ele = document.getElementById('map')
    var map = L.map(ele).setView([51.505, -0.09], 13)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map)
  })

  return (
    <div
      id="map"
      style={{
        height: '180px'
      }}
    ></div>
  )
}
