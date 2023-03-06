import earth_surface_name from '@/assets/image/tabs/safety_tabs/earth_surface_name.png'
import earth_surface_name_active from '@/assets/image/tabs/safety_tabs/earth_surface_name_active.png'
import road_name from '@/assets/image/tabs/safety_tabs/road_name.png'
import road_name_active from '@/assets/image/tabs/safety_tabs/road_name_active.png'
import bridge_name from '@/assets/image/tabs/safety_tabs/bridge_name.png'
import bridge_name_active from '@/assets/image/tabs/safety_tabs/bridge_name_active.png'
import area_name from '@/assets/image/tabs/safety_tabs/area_name.png'
import area_name_active from '@/assets/image/tabs/safety_tabs/area_name_active.png'


// 沉降菜单
export let mapTabs = [
  {
    name: earth_surface_name,
    activeName: earth_surface_name_active,
    label: '乔司全域地表沉降',
  },
  {
    name: road_name,
    activeName: road_name_active,
    label: '主要道路地表沉降',
  },
  {
    name: bridge_name,
    activeName: bridge_name_active,
    label: '桥梁立交地表沉降',
  },
  {
    name: area_name,
    activeName: area_name_active,
    label: '重点区域地表沉降',
  },
]