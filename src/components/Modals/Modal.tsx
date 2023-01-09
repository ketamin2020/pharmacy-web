import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { SxProps } from '@mui/material'
import { Theme } from '@mui/material'
import { Close } from '@mui/icons-material'
const dufaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70vh',
  padding: '0 10px 10px 10px',
  borderRadius: '10px',
  backgroundColor: 'white',
  overflow: 'scroll',
}
const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
interface IProps {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
  styles?: SxProps<Theme>
  title: string
}

const CustomModal: React.FC<IProps> = ({ open, handleClose, children, styles, title }) => {
  return (
    <Modal
      open={open}
      disableAutoFocus={true}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={{ ...dufaultStyle, ...styles }}>
        <div style={titleStyle}>
          <p>
            <strong>{title}</strong>
          </p>
          <p onClick={handleClose}>
            <Close />
          </p>
        </div>
        {children}
      </Box>
    </Modal>
  )
}

export default CustomModal
