import point_danger from '@/assets/image/point/point_danger.png'
import point_safety from '@/assets/image/point/point_safety.png'
import point_fluctuate from '@/assets/image/point/point_fluctuate.png'
import point_default from '@/assets/image/point/point_default.png'
import point_environmental_protection from '@/assets/image/point/point.png'
import wellLidIcon3 from '@/assets/image/point/well_lid3.png'
import sewage_well_green from '@/assets/image/point/sewage_well_green.png'
import sewage_well_red from '@/assets/image/point/sewage_well_red.png'
import sewage_well_yellow from '@/assets/image/point/sewage_well_yellow.png'
import gully_pot_green from '@/assets/image/point/gully_pot_green.png'
import gully_pot_red from '@/assets/image/point/gully_pot_red.png'
import gully_pot_yellow from '@/assets/image/point/gully_pot_yellow.png'
import waterlogging_green from '@/assets/image/point/waterlogging_green.png'
import waterlogging_red from '@/assets/image/point/waterlogging_red.png'
import waterlogging_yellow from '@/assets/image/point/waterlogging_yellow.png'
import garbage_green from '@/assets/image/point/garbage_green.png'
import garbage_red from '@/assets/image/point/garbage_red.png'

/* 视频 */
import video from '@/assets/mp4/1.mp4'

/* 地图图片 */
import SN10007Img from '@/assets/image/map/SN10007.png'
import SN10008Img from '@/assets/image/map/SN10008.png'
import SN10009Img from '@/assets/image/map/SN10009.png'


// 点位
const point = [
  [30.37118, 120.26852],
  [30.36436, 120.27436],
  [30.35982, 120.28005],
  [30.35657, 120.27404],
  [30.33904, 120.28394],
]

// 重点区域
export let keyArea = [
  {
    id: 1,
    coordinates: [30.330256468346004, 120.279060673898],
    position: '杭州市上城区三村寺东北约271米',
    icon: point_danger,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "danger",
    code: '重点沉降区域1-1',
    address: '新街社区',
    title: '重点沉降区域1',
    time: '2021-12-06～2022-10-06',
    accumulativeTotal: '10mm',
    acreage: '16.8',
    state: '离线',
    lineChartData: [
      {
        name: '道路',
        data: [10, 60, 50, 70, 79, 26, 55, 35, 65, 3, 11, 47],
      },
      {
        name: '桥梁',
        data: [7, 33, 9, 70, 79, 26, 60, 35, 22, 3, 63, 77],
      },
      {
        name: '建筑',
        data: [50, 66, 9, 20, 79, 26, 53, 35, 72, 3, 63, 44],
      },
    ],
    circularRingData: [
      { value: 1, name: '道路' },
      { value: 2, name: '桥梁' },
      { value: 2, name: '建筑' },
    ],
    pointType: 'keyArea'
  }, {
    id: 2,
    coordinates: [30.330431920963775, 120.28149604797365],
    position: '杭州市上城区三角佃34-1正东方向118米乔司第一幼儿园胜稼分园西南约167米',
    icon: point_fluctuate,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "fluctuate",
    code: '重点沉降区域1-2',
    address: '新街社区',
    title: '重点沉降区域2',
    time: '2022-10-07～2022-12-14',
    accumulativeTotal: '12mm',
    acreage: '10',
    state: '离线',
    lineChartData: [
      {
        name: '道路',
        data: [15, 20, 25, 30, 10, 52, 60, 20, 30, 35, 40, 55],
      },
      {
        name: '桥梁',
        data: [10, 15, 18, 16, 24, 29, 50, 53, 58, 60, 55, 65],
      },
      {
        name: '建筑',
        data: [3, , 10, 20, 17, 20, 25, 30, 40, 45, 70, 30],
      },
    ],
    circularRingData: [
      { value: 4, name: '道路' },
      { value: 3, name: '桥梁' },
      { value: 1, name: '建筑' },
    ],
    pointType: 'keyArea'
  },

]



