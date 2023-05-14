import Button from 'common/Button/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'

export interface DialogTitleProps {
  children?: React.ReactNode
  onClose: () => void
}

interface IProps {
  handleClose: () => void
  handleSave: () => void
  open: boolean
}

const items = [
  { name: 'Київ', value: 'Київ' },
  { name: 'Дніпро', value: 'Дніпро' },
  { name: 'Харьків', value: 'Харьків' },
  { name: 'Львів', value: 'Львів' },
  { name: 'Запоріжжя', value: 'Запоріжжя' },
  { name: 'Полтава', value: 'Полтава' },
  { name: 'Херсон', value: 'Херсон' },
  { name: 'Черкаси', value: 'Черкаси' },
  { name: 'Тернопіль', value: 'Тернопіль' },
  { name: 'Рівне', value: 'Рівне' },
  { name: 'Житомир', value: 'Житомир' },
]

export const ChangeAddressModal = ({ handleClose, handleSave, open }: IProps) => {
  return (
    <div>
      <Dialog closeAfterTransition open={open} onClose={handleClose}>
        <BootstrapDialogTitle onClose={handleClose}>Виберіть своє місто</BootstrapDialogTitle>
        <DialogContent>
          <LinksWrapper>
            {items.map(item => (
              <LinksItem key={item.name}>{item.name}</LinksItem>
            ))}
          </LinksWrapper>

          <TextField
            autoFocus
            margin='dense'
            id='name'
            placeholder='Введіть найменування населеного пункту'
            label='Адреса'
            type='email'
            fullWidth
            size='small'
            variant='outlined'
          />
        </DialogContent>
        <DialogContentText style={{ fontSize: '14px', padding: '20px' }}>
          Ми доставляємо замовлення до всіх населених пунктів України. Вкажіть місто або селище, що цікавить Вас, щоб
          побачити доступні способи доставки
        </DialogContentText>
        <DialogActions>
          <Button color='green' shape='square' onClick={handleSave}>
            <span>Вибрати</span>
          </Button>
        </DialogActions>
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

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
`

const LinksItem = styled.div`
  color: var(--greenColor);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transition: all 0.2s;
    color: red;
  }
`
