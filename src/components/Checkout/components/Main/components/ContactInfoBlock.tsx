import React from 'react'
import styled from '@emotion/styled'
import { TextField, Checkbox, FormControlLabel } from '@mui/material'
import ReactInputMask from 'react-input-mask'
import { IPayment } from '../../types'
interface IProps {
  state: IPayment
  onChange: () => void
}

export const ContactInfoBlock = ({ onChange, state }: IProps) => {
  return (
    <Wrapper>
      <Controls>
        <InputRow>
          <FormControlLabel control={<Checkbox />} label='Отримувач інша людина' />
        </InputRow>

        <InputRow>
          <TextField
            value={state?.delivery?.recipient?.first_name}
            defaultValue={state?.delivery?.recipient?.first_name}
            onChange={onChange}
            name='first_name'
            size='small'
            fullWidth
            label='Фамилія'
            autoFocus={true}
          />
        </InputRow>

        <InputRow>
          <TextField
            value={state?.delivery?.recipient?.last_name}
            defaultValue={state?.delivery?.recipient?.last_name}
            onChange={onChange}
            name='last_name'
            size='small'
            fullWidth
            label={`Ім'я`}
            autoFocus={true}
          />
        </InputRow>

        <InputRow>
          <TextField
            value={state?.delivery?.recipient?.middle_name}
            defaultValue={state?.delivery?.recipient?.middle_name}
            onChange={onChange}
            name='middle_name'
            size='small'
            fullWidth
            label={`По батькові`}
            autoFocus={true}
          />
        </InputRow>
        <InputRow>
          <ReactInputMask
            name='phone'
            mask={'+38(999)-99-99-999'}
            maskChar='X'
            value={state?.delivery?.recipient?.phone}
            defaultValue={state?.delivery?.recipient?.phone}
            onChange={onChange}
          >
            {inputProps => (
              <TextField size='small' variant='outlined' fullWidth label='Телефон' {...inputProps} type='tel' />
            )}
          </ReactInputMask>
        </InputRow>
      </Controls>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Controls = styled.div``
const InputRow = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`
