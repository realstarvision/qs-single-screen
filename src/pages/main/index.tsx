import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, Typography, TextField, MenuItem, Snackbar, Slide } from '@mui/material'
import Table from '@/components/Table'
import Dialog from '@/components/Dialog'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Left from './components/Left'
import LeftDetails from './components/LeftDetails'
import Right from './components/Right'
import Centre from './components/Centre'
import Map from '@/components/Map'
import { CoordinateListByPage, FarmlandWarning } from '@/api'
import './style.scss'
import close from '@/assets/image/png/close.png'
import gather_img from '@/assets/image/default-image/gather_img.png'
import gather_img2 from '@/assets/image/default-image/gather_img2.png'
import video from '@/assets/image/default-image/video.png'

const fieldList = ['一级田长', '二级田长', '三级田长']
const departmentList = ['城管局', '农业农村局', '城规资临平分局']

export default function index() {
  // 地图组件
  const map = useRef(null)
  // 监视类型弹出框
  const [openMonitorType, setOpenMonitorType] = useState(false)
  // 查看详情弹出框
  const [viewDetailsVisible, setViewDetailsVisible] = useState(false)
  // 消息条显示状态
  const [openSnackbar, setOpenSnackbar] = useState(false)
  // 中间部分显示状态(点击polygon)
  const [centrePolygon, setCentrePolygon] = useState(null)
  // 存放对应选项的定时器
  const [timerBank, setTimerBank] = useState({})
  const timerBankRef = useRef(timerBank) // 解决异步使数据混乱问题
  //poylon坐标列表
  const [polygonList, setPolygonList] = useState<any>([])
  // 非农预警信息数据
  const [farmlandWarningData, setFarmlandWarningData] = useState({
    number: '',
    administrativeRegion: '',
    farmlandArea: '',
    townName: '',
    villageName: ''
  })

  // 初始化数据
  useEffect(() => {
    getFarmlandWarning()
  }, [])

  // 查看详情按钮触发事件
  const handleCheckDetails = () => {
    setViewDetailsVisible(true)
  }

  // 分页获取耕地对应的卫星图标注坐标信息
  const findCoordinateListByPage = (id, pageNumber, type) => {
    CoordinateListByPage({ id, pageNumber, pageSize: 100 }).then((data: any) => {
      data.records.forEach(item => {
        item.type = type
      })
      if (timerBankRef.current[id]) {
        setPolygonList([...data.records])
      }

      if (pageNumber === data.pages) {
        clearInterval(timerBankRef.current[id])
        timerBankRef.current[id] = null
        setTimerBank({ ...timerBankRef.current })
      }
    })
  }

  // 获取非农预警信息接口
  function getFarmlandWarning() {
    FarmlandWarning().then((data: any) => {
      setFarmlandWarningData(data)
    })
  }

  // 耕地选中事件
  const handlePlowlandChecked = (id, type) => {
    let pageNumber = 1
    findCoordinateListByPage(id, pageNumber, type)
    timerBankRef.current[id] = setInterval(function () {
      pageNumber++
      findCoordinateListByPage(id, pageNumber, type)
    }, 1000)
    setTimerBank({ ...timerBankRef.current })
  }

  // 耕地取消事件
  const handlePlowlandUnChecked = id => {
    // 重置定时器
    clearInterval(timerBankRef.current[id])
    timerBankRef.current[id] = null
    setTimerBank({ ...timerBankRef.current })

    // 清除多边形
    map.current.handleClearPolygon(id)
  }

  // 地图中多边形的点击事件
  const handlePolygonClick = e => {
    if (e.target.options.type === 1) {
      setOpenMonitorType(true)
    }
    setCentrePolygon(e.target)
  }

  // 中间部分返回退出事件
  const handleBack = () => {
    setCentrePolygon(null)
  }

  // 下发按钮事件
  const handleAssign = () => {
    setOpenMonitorType(false)
    setOpenSnackbar(true)
  }

  return (
    <Box className="main-container">
      {/* 地图 */}
      <Map ref={map} onPolygonClick={handlePolygonClick} polygonList={polygonList}></Map>
      {/* 左右中内容 */}
      <Grid container className="content_data">
        <Grid className="grid-left-box">
          <Left onPlowlandChecked={handlePlowlandChecked} onPlowlandUnchecked={handlePlowlandUnChecked}></Left>
        </Grid>
        {centrePolygon && centrePolygon.options.type === 0 && (
          <Grid className="grid-center-box">
            <Centre onBack={handleBack} polygon={centrePolygon}></Centre>
          </Grid>
        )}
        <Grid className="grid-right-box">
          <Right
            onCheckDetails={handleCheckDetails}
            onPlowlandChecked={handlePlowlandChecked}
            onPlowlandUnchecked={handlePlowlandUnChecked}
          ></Right>
        </Grid>
      </Grid>
      {centrePolygon && centrePolygon.options.type === 0 && <Box className="mask_layer"></Box>}

      {/* 监测类型中多边形点击弹出框 */}
      <Dialog
        open={openMonitorType}
        onClose={() => {
          setOpenMonitorType(false)
        }}
        className="dialog"
        maxWidth="xl"
      >
        <Box className="box">
          <Box className="header-bar">
            <Typography className="title">
              “{centrePolygon && centrePolygon.options.farmlandId == 5 ? '非农' : '非粮'}”预警处理
            </Typography>
            <img
              src={close}
              className="icon"
              onClick={() => {
                setOpenMonitorType(false)
              }}
            />
          </Box>
          <Box className="centent">
            <ul>
              <li>图斑编号:{farmlandWarningData.number}</li>
              <li>行政区名称:{farmlandWarningData?.administrativeRegion}</li>
              <li>乡镇名称:{farmlandWarningData?.townName}</li>
              <li>村名称:{farmlandWarningData?.villageName}</li>
              <li>耕地面积:{farmlandWarningData?.farmlandArea}</li>
            </ul>
            <Grid container className="grid-container">
              <Grid xs={8} className="grid-container-left">
                <p>
                  <span className="label">事件类型：</span>
                  <span className="content-font">疑似耕地种植种类更换</span>
                </p>
                <Box className="problem_description">
                  <span className="label">问题描述：</span>
                  <Input
                    required
                    id="outlined-required"
                    size="small"
                    placeholder="如：作物种类异常......"
                    rows={2}
                    multiline
                    autoComplete="off"
                    className="input"
                  />
                </Box>
                <Grid container className="gather_img">
                  <Grid xs={6}>
                    <p className="label">卫星采集图片：</p>
                    <img src={gather_img} />
                  </Grid>
                  <Grid xs={6}>
                    <p className="label">现场采集图片：</p>
                    <img src={gather_img2} />
                  </Grid>
                </Grid>
                <p className="eventType">
                  <span className="label">问题是否已处理：</span>
                  <span className="content-font">否</span>
                </p>
                <Box className="select-box">
                  <span className="label">下发田长：</span>
                  <Select
                    select
                    size="small"
                    sx={{
                      width: '75%'
                    }}
                  >
                    {fieldList.map((item, index) => (
                      <MenuItem
                        sx={{
                          fontSize: '0.2rem'
                        }}
                        key={index}
                        value={item}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box className="select-box">
                  <span className="label">协同部门：</span>
                  <Select
                    select
                    size="small"
                    sx={{
                      width: '75%'
                    }}
                  >
                    {departmentList.map((item, index) => (
                      <MenuItem
                        sx={{
                          fontSize: '0.2rem'
                        }}
                        key={index}
                        value={item}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Grid>
              <Grid xs={4} className="content-right">
                <Box>
                  <p className="label">附近铁塔视频查看：</p>
                  {/* <video className="video"></video> */}
                  <img src={video} className="video" />
                </Box>
                <button className="btn" onClick={handleAssign}>
                  下发
                </button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Dialog>

      {/* 查看详情弹出框 */}
      <Dialog
        open={viewDetailsVisible}
        onClose={() => {
          setViewDetailsVisible(false)
        }}
        className="dialog"
        maxWidth="xl"
      >
        <Table
          onQuit={() => {
            setViewDetailsVisible(false)
          }}
        ></Table>
      </Dialog>

      {/* 提示消息 */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbar}
        onClose={() => {
          setOpenSnackbar(false)
        }}
        autoHideDuration={3000}
      >
        <span className="snackBar">下发成功！</span>
      </Snackbar>
    </Box>
  )
}
