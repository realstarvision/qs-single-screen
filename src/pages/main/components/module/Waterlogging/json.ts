import danger from '@/assets/image/hexagon/danger.png'
import steady from '@/assets/image/hexagon/steady.png'
import fluctuate from '@/assets/image/hexagon/fluctuate.png'
import dangerChecked from '@/assets/image/hexagon/danger_checked.png'
import steadyChecked from '@/assets/image/hexagon/steady_checked.png'
import fluctuateChecked from '@/assets/image/hexagon/fluctuate_checked.png'

export let hexagonList = [
  {
    type: 'fluctuate',
    label: '告警',
    img: fluctuate,
    checkImg: fluctuateChecked,
    value: '18',
  },
  {
    type: 'steady',
    label: '正常',
    img: steady,
    checkImg: steadyChecked,
    value: '472',
  },
  {
    type: 'danger',
    label: '离线',
    img: danger,
    checkImg: dangerChecked,
    value: '10',
  },
]


export let columns = [
  {
    key: 'deviceCode',
    title: '易涝风险区域名'
  }, {
    key: 'coord',
    title: '中心坐标'
  }, {
    key: 'deviceState',
    title: '危险等级'
  }
  // }, {
  //   key: 'offset',
  //   title: '井盖位移'
  // }, {
  //   key: 'steal',
  //   title: '井盖被盗'
  // }, {
  //   key: 'overflow',
  //   title: '井下水溢出'
  // }, {
  //   key: 'flow',
  //   title: '井下流量监测'
  // },
]

// 数据
export let listData = [
  {
    deviceCode: '杭海路',
    coord: '(29.129365,121.24689)',
    deviceState: '中风险'
  }, {
    deviceCode: '胜桑路',
    coord: '(29.129333,121.24455)',
    deviceState: '中风险'
  },
  {
    deviceCode: '三卫路',
    coord: '(29.129330,121.24404)',
    deviceState: '中风险'
  },
  {
    deviceCode: '杭海路',
    coord: '(29.126522,121.12468)',
    deviceState: '中风险'
  },
  {
    deviceCode: '杭海路',
    coord: '(29.126588,121.12469)',
    deviceState: '中风险'
  },
  {
    deviceCode: '杭海路',
    coord: '(29.126544,121.12463)',
    deviceState: '中风险'
  },
  {
    deviceCode: '杭海路',
    coord: '(29.126531,121.12464)',
    deviceState: '中风险'
  }
]
// export let listData = [
//   {
//     deviceCode: 'YJ01',
//     coord: '乔中永和苑二区窖井',
//     deviceState: '正常运行',
//     offset: '是',
//     steal: '否',
//     overflow: '是',
//     flow: '0.6m³/min'
//   }, {
//     deviceCode: 'YJ01',
//     coord: '乔中永和苑二区窖井',
//     deviceState: '正常运行',
//     offset: '是',
//     steal: '否',
//     overflow: '是',
//     flow: '0.6m³/min'
//   }, {
//     deviceCode: 'YJ01',
//     coord: '乔中永和苑二区窖井',
//     deviceState: '正常运行',
//     offset: '是',
//     steal: '否',
//     overflow: '是',
//     flow: '0.6m³/min'
//   }, {
//     deviceCode: 'YJ01',
//     coord: '乔中永和苑二区窖井',
//     deviceState: '正常运行',
//     offset: '是',
//     steal: '否',
//     overflow: '是',
//     flow: '0.6m³/min'
//   }
// ]


/* 公告信息表格数据 */
export let announcementColumns = [
  {
    key: 'code',
    title: '公告编号',
    width: '18.8%'
  }, {
    key: 'custodian',
    title: '发布人',
    width: '18.8%'
  }, {
    key: 'type',
    title: '公告类型',
    width: '18.8%',
    style: { color: '#FFD141' }
  }, {
    key: 'time',
    title: '公告时间',
    width: '18.8%'
  }, {
    key: 'title',
    title: '公告标题',
    width: '24.8%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }
]
export let announcementListData = [
  {
    code: 'SG01',
    custodian: '某某某',
    type: '水涝',
    title: '乔司预警信息公告',
    time: '2022-10-30',
    announcementType: 1
  }, {
    code: 'SG02',
    custodian: '某某某',
    type: '水涝',
    title: '乔司预警信息公告',
    time: '2022-10-30',
    announcementType: 1
  }, {
    code: 'SG03',
    custodian: '某某某',
    type: '水涝',
    title: '乔司预警信息公告',
    time: '2022-10-30',
    announcementType: 1
  }, {
    code: 'SG04',
    custodian: '某某某',
    type: '水涝',
    title: '乔司预警信息公告',
    time: '2022-10-30',
    announcementType: 1
  }, {
    code: 'SG05',
    custodian: '某某某',
    type: '水涝',
    title: '乔司预警信息公告',
    time: '2022-10-30',
    announcementType: 1
  }, {
    code: 'SG026',
    custodian: '某某某',
    type: '水涝',
    title: '乔司预警信息公告',
    time: '2022-10-30',
    announcementType: 1
  },
]

/* 事件处理情况表格数据 */
export let eventProcessingColumns = [
  {
    key: 'eventType',
    title: '工单名称',
    width: '20.1%'
  }, {
    key: 'description',
    title: '处理人',
    width: '14%'
  }, {
    key: 'area',
    title: '涉事区域',
    width: '23.9%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  },
  {
    key: 'time',
    title: '发生时间',
    width: '14%'
  }, {
    key: 'extent',
    title: '紧急程度',
    width: '14%'
  }, {
    key: 'state',
    title: '状态',
    width: '14%',
  },
]

export let eventProcessingListData = [
  {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道航海路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道永玄路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道胜桑路',
    description: '城建科刘安',
    extent: '2',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道九华路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  },
  {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道科城街',
    description: '城建科刘安',
    extent: '4',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道三卫路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道航海路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道永玄路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道胜桑路',
    description: '城建科刘安',
    extent: '2',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道九华路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  },
  {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道科城街',
    description: '城建科刘安',
    extent: '4',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道三卫路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道航海路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道永玄路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道胜桑路',
    description: '城建科刘安',
    extent: '2',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道九华路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  },
  {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道科城街',
    description: '城建科刘安',
    extent: '4',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道三卫路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道航海路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道永玄路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道胜桑路',
    description: '城建科刘安',
    extent: '2',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道九华路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  },
  {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道科城街',
    description: '城建科刘安',
    extent: '4',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道三卫路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道航海路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道永玄路',
    description: '城建科刘安',
    extent: '1',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道胜桑路',
    description: '城建科刘安',
    extent: '2',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道九华路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  },
  {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道科城街',
    description: '城建科刘安',
    extent: '4',
    personnel: '城建科刘安',
    state: '已办结'
  }, {
    eventType: '预警',
    time: '2022-12-26',
    area: '乔司街道三卫路',
    description: '城建科刘安',
    extent: '3',
    personnel: '城建科刘安',
    state: '审核中'
  },

]

