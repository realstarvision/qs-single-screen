import request from '@/utils/request'

const api = {
  getFarmlandAccountBookList: '/farmland/getFarmlandAccountBookList',
  getFarmlandControlList: '/farmland/getFarmlandControlList',
  getFarmlandDataShare: '/farmland/getFarmlandDataShare',
  getFarmlandDepartStride: '/farmland/getFarmlandDepartStride',
  getFarmlandProblem: '/farmland/getFarmlandProblem',
  getFarmlandStandard: '/farmland/getFarmlandStandard',
  findCoordinateListByPage: '/farmland/findCoordinateListByPage',
  getFarmlandParcel: '/farmland/getFarmlandParcel',
  getFarmlandWarning: '/farmland/getFarmlandWarning',
  getFarmlandAreaProblemList: '/farmland/getFarmlandAreaProblemList',
  getFarmlandBoundary: '/farmland/getFarmlandBoundary'
}


/** 获取耕地质量账本：总览列表  */
export function FarmlandAccountBookList() {
  return request({
    url: api.getFarmlandAccountBookList,
    method: 'get',
  })
}


/** 获取耕地用途管制列表：总览列表  */
export function FarmlandControlList() {
  return request({
    url: api.getFarmlandControlList,
    method: 'get',
  })
}

/** 数据共享共用  */
export function FarmlandDataShare() {
  return request({
    url: api.getFarmlandDataShare,
    method: 'get',
  })
}

/** 多跨联动  */
export function FarmlandDepartStride() {
  return request({
    url: api.getFarmlandDepartStride,
    method: 'get',
  })
}

/** 问题来源  */
export function FarmlandProblem() {
  return request({
    url: api.getFarmlandProblem,
    method: 'get',
  })
}

/** 获取高标农田数量指标  */
export function FarmlandStandard() {
  return request({
    url: api.getFarmlandStandard,
    method: 'get',
  })
}


/** 分页获取耕地对应的卫星图标注坐标信息  
 * @param id 耕地列表对应ID
 * @param pageNumber 页码:必须大于0
 * @param pageSize 每页条数：必须大于0
*/
export function CoordinateListByPage(data) {
  return request({
    url: api.findCoordinateListByPage,
    method: 'post',
    data
  })
}

/** 获取非农预警信息 */
export function FarmlandWarning() {
  return request({
    url: api.getFarmlandWarning,
    method: 'get',
  })
}

/** 农田地块信息 */
export function FarmlandParcel() {
  return request({
    url: api.getFarmlandParcel,
    method: 'get',
  })
}


/** 农田问题报表 */
export function FarmlandAreaProblemList() {
  return request({
    url: api.getFarmlandAreaProblemList,
    method: 'get',
  })
}

/** 获取边界经纬度 */
export function FarmlandBoundary() {
  return request({
    url: api.getFarmlandBoundary,
    method: 'get',
  })
}











