import React, { FC, ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import styled from '@emotion/styled'
import { MenuItemData } from 'components/Header/components/utils/types'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const TitleWrapper = styled.div`
  display: flex;
  gap: 4px;
  & span {
    white-space: nowrap;
    &:hover {
      color: var(--greenColor);
    }
  }
`

interface IProps {
  onChange: (value: number, name: string, event: ChangeEvent<HTMLInputElement>) => void
  list: MenuItemData[]
  title: string
  icon: JSX.Element
}

export const Dropdown: FC<IProps> = ({ onChange, list = [], title = '', icon }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Wrapper>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <TitleWrapper>
          {icon} <span>{title}</span> {open ? <ArrowDropUp /> : <ArrowDropDown />}
        </TitleWrapper>
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {list.map(({ label, url }, i) => (
          <MenuItem key={i} onClick={handleClose}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  )
}