// 危险等级点位数据
export let dangerLevelPointData = [
  {
    coordinates: [30.37118, 120.26852],
    icon: point_danger,
    type: "danger",
    code: 'S01',
    address: '新街社区',
    state: '离线',
    position: '杭州市临平区永西村云家桥146号通富设备安装公司西北约194米'
  },
  {
    coordinates: [30.36436, 120.27436],
    icon: point_danger,
    type: "danger",
    code: 'S02',
    address: '新街社区',
    state: '在线',
    position: '杭州市临平区永西106正南方向35米鸿庆楼饭店'

  }, {
    coordinates: [30.35982, 120.28005],
    icon: point_safety,
    type: "safety",
    code: 'S03',
    address: '新街社区',
    state: '在线',
    position: '杭州市临平区陆家浜大院东北约240米'
  }, {
    code: 'S04',
    address: '新街社区',
    state: '在线',
    coordinates: [30.33904, 120.28394],
    icon: point_fluctuate,
    type: "fluctuate",
    position: '杭州市临平区停车场东南约162米'
  },
  {
    code: 'S05',
    address: '新街社区',
    state: '在线',
    coordinates: [30.35657, 120.27404],
    icon: point_fluctuate,
    type: "fluctuate",
    position: '杭州市临平区永中路西南约379米'
  }
]


// 道路
export let roadPoinList = [
  {
    id: 3,
    coordinates: [30.341578759900518, 120.28653864218121],
    position: '杭州市临平区乔莫西路8号杭州开瑞汽车修理厂',
    icon: point_danger,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "danger",
    code: 'S03',
    address: '新街社区',
    title: '道路沉降区域1',
    time: '2021-12-20～2022-10-06',
    accumulativeTotal: '12mm',
    acreage: '13',
    state: '在线',
    lineChartData: [
      {
        name: '道路',
        data: [5, 12, 40, 33, 50, 63, 78, 12, 3, 15, 55, 38],
      },
    ],
    circularRingData: [
      { value: 13, name: '道路' },
    ],
    pointType: 'road'
  },
  {
    id: 4,
    coordinates: [30.341361251671447, 120.28926376836137],
    position: '杭州市临平区乔司街道浙江省杭州市临平区乔司街道新街社区逸家花苑3幢东南约71米',
    icon: point_fluctuate,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "fluctuate",
    code: 'S04',
    address: '新街社区',
    title: '道路沉降区域2',
    time: '2021-12-18～2022-10-06',
    accumulativeTotal: '13mm',
    acreage: '14',
    state: '在线',
    lineChartData: [
      {
        name: '道路',
        data: [25, 23, 55, 86, 45, 36, 80, 35, 78, 31, 36, 46],
      },
    ],
    circularRingData: [
      { value: 14, name: '道路' },
    ],
    pointType: 'road'
  }, {
    id: 5,
    coordinates: [30.351527604216184, 120.29540072980983],
    position: '杭州市临平区乔井路1-1临平水务公司乔司分公司东北约124米',
    icon: point_fluctuate,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "fluctuate",
    code: 'S05',
    address: '新街社区',
    title: '道路沉降区域3',
    time: '2021-12-15～2022-10-06',
    accumulativeTotal: '11mm',
    acreage: '11',
    state: '在线',
    lineChartData: [
      {
        name: '道路',
        data: [20, 56, 76, 60, 50, 60, 40, 90, 45, 0, 15, 58],
      },
    ],
    circularRingData: [
      { value: 11, name: '道路' },
    ],
    pointType: 'road'
  }
]

