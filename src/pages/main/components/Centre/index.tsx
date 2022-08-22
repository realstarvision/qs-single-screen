import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Table from '@/components/MapTable'
import Map from '@/components/Map'
import { useTranslation } from 'react-i18next'
import { FarmlandParcel } from '@/api'
import './style.scss'
import back from '@/assets/image/png/back.png'

export default function index({ onBack, polygon }) {
  const [data, setData] = useState({})

  // 初始化获取数据
  useEffect(() => {
    FarmlandParcel().then(data => {
      setData(data)
    })
  }, [])

  // i18n
  const { t } = useTranslation()

  // 返回事件
  const handleBack = () => {
    onBack()
  }
  return (
    <Box className="centre-container">
      <Box className="map-box">
        <Box className="title-bar">
          <Typography className="title">千亩方地块信息</Typography>
          <img src={back} onClick={handleBack} />
        </Box>
        <Box className="map">
          {/* toGeoJSON().geometry.coordinates */}
          <Map latlngs={polygon.options.latlngs}></Map>
        </Box>
      </Box>
      <Box className="table">
        <Table data={data}></Table>
      </Box>
      <Box className="footer">
        <span>{t('footer.constructionDepartment')}</span>
        <span>{t('footer.technologyDepartment')}</span>
      </Box>
    </Box>
  )
}
