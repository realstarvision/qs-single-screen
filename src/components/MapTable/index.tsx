import React from 'react'
import { Box } from '@mui/material'
import './style.scss'

export default function index({ data }) {
  return (
    <Box>
      <table width="100%" cellPadding={5} border={1} align="center" className="mapTable">
        <tr>
          <th colSpan={9}>地块名称</th>
          <th colSpan={2} className="date">
            时间：2022年06月25日
          </th>
        </tr>

        <tr className="tr">
          <th colSpan={2}>地块信息</th>
          <th colSpan={2}>土壤肥力</th>
          <th colSpan={2}>土壤污染</th>
          <th colSpan={3}>病虫害</th>
          <th colSpan={2}>作物长势</th>
        </tr>

        <tr className="tr">
          <td>种植种类：</td>
          <td>{data.plantType}</td>
          <td>全氮</td>
          <td>{data.naphtha}</td>
          <td>重金属</td>
          <td>{data.heavyMetal}</td>
          <td>二化</td>
          <td>{data.chiloSuppressalisSum}</td>
          <td>{data.chiloSuppressalisTreatment}</td>
          <td>叶绿素含量</td>
          <td>{data.chlorophyll}</td>
        </tr>
        <tr className="tr">
          <td>地块面积：</td>
          <td>{data.parcelArea}</td>
          <td>有效磷</td>
          <td>{data.phosphorus}</td>
          <td>酸碱化</td>
          <td>{data.acidAlkali}</td>
          <td>稻飞虱</td>
          <td>{data.riceFulgoridSum}</td>
          <td>{data.riceFulgoridTreatment}</td>
          <td>叶片含水量</td>
          <td>{data.leafWaterContent}</td>
        </tr>
        <tr className="tr">
          <td>地块位置：</td>
          <td>
            {data.parcelLocations ? data.parcelLocations[0] : ''}
            <br />
            {data.parcelLocations ? data.parcelLocations[1] : ''}
          </td>
          <td>速效钾</td>
          <td>{data.potassium}</td>
          <td>农药残留</td>
          <td>{data.pesticide}</td>
          <td>纹枯病</td>
          <td>{data.bandedSclerotialBlightSum}</td>
          <td>{data.bandedSclerotialBlightTreatment}</td>
          <td>物候信息</td>
          <td>{data.phenology}</td>
        </tr>
      </table>
    </Box>
  )
}
