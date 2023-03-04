import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Dashboard from './pages/Dashboard'
import Drugs from './pages/Drugs'
import Ordering from './pages/Ordering'
import Users from './pages/Users'
import Workers from './pages/Workers'
import Application from './pages/Application'
import Brands from './pages/Brands'
import Partners from './pages/Partners'
import Makers from './pages/Makers'
import Substance from './pages/Substance'
import Groups from './pages/Groups'
import Main from './pages/Main'
import Instruction from './pages/Instruction'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}
const Admin = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  enum EnumTabType {
    DRUGS = 0,
    ORDERING = 1,
    BRANDS = 2,
    PARTNERS = 3,
    USERS = 4,
    DASHBOARD = 5,
    WORKERS = 6,
    APPLICATION = 7,
    MAKERS = 8,
    SUBSTANCE = 9,
    GROUP = 10,
    MAIN = 11,
    INSTRUCTION = 12,
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label='Drugs' {...a11yProps(EnumTabType.DRUGS)} />
        <Tab label='Ordering' {...a11yProps(EnumTabType.ORDERING)} />
        <Tab label='Brands' {...a11yProps(EnumTabType.BRANDS)} />
        <Tab label='Partners' {...a11yProps(EnumTabType.PARTNERS)} />
        <Tab label='Users' {...a11yProps(EnumTabType.USERS)} />
        <Tab label='Dashboard' {...a11yProps(EnumTabType.DASHBOARD)} />
        <Tab label='Workers' {...a11yProps(EnumTabType.WORKERS)} />
        <Tab label='Application' {...a11yProps(EnumTabType.APPLICATION)} />
        <Tab label='Makers' {...a11yProps(EnumTabType.MAKERS)} />
        <Tab label='Active Substance' {...a11yProps(EnumTabType.SUBSTANCE)} />
        <Tab label='Group' {...a11yProps(EnumTabType.GROUP)} />
        <Tab label='Main' {...a11yProps(EnumTabType.MAIN)} />
        <Tab label='Instruction' {...a11yProps(EnumTabType.INSTRUCTION)} />
      </Tabs>

      <TabPanel value={value} index={EnumTabType.DRUGS}>
        <Drugs />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.ORDERING}>
        <Ordering />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.USERS}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.DASHBOARD}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.WORKERS}>
        <Workers />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.APPLICATION}>
        <Application />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.BRANDS}>
        <Brands />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.PARTNERS}>
        <Partners />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.MAKERS}>
        <Makers />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.SUBSTANCE}>
        <Substance />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.GROUP}>
        <Groups />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.MAIN}>
        <Main />
      </TabPanel>
      <TabPanel value={value} index={EnumTabType.INSTRUCTION}>
        <Instruction />
      </TabPanel>
    </Box>
  )
}

export default Admin
