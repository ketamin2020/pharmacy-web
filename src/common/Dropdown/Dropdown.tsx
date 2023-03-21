import React, { FC, ChangeEvent, useState, useRef } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import styled from '@emotion/styled'
import { MenuItemData } from 'components/Header/components/utils/types'
import NestedMenuItem from 'material-ui-nested-menu-item'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles(() => ({
  list: {
    padding: '10px !important',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
}))
interface IProps {
  onChange: (value: number, name: string, event: ChangeEvent<HTMLInputElement>) => void
  list: MenuItemData[]
  title: string
  icon: JSX.Element
}

export const Dropdown: FC<IProps> = ({ onChange, list = [], title = '', icon }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const classes = useStyles()
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [menuPosition, setMenuPosition] = useState<any>({ top: 10, left: 10 })
  const menuItemRef = useRef<any>(null)

  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null)
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
          {icon} <span>{title}</span> {!!list?.length ? open ? <ArrowDropUp /> : <ArrowDropDown /> : null}
        </TitleWrapper>
      </Button>

      {!!list?.length && (
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose} classes={{ list: classes.list }}>
          {list?.map(({ group_name, children }, i) =>
            children?.length ? (
              <NestedMenuItem
                ref={menuItemRef}
                label={group_name}
                parentMenuOpen={!!menuPosition}
                onClick={handleItemClick}
              >
                <ListRow>
                  {children.map(({ group_name }, i) => (
                    <MenuItem divider key={i} onClick={handleClose}>
                      {group_name}
                    </MenuItem>
                  ))}
                </ListRow>
              </NestedMenuItem>
            ) : (
              <MenuItem divider key={i} onClick={handleClose}>
                {group_name}
              </MenuItem>
            ),
          )}
        </Menu>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  & .MuiList-root {
    display: flex;
    flex-direction: column;
  }
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

const ListRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`
