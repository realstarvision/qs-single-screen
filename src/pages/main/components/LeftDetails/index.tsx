import React from 'react'
import { Box, Grid } from '@mui/material'
import Titlebar from '@/components/Titlebar'
import DetailsItem from '@/components/DetailsItem'
import project_details from '@/assets/image/png/project_details.png'
import './leftDetails.scss'

const detailsData = [
  {
    icon: project_details,
    title: '耕地基本信息（国土三调）',
    content: ['耕地面积：1028亩', '地类名称：水田', '地块数量：15块']
  },
  {
    icon: project_details,
    title: '耕地质量信息',
    content: ['耕地质量等级：一等地', '是否是永久基本农田：是', '是否高标准农田：是', '是否是粮食生产功能区：否']
  },
  {
    icon: project_details,
    title: '种植利用现状',
    content: ['当前种植：单季稻（668亩，分蘖末期）', '上季情况：早稻（360亩，850公斤/亩)']
  },
  {
    icon: project_details,
    title: '承包经营情况',
    content: ['承包主体：望收水稻合作社', '承包人：俞某某（13800001111）']
  },
  {
    icon: project_details,
    title: '田长信息(田长制体系)',
    content: ['一级田长：书记', '二级田长：书记', '三级田长：区长', '四级田长：镇长', '五级田长：村长']
  }
]

export default function index() {
  return (
    <Box className="leftDetails-container">
      <Titlebar icon={project_details} title="“千亩方”项目信息"></Titlebar>
      <Box className="list">
        {detailsData.map(item => {
          return <DetailsItem icon={item.icon} title={item.title} content={item.content}></DetailsItem>
        })}
      </Box>
    </Box>
  )
}
