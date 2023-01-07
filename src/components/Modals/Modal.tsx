import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { SxProps } from '@mui/material'
import { Theme } from '@mui/material'
const dufaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70vh',
  p: 4,
  borderRadius: '10px',
  backgroundColor: 'white',
}
interface IProps {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
  styles: SxProps<Theme>
}

const CustomModal: React.FC<IProps> = ({ open, handleClose, children, styles }) => {
  return (
    <div>
      <Modal
        open={open}
        disableAutoFocus={true}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...dufaultStyle, ...styles }}>{children}</Box>
      </Modal>
    </div>
  )
}

export default CustomModal
