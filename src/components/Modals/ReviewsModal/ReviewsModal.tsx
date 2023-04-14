import React from 'react'
import Button from 'common/Button/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import styled from '@emotion/styled'

export const ReviewsModal = ({ handleClose, state, open, onChange, handleCreate, error }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Написати відгук</DialogTitle>
      <Wrapper>
        <DialogContent>
          <DialogContentText>
            <RateBlock>
              <p>Оцінка</p>
              <Stack spacing={1}>
                <Rating value={state.rate} onChange={onChange} name='rate' defaultValue={5} size='large' />
              </Stack>
            </RateBlock>
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Ваш коментар'
            type='text'
            name='text'
            fullWidth
            multiline
            minRows={5}
            variant='outlined'
            onChange={onChange}
            value={state.text}
            error={error?.text}
            helperText={error?.text}
          />

          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email'
            type='email'
            fullWidth
            multiline
            size='small'
            variant='outlined'
            name='email'
            onChange={onChange}
            value={state.email}
            error={error?.email}
            helperText={error?.email}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='green' shape='square'>
            <p>Відміна</p>
          </Button>
          <Button onClick={handleCreate} color='green' shape='square'>
            <p>Залишити відгук</p>
          </Button>
        </DialogActions>
        <HalperText>
          Щоб ваш відгук чи коментар пройшли модерацію та були опубліковані, ознайомтеся, будь ласка, з нашими
          правилами.
        </HalperText>
      </Wrapper>
    </Dialog>
  )
}
const Wrapper = styled.div`
  padding: 20px;
`
const HalperText = styled.p`
  font-size: 12px;
`

const RateBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
