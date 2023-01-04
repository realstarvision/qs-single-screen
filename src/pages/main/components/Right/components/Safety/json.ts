/* 公告信息表格数据 */
export let announcementColumns = [
  {
    key: 'code',
    title: '公告编号',
    width: '4rem'
  }, {
    key: 'custodian',
    title: '发布人',
    width: '3.5rem'
  }, {
    key: 'type',
    title: '公告类型',
    width: '4rem'
  }, {
    key: 'time',
    title: '公告时间',
    width: '5rem'
  }, {
    key: 'title',
    title: '公告标题',
    width: '10rem'
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
  }
]

/* 事件处理情况表格数据 */
export let eventProcessingColumns = [
  {
    width: '3.2rem',
    key: 'eventType',
    title: '工单名称',
  }, {
    width: '4rem',
    key: 'personnel',
    title: '处理人'
  }, {
    width: '6rem',
    key: 'area',
    title: '涉事区域'
  }, {
    width: '6.5rem',
    key: 'time',
    title: '发生时间'
  }, {
    width: '2rem',
    key: 'extent',
    title: '紧急程度'
  }, {
    width: '5.5rem',
    key: 'state',
    title: '状态'
  },
  // {
  //   width: '3.5rem',
  //   key: 'description',
  //   title: '事件描述'
  // },
]
export let eventProcessingListData = [
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
  }
]




/* 事件处理趋势图表 */
export let list = [
  {
    name: '总事件',
    data: [150, 230, 224, 218, 135, 147, 260],
  },
  {
    name: '已处理',
    data: [150, 230, 224, 218, 135, 147, 260],
  }
]
export let line = ['总事件', '已处理',]
export let xAxisData = ['2022/04/01', '', '2022/10/01', '', '2023/04/01', '', '2023/10/01']