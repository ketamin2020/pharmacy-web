import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isOpenAuthModalSelectror } from 'redux/ui/modals/modalSelectors'
import { toggleAuthModal } from 'redux/ui/modals/modalsActions'
import Modal from '../Modal'
import InputMask from 'react-input-mask'
import { TextField } from '@mui/material'
import { loginUser } from 'api/auth'
import styled from '@emotion/styled'
import Button from 'common/Button/Button'
import { login } from 'redux/auth/authActions'
import { TextFieldProps } from '@mui/material'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
`
const AuthModal = () => {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenAuthModalSelectror)
  const onClose = () => {
    dispatch(toggleAuthModal(false))
    setError('')
    setPhone('')
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setError('')
    setPhone(value)
  }

  const onLoginUser = async () => {
    const reg = /[^\d\+]/g
    if (phone.replace(reg, '').length < 13) {
      return setError('Невірний номер телефону')
    }
    setLoading(true)
    try {
      const res = await loginUser({ phone: phone.replace(reg, '') })
      if (res?.token) {
        dispatch(login(res?.token))

        onClose()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Modal styles={{ maxWidth: '400px' }} title='Увійдіть в приватний кабінет' handleClose={onClose} open={isOpen}>
      <Wrapper>
        <InputMask mask={'+38(999)-99-99-999'} maskChar='X' value={phone} onChange={onChange}>
          {(inputProps: TextFieldProps) => (
            <TextField
              focused={isOpen}
              variant='outlined'
              style={{ maxWidth: '200px' }}
              label='Teлефон'
              {...inputProps}
              type='tel'
            />
          )}
        </InputMask>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Wrapper>
      <ControlsWrapper>
        <Button onClick={onLoginUser} color='green' shape='square'>
          <p>Увійти</p>
        </Button>
      </ControlsWrapper>
    </Modal>
  )
}

export default AuthModal
