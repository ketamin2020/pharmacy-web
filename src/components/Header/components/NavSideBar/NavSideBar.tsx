import { Avatar, Box, Divider, List, makeStyles, Drawer } from '@material-ui/core'
import {
  DrugsIcon,
  AntibioticsIcon,
  MedicalGoodsIcon,
  MotherAndChildIcon,
  CosmeticsIcon,
  DeliverySmallIcon,
} from 'images/icons/icons'

import { Logo } from 'images/icons/icons'
import { Dropdown } from 'common/Dropdown/Dropdown'
import SocialList from 'common/SocialList/SocialList'
import { useDispatch } from 'react-redux'
import { menuItemsSelector } from 'redux/groups/groupsSelectors'
import { userSelector } from 'redux/user/userSelectors'
import { useSelector } from 'react-redux'
import { logout } from 'redux/auth/authActions'
import Button from 'common/Button/Button'
import { RoutePath } from 'routes/types'
import { useNavigate } from 'react-router-dom'
import './NavBarSideBar.scss'

const icons = {
  0: <DrugsIcon />,
  1: <DrugsIcon />,
  2: <DrugsIcon />,
  3: <DrugsIcon />,
  4: <DrugsIcon />,
  5: <DrugsIcon />,
  6: <DrugsIcon />,
  7: <DrugsIcon />,
  8: <DrugsIcon />,
  9: <DrugsIcon />,
  10: <DrugsIcon />,
}

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 350,
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
    path: RoutePath.ABOUT_PAGE,
  },
  {
    id: 2,
    title: 'Гарантії',
    path: RoutePath.WARRANTY,
  },
  {
    id: 3,
    title: 'Доставка та оплата',
    path: RoutePath.DELIVERY,
  },
  {
    id: 4,
    title: 'Повернення',
    path: RoutePath.ORDER_RETURN,
  },
  {
    id: 5,
    title: 'Контакти',
    path: RoutePath.CONTACTS,
  },
]

const NavSideBar = ({ open, toggleSlider }: IProps) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const items = useSelector(menuItemsSelector)
  const user = useSelector(userSelector)

  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('persist:auth')
    dispatch(logout())
  }

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      <div
        onClick={() => {
          navigate(RoutePath.HOME_PAGE)
          toggleSlider()
        }}
        className='sidebar__logo'
      >
        <Logo />
      </div>

      <Divider />

      <List>
        {items?.map((item, i) => (
          <Dropdown
            key={i}
            callback={toggleSlider}
            icon={icons[i]}
            title={item.group_name}
            item={item}
            list={item.children}
          />
        ))}
      </List>
      <Divider />

      <List className={classes.linksWrapper}>
        {navbarItems.map(item => (
          <span
            onClick={() => {
              navigate(item.path)
              toggleSlider()
            }}
            className='header__side-menu_item'
            key={item.id}
          >
            {item.title}
          </span>
        ))}
      </List>
      <Divider />

      <SocialList />
      <Divider />
      <List style={{ display: 'flex', justifyContent: 'center' }}>
        <Button color='green' shape='square' onClick={!!user?.id ? handleLogout : () => null}>
          {!!user?.id ? <span>Вихід</span> : <span>Вхід</span>}
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
