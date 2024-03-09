import React, { ChangeEvent, FC, useState, useEffect, useRef } from 'react'
import { TextField } from '@mui/material'
import { InputAdornment, IconButton, makeStyles, createStyles } from '@material-ui/core'
import { Search } from '@mui/icons-material'
import { getDrugBySearch } from 'api/drugs'
import useDebounce from 'hooks/useDebounce'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { RoutePath } from 'routes/types'
import useOnClickOutside from 'hooks/useOnClickOutside'

const SearchItem = ({ item, onOpenItem }) => {
  return (
    <Item onClick={() => onOpenItem(item.id)}>
      <ItemImage>
        <img src={item.image.url} alt='image' />
      </ItemImage>
      <ItemContent>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </ItemContent>
    </Item>
  )
}

const useStylesInput = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '400px',
      outline: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      background: 'white',
    },
  }),
)
const useStylesIconButton = makeStyles(() =>
  createStyles({
    root: {
      color: 'grey !important',
    },
  }),
)

interface IProps {
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const SearhInput: FC<IProps> = ({ placeholder = 'Пошук' }): JSX.Element => {
  const ref = useRef()
  const styleInput = useStylesInput()
  const styleIconButton = useStylesIconButton()
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)

  const [data, setData] = useState([])

  const debouncedValue = useDebounce(search, 500)

  const navigate = useNavigate()

  useOnClickOutside(ref, () => {
    setOpen(false)
  })

  const onOpenItem = id => {
    return navigate(`${RoutePath.PRODUCT}/${id}`)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    if (!value) setOpen(false)
  }

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const data = await getDrugBySearch({ search: debouncedValue })
        setData(data)
        setOpen(true)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    if (debouncedValue) fetch()
  }, [debouncedValue])

  return (
    <Container ref={ref}>
      {' '}
      <TextField
        onChange={onChange}
        value={search}
        placeholder={placeholder}
        size='small'
        variant='outlined'
        onFocus={() => {
          if (!!data?.length && search) setOpen(true)
        }}
        classes={{
          root: styleInput.root,
        }}
        InputProps={{
          autoComplete: 'on',
          type: 'search',
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton edge='start'>
                <Search
                  classes={{
                    root: styleIconButton.root,
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Wrapper open={open}>
        {data.map((item, idx) => (
          <SearchItem key={idx} item={item} onOpenItem={onOpenItem} />
        ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Wrapper = styled.div<{ open: boolean }>`
  background-color: white;
  min-height: 0;
  max-height: ${({ open }) => (open ? '300px' : '0')};
  overflow: auto;
  position: absolute;
  border-radius: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: max-height 0.3s ease;
`

const Item = styled.article`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`

const ItemImage = styled.div`
  flex: 0 0 55px;
  & img {
    display: block;
    width: 100%;
    max-width: 50px;
    height: auto;
  }
`

const ItemContent = styled.div`
  flex: 1;
  font-size: 12px;
`
