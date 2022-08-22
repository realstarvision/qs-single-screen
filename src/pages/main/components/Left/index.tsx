import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Titlebar from '@/components/Titlebar'
import {
  FarmlandAccountBookList,
  FarmlandDataShare,
  FarmlandDepartStride,
  FarmlandStandard,
  CoordinateListByPage
} from '@/api'
import './left.scss'
import project_details from '@/assets/image/png/project_details.png'
import plough_cereal from '@/assets/image/png/plough_cereal.png'
import plough_current from '@/assets/image/png/plough_current.png'
import plough_high_standard from '@/assets/image/png/plough_high_standard.png'
import plough_perpetual from '@/assets/image/png/plough_perpetual.png'
import eye_hidden from '@/assets/image/png/eye_h.png'
import eye_visible from '@/assets/image/png/eye_visible.png'
import data_share from '@/assets/image/png/data_share.png'
import target from '@/assets/image/png/target.png'

const ploughList = [
  {
    icon: plough_current,
    type: '提质',
    color: 'processed',
    checked: false
  },
  {
    icon: plough_perpetual,
    type: '新增',
    color: 'pending',
    checked: false
  },
  {
    icon: plough_high_standard,
    type: '新增',
    color: 'beingProcessed',
    checked: false
  },
  {
    icon: plough_cereal,
    type: '增产',
    color: 'review',
    checked: false
  }
]

export default function Left({ onPlowlandChecked, onPlowlandUnchecked }) {
  const [farmlandAccountBookList, setFarmlandAccountBookList] = useState([])
  const [farmlandDataShare, setFarmlandDataShare] = useState({ dataDistribute: '', farmlandPatrol: '', videoCount: '' })
  const [farmlandDepartStride, setFarmlandDepartStride] = useState({ deparStride: '', informNote: '', taskCount: '' })
  const [farmlandStandard, setFarmlandStandard] = useState<any>({ list: [], inventory: '' })
  // 初始化数据
  useEffect(() => {
    getFarmlandAccountBookList()
    getFarmlandDataShare()
    getFarmlandDepartStride()
    getFarmlandStandard()
  }, [])

  //获取耕地质量账本模块数据
  const getFarmlandAccountBookList = () => {
    FarmlandAccountBookList().then((data: any) => {
      let result = data || []
      let list = result.map((item, index) => {
        return { ...item, ...ploughList[index] }
      })
      setFarmlandAccountBookList(list)
    })
  }

  //获取数据共享共用
  const getFarmlandDataShare = () => {
    FarmlandDataShare().then((data: any) => {
      setFarmlandDataShare(data)
    })
  }

  //获取多跨联动
  const getFarmlandDepartStride = () => {
    FarmlandDepartStride().then((data: any) => {
      setFarmlandDepartStride(data)
    })
  }

  // 获取高标农田数量指标
  const getFarmlandStandard = () => {
    FarmlandStandard().then((data: any) => {
      let list = [
        {
          name: '新建',
          value: data.newBuildRate
        },
        {
          name: '补建',
          value: data.fillBuildRate
        },
        {
          name: '已建提升',
          value: data.hadBuildRate
        },
        {
          name: '新增节水',
          value: data.newSavingWaterRate
        }
      ]
      let newFarmlandStandard = {
        list,
        inventory: data.inventory
      }
      setFarmlandStandard(newFarmlandStandard)
    })
  }

  // 选中耕地事件
  const handleChecked = id => {
    let newFarmlandAccountBookList = farmlandAccountBookList.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
        if (item.checked) {
          // 选择
          onPlowlandChecked(id, 0)
        } else {
          // 未选择
          onPlowlandUnchecked(id)
        }
      }
      return item
    })
    setFarmlandAccountBookList(newFarmlandAccountBookList)
  }
  return (
    <Box className="left-container">
      <Titlebar icon={project_details} title="耕地数量账本" rightFont="单位：万亩"></Titlebar>
      <Box className="plough-box">
        {farmlandAccountBookList.map(item => {
          return (
            <Grid
              container
              className="row"
              onClick={() => handleChecked(item.id)}
              sx={{
                background: item.checked ? 'linear-gradient(90deg, #0943B3 0%, rgba(9,74,198,0.5000) 100%)' : ''
              }}
            >
              <Grid xs={7} className="cell">
                <img src={item.icon} className="icon" /> <span className="title">{item.genre}</span>
              </Grid>
              <Grid xs={4} className="type-box">
                <span className="type">{item.type}</span>
                <span className={item.color + ' amount'}>{item.showData}</span>
              </Grid>
              <Grid xs={1}>
                <img src={item.checked ? eye_hidden : eye_visible} className="eye" />
              </Grid>
            </Grid>
          )
        })}
      </Box>
      <Titlebar
        icon={target}
        title="高质量建设目标"
        sub="(到2025年\省域)"
        rightFont="单位：万亩"
        titleSize="21px"
        iconSize="26px"
      ></Titlebar>
      <Box className="construction_target-box">
        <Box className="high_standard_farmland">
          <span>高标准农田保有量：</span>
          <span className="count">{farmlandStandard.inventory || 0}</span>
        </Box>
        <Box className="proportion-type">
          {farmlandStandard.list.map(item => {
            return (
              <Box className="item">
                <p>{item.name}</p>
                <p>{item.value}</p>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Titlebar
        icon={data_share}
        title="数据共享与多跨联动"
        rightFont="单位：次/个/张"
        titleSize="21px"
        iconSize="26px"
      ></Titlebar>
      <Box className="data_share">
        <Box className="grid-module ">
          <p className="title mb-5">数据共享共用</p>
          <Grid container>
            <Grid xs={4} className="cell">
              <p>高位视频</p>
              <p className="c-y">{farmlandDataShare.videoCount || 0}</p>
            </Grid>
            <Grid xs={4} className="center">
              <p>移动巡田</p>
              <p className="c-y">{farmlandDataShare.farmlandPatrol || 0}</p>
            </Grid>
            <Grid xs={4}>
              <p>数据分发</p>
              <p className="c-y">{farmlandDataShare.dataDistribute || 0}</p>
            </Grid>
          </Grid>
        </Box>
        <Box className="grid-module bt mt-20 pt-10">
          <p className="title mb-5">多跨联动</p>
          <Grid container>
            <Grid xs={4} className="cell">
              <p>任务执行</p>
              <p className="c-y">{farmlandDepartStride.taskCount}</p>
            </Grid>
            <Grid xs={4} className="center">
              <p>多跨部门</p>
              <p className="c-y">{farmlandDepartStride.deparStride}</p>
            </Grid>
            <Grid xs={4}>
              <p>通知短信</p>
              <p className="c-y">{farmlandDepartStride.informNote}</p>
            </Grid>
          </Grid>
        </Box>
        <Box className="box-name bt mt-20">田长制体系</Box>
      </Box>
    </Box>
  )
}
