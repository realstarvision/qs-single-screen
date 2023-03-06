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
    code: 'QS01',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-02',
    abnormal: '无异常',
    area: '乔井路56号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS02',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-03',
    abnormal: '无异常',
    area: '乔井路68号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS03',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-04',
    abnormal: '无异常',
    area: '乔井路69号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS04',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-05',
    abnormal: '无异常',
    area: '乔井路70号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS05',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-06',
    abnormal: '无异常',
    area: '乔井路70号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS06',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-07',
    abnormal: '无异常',
    area: '乔井路70号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS07',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-08',
    abnormal: '无异常',
    area: '乔井路70号',
    title: '智能柜信息公告',
    announcementType: 2
  }, {
    code: 'QS08',
    custodian: '李某某',
    type: '垃圾智能柜',
    sate: '在线',
    time: '2022-09-09',
    abnormal: '无异常',
    area: '乔井路70号',
    title: '智能柜信息公告',
    announcementType: 2
  },
]

export let deviceListColumns = [
  {
    // width: '3.5rem',
    key: 'code',
    title: '柜体编号'
  }, {
    // width: '3rem',
    key: 'state',
    title: '设备状态'
  },
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
export let xAxisData = ['', '2022/09/01', '', '2022/09/15', '', '2022/09/30', '']