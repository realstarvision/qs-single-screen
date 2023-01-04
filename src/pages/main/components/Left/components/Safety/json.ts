import earth_surface_name from '@/assets/image/png/menu_name/earth_surface_name.png'
import earth_surface_name_active from '@/assets/image/png/menu_name/earth_surface_name_active.png'
import road_name from '@/assets/image/png/menu_name/road_name.png'
import road_name_active from '@/assets/image/png/menu_name/road_name_active.png'
import bridge_name from '@/assets/image/png/menu_name/bridge_name.png'
import bridge_name_active from '@/assets/image/png/menu_name/bridge_name_active.png'
import area_name from '@/assets/image/png/menu_name/area_name.png'
import area_name_active from '@/assets/image/png/menu_name/area_name_active.png'
import earth_surface from '@/assets/image/png/earth_surface.png'
import road from '@/assets/image/png/road.png'
import bridge from '@/assets/image/png/bridge.png'
import area from '@/assets/image/png/area.png'

export let menuList = [
  {
    id: 0,
    work_spaces: 'QS_demo',
    layers: 'QS_demo:QS_3_month_tif',
  },
  {
    id: 1,
    work_spaces: 'QS_demo',
    layers: 'QS_demo:qs_road_shp_1025',
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


export let mapTabs = [
  {
    name: earth_surface_name,
    activeName: earth_surface_name_active,
    icon: earth_surface,
  },
  {
    name: road_name,
    activeName: road_name_active,
    icon: road,
  },
  {
    name: bridge_name,
    activeName: bridge_name_active,
    icon: bridge,
  },
  {
    name: area_name,
    activeName: area_name_active,
    icon: area,
  },
]


/* 图表数据 */
export let list = [
  {
    name: '道路',
    data: [5, 4, 6, 7, 8, 10, 24],
  },
  {
    name: '桥梁',
    data: [28, 19, 20, 26, 21, 26, 28, 10],
  },
  {
    name: '其它',
    data: [8, 24, 9, 20, 10, 5, 9, 21],
  },
]

export let line = ['道路', '桥梁', '其它']
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