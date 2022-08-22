import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import Titlebar from '@/components/Titlebar'
import HiQ from '@/assets/image/png/Hi-Q.png'
import './right.scss'

const monitorType = [
  {
    title: '土壤肥力',
    count: 2,
    state: 1
  },
  {
    title: '土壤污染',
    count: 1,
    state: 2
  },
  {
    title: '病虫害',
    count: 3,
    state: 3
  },
  {
    title: '作物长势',
    count: 1,
    state: 4
  }
]

export default function Right() {
  return (
    <Box className="right-container">
      <Titlebar icon={HiQ} title="高质量治理体系" rightFont="查看详情"></Titlebar>
      <Box className="top-box">
        <Grid container className="row th">
          <Grid xs={5}>监测类型</Grid>
          <Grid xs={2}>预警</Grid>
          <Grid xs={3}>状态</Grid>
        </Grid>
        {monitorType.map(item => {
          return (
            <Grid
              container
              className={
                (item.state === 1
                  ? 'processed'
                  : item.state === 2
                  ? 'pending'
                  : item.state === 3
                  ? 'beingProcessed'
                  : 'review') + ' row td'
              }
            >
              <Grid xs={5}>{item.title}</Grid>
              <Grid xs={2}>{item.count + '次'}</Grid>
              <Grid xs={3}>
                {item.state === 1 ? '已处理' : item.state === 2 ? '待处理' : item.state === 3 ? '处理中' : '待复核'}
              </Grid>
              <Grid xs={2}>
                <button className="btn">操作</button>
              </Grid>
            </Grid>
          )
        })}
      </Box>
      <Box className="box">
        <Grid container className="tabs">
          <Grid xs={6} className="tab active">
            灌排设施
          </Grid>
          <Grid xs={6}>输配电设施</Grid>
        </Grid>
        <Box className="grid-module mt-17 ">
          <p className="title">水源水质</p>
          <Grid container>
            <Grid xs={4} className="cell">
              <p>分布质量</p>
              <p className="c-g">优</p>
            </Grid>
            <Grid xs={4} className="center">
              <p>水域面积</p>
              <p className="c-y">0.5 km²</p>
            </Grid>
            <Grid xs={4}>
              <p>水质评估</p>
              <p className="c-g">优</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="grid-module mt-17 "
          sx={{
            borderTop: '1px solid #1B4C9C'
          }}
        >
          <p className="title">灌排质量</p>
          <Grid container>
            <Grid xs={4}>
              <p>输水排水</p>
              <p className="c-g">优</p>
            </Grid>
            <Grid xs={4} className="center">
              <p>渠系分布</p>
              <p className="c-g">优</p>
            </Grid>
            <Grid xs={4}>
              <p>泵站</p>
              <p className="c-y">8个</p>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="box">
        <Grid container className="tabs">
          <Grid xs={6} className="br active">
            田块/道路
          </Grid>
          <Grid xs={6}>生态防护</Grid>
        </Grid>
        <Box className="grid-module mt-17 ">
          <p className="title">氮磷生态拦截沟渠</p>
          <Grid container>
            <Grid xs={3} className="cell">
              <p>数量</p>
              <p className="c-y">2</p>
            </Grid>
            <Grid xs={3} className="center">
              <p>总长</p>
              <p className="c-y">0.8km</p>
            </Grid>
            <Grid xs={3}>
              <p>覆盖面积</p>
              <p className="c-y">0.3万亩</p>
            </Grid>
            <Grid xs={3}>
              <p>降氮磷</p>
              <p className="c-g">35%</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="grid-module mt-17 "
          sx={{
            borderTop: '1px solid #1B4C9C'
          }}
        >
          <p className="title">农田防护林</p>
          <Grid container>
            <Grid xs={4}>
              <p>建设长度</p>
              <p className="c-y">1.3km</p>
            </Grid>
            <Grid xs={4} className="center">
              <p>防护面积</p>
              <p className="c-y">0.4万亩</p>
            </Grid>
            <Grid xs={4}>
              <p>有效防护率</p>
              <p className="c-g">91%</p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
