import { configureStore } from '@reduxjs/toolkit'
import wms from './module/wms'
import dangerLevel from './module/dangerLevel'
import networkMonitoring from './module/networkMonitoring'
import Switch from './module/switch'
import terrainClassificationActive from './module/terrainClassificationActive'
import keyAreasActive from './module/keyAreasActive'

export const store = configureStore({
  reducer: {
    wms,
    dangerLevel,
    networkMonitoring,
    Switch,
    terrainClassificationActive,
    keyAreasActive
  },
})