import { styled } from '@mui/material/styles'
import { Dialog } from '@mui/material'

const MyDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent'
  }
})

export default MyDialog
8