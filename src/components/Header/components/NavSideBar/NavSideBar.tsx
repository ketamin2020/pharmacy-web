import { Avatar, Box, Divider, List, makeStyles, Drawer, Typography } from '@material-ui/core'
import {
  DrugsIcon,
  AntibioticsIcon,
  MedicalGoodsIcon,
  MotherAndChildIcon,
  CosmeticsIcon,
  DeliverySmallIcon,
} from 'common/CommonIcons/CommonIcons'
import Button from '@mui/material/Button'
import { Logo } from 'common/CommonIcons/CommonIcons'
import { Dropdown } from 'common/Dropdown/Dropdown'
import SocialList from 'common/SocialList/SocialList'
import { ItemsMenuFirstNested } from '../utils/types'
import { antibiotics } from '../utils/antibiotics'
import { medicines } from '../utils/medicines'
import { medicalGoods } from '../utils/medial_goods'
import { motherAndChildrens } from '../utils/motherAndChildrens'
import { gigiena } from '../utils/gigiena'
import './NavBarSideBar.scss'
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 300,
    background: 'white',
    height: '100%',
    padding: '1rem',
  },
  avatar: {
    margin: '0.5rem auto',
    padding: '1rem',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
  linksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
}))

interface IProps {
  open: boolean
  toggleSlider: () => void
}
const navbarItems = [
  {
    id: 0,
    title: 'Про нас',
  },
  {
    id: 2,
    title: 'Гарантії',
  },
  {
    id: 3,
    title: 'Доставка та оплата',
  },
  {
    id: 4,
    title: 'Повернення',
  },
  {
    id: 5,
    title: 'Контакти',
  },
]

const NavSideBar = ({ open, toggleSlider }: IProps) => {
  const classes = useStyles()

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      <div className='sidebar__logo'>
        <Logo />
      </div>

      <Divider />
      <Typography sx={{ mt: 0.5 }} color='text.secondary' display='block' variant='caption'>
        Навігація
      </Typography>
      <List>
        <Dropdown icon={<DrugsIcon />} title={ItemsMenuFirstNested.MEDICINES} onChange={() => null} list={medicines} />
        <Dropdown
          icon={<AntibioticsIcon />}
          title={ItemsMenuFirstNested.ANTIBIOTICS}
          onChange={() => null}
          list={antibiotics}
        />
        <Dropdown
          icon={<MedicalGoodsIcon />}
          title={ItemsMenuFirstNested.MEDICAL_GOODS}
          onChange={() => null}
          list={medicalGoods}
        />
        <Dropdown
          icon={<MotherAndChildIcon />}
          title={ItemsMenuFirstNested.GOODS_FOR_MOTHERS_AND_CHILDREN}
          onChange={() => null}
          list={motherAndChildrens}
        />
        <Dropdown
          icon={<CosmeticsIcon />}
          title={ItemsMenuFirstNested.COSMETICS_AND_HYGIENE}
          onChange={() => null}
          list={gigiena}
        />
        <Button
          id='basic-button'
          style={{ display: 'flex', alignItems: 'flex-start' }}
          aria-controls={'basic-menu'}
          aria-haspopup='true'
          onClick={() => null}
        >
          <span>
            <DeliverySmallIcon />
          </span>{' '}
          <span style={{ color: 'red' }}>Акції</span>
        </Button>
      </List>
      <Divider />
      <Typography sx={{ mt: 0.5 }} color='text.secondary' display='block' variant='caption'>
        Інформація про компанію
      </Typography>
      <List className={classes.linksWrapper}>
        {navbarItems.map(item => (
          <span className='header__side-menu_item' key={item.id}>
            {item.title}
          </span>
        ))}
      </List>
      <Divider />
      <Typography sx={{ mt: 0.5 }} color='text.secondary' display='block' variant='caption'>
        Ми в соціальних мережах
      </Typography>
      <SocialList />
      <Divider />
      <List>
        <Avatar className={classes.avatar} src='https://i.ibb.co/rx5DFbs/avatar.png' alt='Juaneme8' />
        <Button
          id='basic-button'
          style={{ justifyContent: 'center', width: '100%' }}
          aria-controls={'basic-menu'}
          aria-haspopup='true'
          onClick={() => null}
        >
          Вхід
        </Button>
      </List>
    </Box>
  )

  return (
    <>
      <Box component='nav'>
        <Drawer open={open} anchor='left' onClose={toggleSlider}>
          {sideList()}
        </Drawer>
      </Box>
    </>
  )
}

export default NavSideBar
