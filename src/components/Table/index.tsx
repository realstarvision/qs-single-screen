import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import './style.scss'
import quit from '@/assets/image/png/quit.png'
import { FarmlandAreaProblemList } from '@/api'

interface List {
  map(
    arg0: (data: any) => JSX.Element
  ): import('react-i18next').ReactI18NextChild | Iterable<import('react-i18next').ReactI18NextChild>
  areaName: string
  dtoList: Array<{
    abarbeitungProblem: number
    abarbeitungRate: string
    accomplishProblem: number
    nonProblem: number
    normalProblem: number
    problemType: number
    proofProblem: number
    suspectedProblem: number
    verifyProblem: number
  }>
}

export default function index({ onQuit }) {
  const [listData, setListData] = useState<List | null>(null)

  // 关闭事件
  const handleQuit = () => {
    onQuit()
  }

  // 初始化数据
  useEffect(() => {
    FarmlandAreaProblemList().then((data: any) => {
      setListData(data)
    })
  }, [])
  return (
    <Box className="table-box">
      <Box className="table-box-bar">
        <img src={quit} onClick={handleQuit} />
      </Box>
      <Box className="container">
        <table width="100%" cellPadding={5} border={1} align="center" className="table">
          <tr className="tr">
            <th colSpan={2}>问题来源</th>
            <th>疑似问题（个）</th>
            <th>需现场核实（个）</th>
            <th>已现场举证（个）</th>
            <th>已完成认定（个）</th>
            <th>认定正常（个）</th>
            <th>认定"两非"（个）</th>
            <th>完成整改（个）</th>
            <th>整改率（%）</th>
          </tr>
          {listData &&
            listData.map(data => {
              return <Street data={data}></Street>
            })}
        </table>
      </Box>
    </Box>
  )
}

function Street({ data }) {
  return (
    <>
      {data.dtoList.map((item, index) => {
        return (
          <tr className="tr">
            {index === 0 && (
              <td
                rowSpan={data.dtoList.length}
                style={{
                  verticalAlign: 'middle'
                }}
              >
                {data.areaName}
              </td>
            )}
            <td>{item.problemType === 1 ? '铁塔视频' : '田长视频'}</td>
            <td>{item.suspectedProblem}</td>
            <td>{item.verifyProblem}</td>
            <td>{item.proofProblem}</td>
            <td>{item.accomplishProblem}</td>
            <td>{item.normalProblem}</td>
            <td>{item.nonProblem}</td>
            <td>{item.abarbeitungProblem}</td>
            <td>{item.abarbeitungRate}</td>
          </tr>
        )
      })}
    </>
  )
}
