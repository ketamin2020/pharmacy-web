import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import Button from 'common/Button/Button'
import { Edit, Person } from '@material-ui/icons'
import { getUser, updateUser } from 'api/users'
const initState = {
  first_name: '',
  last_name: '',
  middle_name: '',
  about: '',
}
export const PersonalInfo = () => {
  const [edit, setEdit] = useState(false)
  const [state, setState] = useState(initState)
  const onChange = e => {
    const { name, value } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }

  const updateUserHandle = async () => {
    try {
      const res = await updateUser(state)
      setState(res)
      setEdit(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser()

        setState(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])

  return (
    <Wrapper>
      <h2>Персональна інформація</h2>
      <HedingWrapper>
        <div>
          <Person />
          Персональна інформація
        </div>
        <div className='edit_button' onClick={() => setEdit(true)}>
          <Edit /> Редагувати
        </div>
      </HedingWrapper>
      {edit ? (
        <>
          <ControlsWrapper>
            <TextField
              value={state.first_name}
              onChange={onChange}
              name='first_name'
              size='small'
              fullWidth
              label='Фамилія'
              autoFocus={true}
            />
            <TextField
              value={state.last_name}
              onChange={onChange}
              name='last_name'
              size='small'
              fullWidth
              label={`Ім'я`}
              autoFocus={true}
            />
            <TextField
              value={state.middle_name}
              onChange={onChange}
              name='middle_name'
              size='small'
              fullWidth
              label={`По батькові`}
              autoFocus={true}
            />
          </ControlsWrapper>
          <TextField
            autoFocus={true}
            value={state.about}
            onChange={onChange}
            name='about'
            multiline
            fullWidth
            label={`Про себе`}
          />
          <ButtonsRow>
            <Button onClick={updateUserHandle} shape='square' color='green'>
              <span>Збeрегти</span>
            </Button>
            <Button shape='square' color='green' onClick={() => setEdit(false)}>
              <span>Відміна</span>
            </Button>
          </ButtonsRow>
        </>
      ) : (
        <>
          <ControlsWrapper>
            <Row>
              <span className='title'>Фамилія</span>
              <span className='value'>{state.first_name}</span>
            </Row>
            <Row>
              <span className='title'>{`Ім'я`}</span>
              <span className='value'>{state.last_name}</span>
            </Row>
            <Row>
              <span className='title'>{`По батькові`}</span>
              <span className='value'>{state.middle_name}</span>
            </Row>
          </ControlsWrapper>
          <Row>
            <span className='title'>Про себе</span>
            <span className='value'>{state.about}</span>
          </Row>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ControlsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`
const HedingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  & div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  & .edit_button {
    cursor: pointer;
    color: var(--blueColor);
  }
`
const ButtonsRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & .title {
    color: grey;
    font-size: 10px;
  }
  & .value {
    color: black;
    font-size: 14px;
  }
`