// 桥梁
export let bridgePoinList = [
  {
    id: 6,
    coordinates: [30.333148110540282, 120.28691415133922],
    position: '杭州市临平区石塘东路1号维也纳酒店(杭州九堡四季青店)东南约63米',
    icon: point_danger,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "danger",
    code: 'S06',
    address: '新街社区',
    title: '桥梁地表沉降区域1',
    time: '2021-11-20～2022-08-11',
    accumulativeTotal: '5mm',
    acreage: '16',
    state: '在线',
    lineChartData: [
      {
        name: '桥梁',
        data: [70, 60, 45, 35, 68, 30, 45, 68, 69, 7, 36, 58],
      },
    ],
    circularRingData: [
      { value: 16, name: '桥梁' },
    ],
    pointType: 'bridge'
  },
  {
    id: 7,
    coordinates: [30.34763002851964, 120.2807879845444],
    position: '杭州市临平区乔中永和苑西门东南约143米',
    icon: point_fluctuate,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "fluctuate",
    code: 'S07',
    address: '新街社区',
    title: '桥梁地表沉降区域2',
    time: '2021-12-02～2022-10-01',
    accumulativeTotal: '13mm',
    acreage: '14',
    state: '在线',
    lineChartData: [
      {
        name: '桥梁',
        data: [11, 23, 28, 29, 25, 30, 35, 38, 45, 8, 63, 13],
      },
    ],
    circularRingData: [
      { value: 14, name: '桥梁' },
    ],
    pointType: 'bridge'
  }, {
    id: 8,
    coordinates: [30.357142907355016, 120.28300885647036],
    position: '杭州市临平区永和西北约183米',
    icon: point_fluctuate,
    defaultIcon: point_default,
    activeIcon: point_danger,
    type: "fluctuate",
    code: 'S08',
    address: '新街社区',
    title: '桥梁地表沉降区域3',
    time: '2021-12-13～2022-08-04',
    accumulativeTotal: '11mm',
    acreage: '11',
    state: '在线',
    lineChartData: [
      {
        name: '桥梁',
        data: [30, 35, 38, 15, 28, 29, 53, 54, 58, 13, 67, 34],
      },
    ],
    circularRingData: [
      { value: 11, name: '桥梁' },
    ],
    pointType: 'bridge'
  }
]


// 管网监测
export let networkMonitoring = [
  {
    coordinates: [30.37118, 120.26852],
    position: '杭州市临平区永西村云家桥146号通富设备安装公司西北约194米',
    code: 'S01',
    address: '新街社区',
    state: '在线',
    icon: point_default,
    type: "normal",
    flowVelocity: '3.4m/s',
    depthOfWater: '5m'
  },
  {
    coordinates: [30.36436, 120.27436],
    position: '杭州市临平区永西106正南方向35米鸿庆楼饭店',
    code: 'S02',
    address: '新街社区',
    state: '离线',
    icon: point_default,
    type: "offline",
    flowVelocity: '3.8m/s',
    depthOfWater: '3m'
  }, {
    coordinates: [30.35982, 120.28005],
    position: '杭州市临平区陆家浜大院东北约240米',
    code: 'S03',
    address: '航海路社区',
    state: '在线',
    icon: point_default,
    type: "alarm",
    flowVelocity: '2.4m/s',
    depthOfWater: '6m'
  }, {
    coordinates: [30.33904, 120.28394],
    position: '杭州市临平区停车场东南约162米',
    code: 'S04',
    address: '乔司社区',
    state: '在线',
    icon: point_default,
    type: "normal",
    flowVelocity: '2.5m/s',
    depthOfWater: '7m'
  },
  {
    coordinates: [30.35657, 120.27404],
    position: '杭州市临平区永中路西南约379米',
    code: 'S05',
    address: '航海路社区',
    state: '在线',
    icon: point_default,
    type: "alarm",
    flowVelocity: '1m/s',
    depthOfWater: '1m'
  }
]


// 污水井  state: 1在线  2漫水预警  3离线
export let wellLid1 = [
  {
    id: 1,
    title: 'SN10001',
    coordinates: [30.357243, 120.276456],
    position: '杭州市临平区陆家浜大院西南约264米',
    text: '污水井',
    icon: sewage_well_green,
    state: 1,
    place: '浙江省杭州市临平区乔司街道',
    joinTime: '2021-10-23 12:23:23',
    alarmTime: '2022-11-23 11:28:18',
  },
  {
    id: 2,
    title: 'SN10002',
    coordinates: [30.359680, 120.258714],
    position: '杭州市临平区和睦桥3组27号正西方向86米和睦桥村农贸市场',
    text: '污水井',
    icon: sewage_well_yellow,
    state: 2,
    place: '浙江省杭州市临平区乔司街道',
    alarmTime: '2022-12-08 09:23:23',
    joinTime: '2021-11-24 09:23:23'
  }, {
    id: 3,
    title: 'SN10003',
    coordinates: [30.343129, 120.267082],
    position: '杭州市临平区牛头基',
    text: '污水井',
    icon: sewage_well_red,
    state: 3,
    place: '浙江省杭州市临平区乔司街道',
    joinTime: '2021-11-27 04:36:11',
    alarmTime: '2022-11-22 11:23:18',
  },
]

