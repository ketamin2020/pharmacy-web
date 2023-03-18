import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isOpenAuthModalSelectror } from 'redux/ui/modals/modalSelectors'
import { toggleAuthModal } from 'redux/ui/modals/modalsActions'
import InputMask from 'react-input-mask'
import { TextField } from '@mui/material'
import { loginUser } from 'api/auth'
import styled from '@emotion/styled'
import Button from 'common/Button/Button'
import { login } from 'redux/auth/authActions'
import { TextFieldProps } from '@mui/material'
import notification from 'common/Notification/Notification'
import validator from 'validator'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  align-items: center;
`
const initError = { phone: '', email: '', password: '' }
const AuthModal = () => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(initError)
  const [loading, setLoading] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenAuthModalSelectror)
  const onClose = () => {
    dispatch(toggleAuthModal(false))
    setError(initError)
    setPhone(initError)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setError(initError)
    setPhone(value)
  }

  const onLoginUser = async () => {
    // eslint-disable-next-line no-useless-escape
    const reg = /[^\d\+]/g

    if (phone.replace(reg, '').length < 13) {
      return setError('Невірний номер телефону')
    }
    setLoading(true)

    try {
      const res = await loginUser({ phone: phone.replace(reg, '') })
      if (res?.admin) return setIsAdmin(true)
      if (res?.token) {
        dispatch(login(res?.token))
        notification('success', 'Успішно')
        onClose()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const onLoginAsAdmin = async () => {
    // eslint-disable-next-line no-useless-escape
    const reg = /[^\d\+]/g

    if (phone.replace(reg, '').length < 13) {
      return setError(prev => ({ ...prev, phone: 'Невірний номер телефону' }))
    }
    if (!validator.isEmail(email)) {
      return setError(prev => ({ ...prev, email: 'Невірний email' }))
    }
    if (!password) {
      return setError(prev => ({ ...prev, password: 'Введіть пароль' }))
    }
    setLoading(true)

    try {
      const res = await loginUser({ phone: phone.replace(reg, ''), email, password, admin: true })

      if (res?.token) {
        dispatch(login(res?.token))
        notification('success', 'Успішно')
        onClose()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Увійти</DialogTitle>
      <DialogContent>
        <DialogContentText>Для входу в систему, необхідно ввести Ваш номер телефону.</DialogContentText>
        <Wrapper>
          <InputMask mask={'+38(999)-99-99-999'} maskChar='X' value={phone} onChange={onChange}>
            {(inputProps: TextFieldProps) => (
              <TextField
                focused={isOpen}
                variant='outlined'
                style={{ width: '200px' }}
                label='Teлефон'
                {...inputProps}
                type='tel'
                error={!!error.phone}
                helperText={error.phone}
              />
            )}
          </InputMask>
        </Wrapper>
        {isAdmin && (
          <ControlsWrapper>
            <DialogContentText>Хочете увійти як адмін? </DialogContentText>
            <TextField
              onChange={e => setEmail(e.target.value)}
              focused={isOpen}
              variant='outlined'
              style={{ width: '250px' }}
              label='Email'
              type='tel'
              error={!!error.email}
              helperText={error.email}
            />

            <TextField
              onChange={e => setPassword(e.target.value)}
              focused={isOpen}
              variant='outlined'
              style={{ width: '250px' }}
              label='Password'
              type='password'
              error={!!error.password}
              helperText={error.password}
            />
          </ControlsWrapper>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={isAdmin ? onLoginAsAdmin : onLoginUser} color='green' shape='square'>
          <p>Увійти</p>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AuthModal
