import React, { useEffect, useState, useRef } from 'react'
import { Box, Fade, Grid, FormLabel, MenuItem } from '@mui/material'
import Input from '@/components/Input'
import MyMenuItem from '@/components/MenuItem'
import Title from '@/pages/main/components/Title'
import SvgIcon from '@/components/SvgIcon'
import { garbageSorting } from '@/components/Map/json'
import './style.scss'
import '../common.scss'

export default function index({ garbageId, onItemClick }) {
  let deviceState = ['全部', '在线', '离线']
  // 显示状态
  let [visible, setVisible] = useState(true)
  // 列表
  const [list, setList] = useState([...garbageSorting])
  // 数据
  let [data, setData] = useState({
    id: 0,
    code: '',
    state: '',
    coordinates: [],
    address: '',
    video: '',
    position: '',
  })
  // 参数
  const [formParams, setFormParams] = useState({
    state: '全部',
  })

  useEffect(() => {
    let itemData: any = garbageSorting.find(item => {
      return item.id === garbageId
    })
    Object.keys(data).forEach(item => {
      data[item] = itemData[item]
    })
    setData({ ...data })
  }, [garbageId])

  /* 列表项点击事件 */
  const handleItemClick = itemData => {
    onItemClick(itemData)
    setVisible(true)
  }

  /* 下拉框选择 */
  const handleInputChange = (e, type) => {
    formParams[type] = e.target.value
    setFormParams({ ...formParams })
    let newList = []
    if (formParams.state !== '全部') {
      newList = [...garbageSorting].filter(item => {
        console.log(item)
        if (item.state === formParams.state) {
          return item
        }
      })
    } else {
      newList = [...garbageSorting]
    }
    setList([...newList])
  }
  return (
    <>
      <Box className={'leftBox leftBox_garbage'}>
        <Box className={'left'}>
          <Box className="top">
            <Title title="垃圾桶设备列表"></Title>
            <Grid container spacing={{ xs: 1 }} className="from">
              <Grid item xs={8} className="from-item">
                <FormLabel component="span" className="label">
                  设备状态
                </FormLabel>
                <Input
                  select
                  required
                  id="phoneInput"
                  size="small"
                  placeholder="设备状态"
                  value={formParams.state}
                  onChange={e => handleInputChange(e, 'state')}
                  autoComplete="off"
                  sx={{
                    width: '50%',
                  }}
                >
                  {deviceState.map((item, index) => (
                    <MyMenuItem key={index} value={item}>
                      {item}
                    </MyMenuItem>
                  ))}
                </Input>
              </Grid>
            </Grid>
          </Box>
          <Box className={'list'}>
            {list.map((item, index) => (
              <Box onClick={() => handleItemClick(item)} className={'item ' + (item.id === data.id ? 'active' : '')}>
                <p className={'title'}>
                  <span>
                    <SvgIcon svgName="garbage"></SvgIcon>
                    <span
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      {item.code}
                    </span>
                  </span>
                  <p
                    className={
                      'tigs ' +
                      (item.state === '在线' ? 'tigs_green' : item.state === '离线' ? 'tigs_red' : 'tigs_yellow')
                    }
                  >
                    {item.state}
                  </p>
                </p>
                <p className={'time'}>
                  <SvgIcon svgName="place"></SvgIcon>
                  <span
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    {item.address}
                  </span>
                </p>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Fade in={visible}>
        <Box className={'rightBox rightBox_garbage'}>
          <Box className="rightBox-warpper">
            <Box className="title_bar">
              <div className="title_info">
                <span className="title">{data.code}</span>
                <p
                  className={
                    'tigs ' +
                    (data.state === '在线' ? 'tigs_green' : data.state === '离线' ? 'tigs_red' : 'tigs_yellow')
                  }
                >
                  {data.state}
                </p>
              </div>
              {/* <SvgIcon
              svgName="closeX"
              svgClass="closeX"
              onClick={() => {
                setVisible(false)
              }}
            ></SvgIcon> */}
            </Box>
            <p className="mt font">地址：{data.position}</p>
            <p
              className="mt font"
              style={{
                display: 'flex',
              }}
            >
              <span>经纬度：</span>
              <div>
                {data.coordinates.length > 0 ? data.coordinates[0] : ''}
                <br />
                {data.coordinates.length > 0 ? data.coordinates[1] : ''}
              </div>
            </p>
            <p className="mt font">视频监控</p>

            <video
              key={data.id}
              className="mt-10"
              autoPlay={true}
              loop
              controls
              style={{
                width: '100%',
              }}
              src={data.video}
            >
              {/* <source src={data.video} type="video/mp4"></source> */}
            </video>
          </Box>
        </Box>
      </Fade>
    </>
  )
}