// 雨水井  state: 1在线  2漫水预警  3离线
export let wellLid2 = [
  {
    id: 4,
    title: 'SN10004',
    coordinates: [30.343261, 120.277161],
    position: '杭州市临平区牛头基',
    text: '雨水井',
    icon: gully_pot_green,
    state: 1,
    place: '浙江省杭州市临平区乔司街道',
    alarmTime: '2022-12-06 10:11:23',
    joinTime: '2022-01-11 12:11:11'
  },
  {
    id: 5,
    title: 'SN10005',
    coordinates: [30.336294, 120.287168],
    position: '杭州市临平区乔司街道杭海路1605号东北方向150米杭州市公安局临平区分局乔司派出所消控中队',
    text: '雨水井',
    icon: gully_pot_yellow,
    state: 2,
    place: '浙江省杭州市临平区乔司街道',
    alarmTime: '2022-12-03 12:19:11',
    joinTime: '2022-02-13 01:15:17'
  }, {
    id: 6,
    title: 'SN10006',
    coordinates: [30.354174, 120.281764],
    position: '杭州市临平区乔司街道永玄路135号杭州市临平区乔司中学电动汽车充电站西北约101米',
    text: '雨水井',
    icon: gully_pot_red,
    state: 3,
    place: '浙江省杭州市临平区乔司街道',
    alarmTime: '2022-12-07 11:23:18',
    joinTime: '2022-08-14 08:22:19'
  },
]

/* 内涝 */  // state: 1低危险区  2中风险区  3高风险区
export let waterlogging = [
  // {
  //   id: 1,
  //   title: 'SN10007',
  //   coordinates: [30.353261, 120.287161],
  //   icon: waterlogging_green,
  //   state: 1,
  //   place: '浙江省杭州市临平区乔司街道',
  //   alarmTime: '2022-12-06 10:11:23',
  //   joinTime: '2022-01-11 12:11:11',
  //   acreage: '10m²',
  //   mapImg: SN10007Img
  // },
  {
    id: 1,
    title: 'SN10008',
    coordinates: [30.35163183455712, 120.29352850257808],
    position: '杭州市临平区乔莫东路65嘉丽土水漆',
    icon: waterlogging_yellow,
    state: 2,
    place: '浙江省杭州市临平区乔司街道',
    alarmTime: '2022-12-03 12:19:11',
    joinTime: '2022-02-13 01:15:17',
    acreage: '96m²',
    mapImg: SN10008Img
  }, {
    id: 2,
    title: 'SN10009',
    coordinates: [30.347310808784187, 120.28241869399764],
    position: '杭州市临平区博卡路18-37纸包鱼大排档乔司店',
    icon: waterlogging_red,
    state: 3,
    place: '浙江省杭州市临平区乔司街道',
    alarmTime: '2022-12-07 11:23:18',
    joinTime: '2022-08-14 08:22:19',
    acreage: '150m²',
    mapImg: SN10009Img
  },
]

