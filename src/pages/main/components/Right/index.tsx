import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import Titlebar from '@/components/Titlebar'
import HiQ from '@/assets/image/png/Hi-Q.png'
import { FarmlandControlList, FarmlandProblem } from '@/api'
import eye_hidden from '@/assets/image/png/eye_h.png'
import eye_visible from '@/assets/image/png/eye_visible.png'
import data_share from '@/assets/image/png/data_share.png'
import block from '@/assets/image/png/block.png'
import './right.scss'

export default function Right({ onCheckDetails, onPlowlandChecked, onPlowlandUnchecked }) {
  const [farmlandControlList, setFarmlandControlList] = useState({
    farmlandOverviewVOList: [],
    percentageComplete: ''
  })
  const [farmlandProblem, setFarmlandProblem] = useState({ groundTest: '', inspectReport: '', satellite: '' })
  // 初始化数据
  useEffect(() => {
    getFarmlandControlList()
    getFarmlandProblem()
  }, [])

  //获取耕地质量账本模块数据
  const getFarmlandControlList = () => {
    FarmlandControlList().then((data: any) => {
      let result = data.farmlandOverviewVOList || []
      let list = result.map((item, index) => {
        return { ...item, state: index + 1, checked: false }
      })
      let obj = {
        farmlandOverviewVOList: list,
        percentageComplete: data.percentageComplete
      }
      setFarmlandControlList(obj)
    })
  }

  // 获取问题来源数据
  const getFarmlandProblem = () => {
    FarmlandProblem().then((data: any) => {
      setFarmlandProblem(data)
    })
  }

  // 查看详情事件
  const handleCheckDetails = () => {
    onCheckDetails()
  }

  // 选中耕地事件
  const handleChecked = id => {
    let newFarmlandOverviewVOList = farmlandControlList.farmlandOverviewVOList.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
        if (item.checked) {
          // 选择
          onPlowlandChecked(id, 1)
        } else {
          // 未选择
          onPlowlandUnchecked(id)
        }
      }
      return item
    })
    farmlandControlList.farmlandOverviewVOList = newFarmlandOverviewVOList
    setFarmlandControlList({ ...farmlandControlList })
  }
  return (
    <Box className="right-container">
      <Titlebar icon={HiQ} title="耕地用途管制"></Titlebar>
      <Box className="top-box">
        <Grid container className="row">
          <Grid xs={7}>监测类型</Grid>
          <Grid xs={3}>以认定</Grid>
          <Grid xs={2}>状态</Grid>
        </Grid>
        {farmlandControlList.farmlandOverviewVOList.map((item, index) => {
          return (
            <Grid
              container
              className={(item.state === 1 ? 'pending' : 'review') + ' row td hover'}
              onClick={() => handleChecked(item.id)}
              sx={{
                background: item.checked
                  ? 'linear-gradient(-90deg, #0943B3 0%, rgba(9,74,198,0.5000) 100%) !important'
                  : ''
              }}
              key={index}
            >
              <Grid xs={7} className="type">
                <span> {item.genre}</span>
                <img src={item.checked ? eye_hidden : eye_visible} className="eye" />
              </Grid>
              <Grid xs={3} className="font">
                {item.showData + '次'}
              </Grid>
              <Grid xs={2} className="font">
                {item.state === 1 ? '已处理' : '处理中'}
              </Grid>
            </Grid>
          )
        })}
        <Grid container className="row td ">
          <Grid xs={10} className="font">
            处置完成率
          </Grid>
          <Grid xs={2} className="review">
            {farmlandControlList.percentageComplete}
          </Grid>
        </Grid>
      </Box>
      <Titlebar
        icon={data_share}
        title="“非农非粮”闭环管理"
        rightFont="单位：个"
        titleSize="true"
        iconSize="true"
      ></Titlebar>
      <Box className="box">
        <Box className="grid-module ">
          <p className="title">问题来源</p>
          <Grid container>
            <Grid xs={4} className="cell">
              <p>卫星普查</p>
              <p className="c-y">{farmlandProblem.satellite || 0}</p>
            </Grid>
            <Grid xs={4} className="center">
              <p>地面检测</p>
              <p className="c-y">{farmlandProblem.groundTest || 0}</p>
            </Grid>
            <Grid xs={4}>
              <p>巡查上报</p>
              <p className="c-y">{farmlandProblem.inspectReport || 0}</p>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ClosedLoop onCheckDetails={handleCheckDetails}></ClosedLoop>
      <ClosedLoop onCheckDetails={handleCheckDetails}></ClosedLoop>
    </Box>
  )
}

/**  闭环模块  **/
function ClosedLoop({ onCheckDetails }) {
  const [active, setActive] = useState(1)

  const handleClick = value => {
    setActive(value)
  }

  const handleDetails = () => {
    onCheckDetails()
  }
  return (
    <Box className="closed_loop">
      <Grid container className="closed_loop_header">
        <Grid xs={6} className="title">
          "非农化"闭环
        </Grid>
        <Grid xs={6} className="operate">
          <span onClick={() => handleClick(1)} className={active === 1 ? 'active' : ''}>
            本月
          </span>
          <span onClick={() => handleClick(2)} className={active === 2 ? 'active' : ''}>
            累计
          </span>
          <span onClick={() => handleDetails()}>查看详情</span>
        </Grid>
      </Grid>
      <img src={block} />
    </Box>
  )
}
