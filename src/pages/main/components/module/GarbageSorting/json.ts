/* 六边形图片 */
import danger from '@/assets/image/hexagon/danger.png'
import steady from '@/assets/image/hexagon/steady.png'
import dangerChecked from '@/assets/image/hexagon/danger_checked.png'
import steadyChecked from '@/assets/image/hexagon/steady_checked.png'
export let hexagonList = [
  {
    type: 'danger',
    label: '离线',
    img: danger,
    checkImg: dangerChecked,
    value: '18',
  },
  {
    type: 'steady',
    label: '在线',
    img: steady,
    checkImg: steadyChecked,
    value: '482',
  },
]

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

// 数据列表
export let deviceListColumns = [
  {
    // width: '3.5rem',
    width: '49%',
    key: 'code',
    title: '柜体编号'
  }, {
    // width: '3rem',
    width: '51%',
    key: 'state',
    title: '设备状态'
  },
]