// 传感器水井
export let wellLid3 = [
  {
    coordinates: [30.338362, 120.277061],
    position: '杭州市临平区朝阳村三村一组195号-1正东方向11米西南约214米',
    code: 'S01',
    address: '新街社区',
    state: '在线',
    icon: wellLidIcon3,
    type: "normal",
    flowVelocity: '3.4m/s',
    depthOfWater: '5m'
  },
  {
    coordinates: [30.352939, 120.278695],
    position: '杭州市临平区葛家车东北约145米',
    code: 'S02',
    address: '新街社区',
    state: '离线',
    icon: wellLidIcon3,
    type: "offline",
    flowVelocity: '3.8m/s',
    depthOfWater: '3m'
  }, {
    coordinates: [30.332691, 120.282631],
    position: '杭州市临平区三角佃34-1正东方向118米乔司第一幼儿园胜稼分园东北约134米',
    code: 'S03',
    address: '航海路社区',
    state: '在线',
    icon: wellLidIcon3,
    type: "alarm",
    flowVelocity: '2.4m/s',
    depthOfWater: '6m'
  }, {
    coordinates: [30.350838, 120.286534],
    position: '杭州市临平区博卡路18-37纸包鱼大排档乔司店',
    code: 'S04',
    address: '乔司社区',
    state: '在线',
    icon: wellLidIcon3,
    type: "normal",
    flowVelocity: '2.5m/s',
    depthOfWater: '7m'
  },
]

// 垃圾分类
export let garbageSorting = [
  {
    id: 1,
    coordinates: [30.37112, 120.26853],
    position: '杭州市临平区永西村云家桥146号通富设备安装公司西北约192米',
    code: 'S01',
    address: '乔司社区',
    state: '在线',
    icon: garbage_green,
    type: "normal",
    video: video

  },
  {
    id: 2,
    coordinates: [30.37555, 120.27555],
    position: '杭州市临平区东桥头西南约159米',
    code: 'S02',
    address: '新街社区',
    state: '在线',
    icon: garbage_green,
    type: "offline",
    video: video

  }, {
    id: 3,
    coordinates: [30.35222, 120.26555],
    position: '杭州市临平区葛家车村12组30~31号东南方向105米西北约219米',
    code: 'S03',
    address: '航海路社区',
    state: '在线',
    icon: garbage_green,
    type: "alarm",
    video: video
  },
  {
    id: 4,
    coordinates: [30.35111, 120.28344],
    position: '杭州市临平区乔司街道乔莫西路111号浙江众美汽车有限公司',
    code: 'S04',
    address: '新街社区',
    state: '离线',
    icon: garbage_red,
    type: "offline",
    video: video
  },
  {
    id: 5,
    coordinates: [30.34666, 120.28855],
    position: '杭州市临平区乔司街道浙江省杭州市临平区乔司街道新街社区东冠逸景花苑14幢西北约134米',
    code: 'S05',
    address: '新街社区',
    state: '离线',
    icon: garbage_red,
    type: "offline",
    video: video
  }, {
    id: 6,
    coordinates: [30.34886, 120.26999],
    position: '杭州市临平区葛家车村20组15号华杰拉链',
    code: 'S06',
    address: '新街社区',
    state: '离线',
    icon: garbage_red,
    type: "offline",
    video: video
  },
]


// DSM高度显示点位
export let DSMHeightPoint = [
  {
    id: 1,
    coordinates: [30.369926670519025, 120.2786421405614],
    position: '杭州市临平区太公堂路西南约100米',
    height: '130m',
    code: 'SN1010',
    icon: point_default
  }, {
    id: 2,
    coordinates: [30.36688048065069, 120.2742325519206],
    position: '杭州市临平区陈公桥4东南方向50米东北约233米',
    height: '85m',
    code: 'SN1011',
    icon: point_default
  }, {
    id: 3,
    coordinates: [30.349037963839162, 120.27749415510306],
    position: '杭州市临平区葛家车村16组63号杭州下沙欣怡服饰东北约198米',
    height: '90m',
    code: 'SN1012',
    icon: point_default
  }, {
    id: 4,
    coordinates: [30.35791710560762, 120.24816148029582],
    position: '杭州市临平区乔司公铁立交桥东北约138米',
    height: '65m',
    code: 'SN1013',
    icon: point_default
  }, {
    id: 5,
    coordinates: [30.361438436371447, 120.26962991827136],
    position: '杭州市临平区永西村委会西南约142米',
    height: '40m',
    code: 'SN1014',
    icon: point_default
  }, {
    id: 6,
    coordinates: [30.367344729748375, 120.2573347091675],
    position: '杭州市临平区横铁线东南约354米',
    height: '110m',
    code: 'SN1015',
    icon: point_default
  },
]