import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { Box } from '@mui/material'
import router from './router'
import './App.scss'

function App() {
  return <Box className="app">{useRoutes(router)}</Box>
}

export default App
