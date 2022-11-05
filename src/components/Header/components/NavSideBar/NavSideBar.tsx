import { Avatar, Box, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, Drawer } from '@material-ui/core'
import { Apps, ContactMail, AssignmentInd, Home } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 300,
    background: 'white',
    height: '100%',
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
}))

const listItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
  },
]

interface IProps {
  open: boolean
  toggleSlider: () => void
}

const NavSideBar = ({ open, toggleSlider }: IProps) => {
  const classes = useStyles()

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component='div'>
      {/* <Avatar className={classes.avatar} src='https://i.ibb.co/rx5DFbs/avatar.png' alt='Juaneme8' />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>{listItem.listIcon}</ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List> */}
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
