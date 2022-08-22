import React from 'react'
import { Box } from '@mui/material'
import './style.scss'

export default function index({ icon, title, content }) {
  return (
    <Box className="DetailsItem">
      <Box className="title-bar">
        <img src={icon} className="icon" />
        <span className="title">{title}</span>
      </Box>
      <ul className="details-list">
        {content &&
          content.map(item => {
            return <li>{item}</li>
          })}
      </ul>
    </Box>
  )
}
