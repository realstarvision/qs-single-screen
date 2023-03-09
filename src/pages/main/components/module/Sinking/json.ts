/* 六边形图片 */
import danger from '@/assets/image/hexagon/danger.png'
import dangerChecked from '@/assets/image/hexagon/danger_checked.png'
import steady from '@/assets/image/hexagon/steady.png'
import steadyChecked from '@/assets/image/hexagon/steady_checked.png'
import fluctuate from '@/assets/image/hexagon/fluctuate.png'
import fluctuateChecked from '@/assets/image/hexagon/fluctuate_checked.png'
export let dangerLevelHexagonList = [
  {
    type: 'fluctuate',
    label: '有波动',
    img: fluctuate,
    checkImg: fluctuateChecked,
    value: '9.06',
  },
  {
    type: 'steady',
    label: '平稳',
    img: steady,
    checkImg: steadyChecked,
    value: '14.85',
  },
  {
    type: 'danger',
    label: '危险',
    img: danger,
    checkImg: dangerChecked,
    value: '6.09',
  },
]

// 沉降瓦图列表
export let wmsList = [
  {
    id: 0,
    work_spaces: 'QS_demo',
    layers: 'QS_demo:QS_3_month_tif',
    layers_danger: 'QS_demo:qs_road_shp_1025',
    layers_steady: 'QS_demo:QS_metro_tiff',
    layers_fluctuate: 'QS_demo:QS_SL3month_tif',
  },
  {
    id: 1,
    work_spaces: 'QS_demo',
    layers: 'QS_demo:qs_road_shp_1025',
    layers_danger: 'QS_demo:qs_group_20221227',
    layers_steady: 'qs_grass_shp',
    layers_fluctuate: 'qs_water_shp',
  },
  {
    id: 2,
    work_spaces: 'QS_demo',
    layers: 'QS_demo:QS_metro_tiff',
  },
  {
    id: 3,
    work_spaces: 'QS_demo',
    layers: 'QS_demo:QS_SL3month_tif',
  }
]



/* 图表数据 */
export let list = [
  {
    name: '上升',
    data: [5, 4, 6, 7, 8, 10, 24],
  },
  {
    name: '下降',
    data: [28, 19, 20, 26, 21, 26, 28, 10],
  }
]

export let line = ['上升', '下降']
export let xAxisData = ['2022/1', '2022/3', '2022/4', '2022/5', '2022/7', '2022/9', '2022/11       ']


/* 图表数据 */
export let dangerList = [
  {
    name: '平稳',
    data: [15, 20, 4, 23, 15, 10, 5],
  },
  {
    name: '有波动',
    data: [17, 3, 22, 7, 9, 6, 15],
  },
  {
    name: '危险',
    data: [5, 6, 17, 20, 9, 26, 3],
  },
]

export let dangerLine = ['平稳', '有波动', '危险']
export let xAxisDataDanger = ['2022/1', '2022/3', '2022/4', '2022/5', '2022/7', '2022/9', '2022/11       ']





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
    width: '18.8%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }, {
    key: 'title',
    title: '公告标题',
    width: '24.8%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  },
]
export let announcementListData = [
  {
    code: 'SG01',
    custodian: '李XX',
    type: '道路施工',
    time: '2022-10-30',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG02',
    custodian: '李XX',
    type: '道路施工',
    time: '2022-05-23',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG03',
    custodian: '李XX',
    type: '道路施工',
    time: '2022-01-01',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG04',
    custodian: '刘XX',
    type: '道路施工',
    time: '2022-09-20',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG05',
    custodian: '刘XX',
    type: '道路施工',
    time: '2022-10-28',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG06',
    custodian: '刘XX',
    type: '道路施工',
    time: '2022-10-28',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG01',
    custodian: '李XX',
    type: '道路施工',
    time: '2022-10-30',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG02',
    custodian: '李XX',
    type: '道路施工',
    time: '2022-05-23',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG03',
    custodian: '李XX',
    type: '道路施工',
    time: '2022-01-01',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG04',
    custodian: '刘XX',
    type: '道路施工',
    time: '2022-09-20',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG05',
    custodian: '刘XX',
    type: '道路施工',
    time: '2022-10-28',
    title: '乔司预警信息公告',
    announcementType: 0
  }, {
    code: 'SG06',
    custodian: '刘XX',
    type: '道路施工',
    time: '2022-10-28',
    title: '乔司预警信息公告',
    announcementType: 0
  }
]

/* 事件处理情况表格数据 */
export let eventProcessingColumns = [
  {
    key: 'eventType',
    title: '工单名称',
    width: '20.1%'
  }, {
    key: 'personnel',
    title: '处理人',
    width: '14%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }, {
    key: 'area',
    title: '涉事区域',
    width: '23.9%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }, {
    key: 'time',
    title: '发生时间',
    width: '14%',
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }, {
    key: 'extent',
    title: '紧急程度',
    width: '14%'
  }, {
    key: 'state',
    title: '状态',
    width: '14%',
  },
  // {
  //   width: '3.5rem',
  //   key: 'description',
  //   title: '事件描述'
  // },
]
export let eventProcessingListData = [{
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道杭海路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '3',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道永玄路',
  description: '地面沉降预警',
  extent: '4',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道博卡路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '审核'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道九华路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '审核'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道杭海路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '3',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道永玄路',
  description: '地面沉降预警',
  extent: '4',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道博卡路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '审核'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道九华路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '审核'
},
{
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道杭海路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '3',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道永玄路',
  description: '地面沉降预警',
  extent: '4',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道博卡路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '审核'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道九华路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '审核'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道杭海路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道胜桑路',
  description: '地面沉降预警',
  extent: '3',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道永玄路',
  description: '地面沉降预警',
  extent: '4',
  personnel: '城建科刘安',
  state: '已办结'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道博卡路',
  description: '地面沉降预警',
  extent: '1',
  personnel: '城建科刘安',
  state: '审核'
}, {
  eventType: '预警',
  time: '2022-12-26',
  area: '乔司街道九华路',
  description: '地面沉降预警',
  extent: '2',
  personnel: '城建科刘安',
  state: '审核'
}
]


/* 事件处理趋势图表 */
export let list1 = [
  {
    name: '总事件',
    data: [150, 230, 224, 218, 135, 147, 260],
  },
  {
    name: '已处理',
    data: [150, 230, 224, 218, 135, 147, 260],
  }
]
export let line1 = ['总事件', '已处理',]
export let xAxisData1 = ['2022/04/01', '', '2022/10/01', '', '2023/04/01', '', '2023/10/01']