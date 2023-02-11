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
        <Tab label='Drugs' {...a11yProps(0)} />
        <Tab label='Ordering' {...a11yProps(1)} />
        <Tab label='Users' {...a11yProps(2)} />
        <Tab label='Dashboard' {...a11yProps(3)} />
        <Tab label='Workers' {...a11yProps(4)} />
        <Tab label='Application' {...a11yProps(5)} />
        {/* <Tab label='Item Seven' {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Drugs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Ordering />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Workers />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Application />
      </TabPanel>
      {/* <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
  )
}

export default Admin
