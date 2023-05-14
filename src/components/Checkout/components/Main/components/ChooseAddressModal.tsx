import { useState } from 'react'
import Button from 'common/Button/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'
import { Map } from './Map/Map'
import { NewPostIcon } from 'images/icons/icons'
import { Phone } from '@material-ui/icons'
import { LatLngTuple } from 'leaflet'

export interface DialogTitleProps {
  children?: React.ReactNode
  onClose: () => void
}
export interface Pharmacy {
  id: string
  latitude: number
  longitude: number
  loyalty: boolean
  maxDeclaredCost: number
  name: string
  number: number
  phone: string
  selfService: boolean
  workTime: string
  workTimeArray: string[]
}

interface IProps {
  handleClose: () => void
  handleSave: () => void
  open: boolean
  title: string
  items: Pharmacy[]
}

const position: LatLngTuple = [50.41365970726126, 30.543992123578576]

export const ChooseAddressModal = ({ handleClose, handleSave, open, title, items }: IProps) => {
  const [center, setCenter] = useState(position)
  const [activeItem, setActiveItem] = useState<Pharmacy>({})

  const onClick = (item: Pharmacy) => {
    setCenter([item.latitude, item.longitude])
    setActiveItem(item)
  }

  return (
    <div>
      <Dialog fullWidth maxWidth='xl' closeAfterTransition open={open} onClose={handleClose}>
        <BootstrapDialogTitle onClose={handleClose}>{title}</BootstrapDialogTitle>
        <Heading>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            placeholder='Введіть адресу'
            label='Адреса'
            type='email'
            size='small'
            variant='outlined'
            style={{ width: '300px' }}
          />
        </Heading>
        <DialogContent>
          <Wrapper>
            <SidebarItems>
              {items.map(item => (
                <Item key={item.id} onClick={onClick} {...item} />
              ))}
            </SidebarItems>
            <Map activeItem={activeItem} center={center} items={items} style={{ width: '1000px', height: '550px' }} />
          </Wrapper>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

function Item({ onClick, name, phone, latitude, longitude, id }: Pharmacy) {
  return (
    <ItemWrapper onClick={() => onClick({ latitude, longitude, id })}>
      <ItemRow>
        <span>
          <NewPostIcon width={20} />
        </span>
        <span>{name}</span>
      </ItemRow>
      <ItemRow>
        <span>
          <Phone />
        </span>
        <span>{phone}</span>
      </ItemRow>
      <Button color='green' shape='square'>
        <span>Вибрати</span>
      </Button>
    </ItemWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
`

const Heading = styled.div`
  padding: 0 20px;
`

const SidebarItems = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const ItemWrapper = styled.div`
  width: 100%;
  border: 1px solid var(--greenColor);
  border-radius: 12px;
  cursor: pointer;
  padding: 10px;
`
const ItemRow = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`
