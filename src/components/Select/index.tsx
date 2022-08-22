import React from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const Input = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    fontSize: '16px',
    fontWeight: 300,
    color: '#fbfbfb',
    width: '100%',
    height: '35px',
    '& .MuiSelect-icon': {
      fontSize: '0.3rem'
    },
    '& fieldset': {
      border: 'none',
      background: 'rgba(140, 147, 164, 1)',
      borderRadius: '2px',
      opacity: '0.6'
    }
  },

  '& .MuiPopover-root': {
    '& .MuiPaper-root': {
      '& .MuiMenu-list': {
        height: '200px !important'
      }
    }
  }
})

export default Input
