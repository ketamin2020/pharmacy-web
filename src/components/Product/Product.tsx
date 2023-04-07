import React from 'react'
import { useParams } from 'react-router-dom'
import { getDrugById } from 'api/drugs'
import { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Heading } from './components/Heading/Heading'
import PropertyBlock from './components/Property/PropertyBlock'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

enum EnumTabType {
  PROPERTY = 0,
  REVIEWS = 1,
  ANALOGS = 2,
}

export const Product = () => {
  const [product, setProduct] = useState({})
  const [value, setValue] = useState(0)
  const { id } = useParams()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  useEffect(() => {
    const fetchPridyctById = async () => {
      try {
        const res = await getDrugById({ id })
        setProduct(res)
      } catch (error) {
        console.log(error)
      }
    }
    if (id) fetchPridyctById()
  }, [id])

  return (
    <Box className='container' sx={{ bgcolor: 'background.paper' }}>
      <Heading code={product?.price?.code} name={product?.property?.name}>
        <Tabs
          orientation='horizontal'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider', color: '#00a990' }}
        >
          <Tab label='Все про товар' {...a11yProps(EnumTabType.PROPERTY)} />
          <Tab label='Відгуки' {...a11yProps(EnumTabType.REVIEWS)} />
          <Tab label='Аналоги і замінники' {...a11yProps(EnumTabType.ANALOGS)} />
        </Tabs>

        <TabPanel value={value} index={EnumTabType.PROPERTY}>
          <PropertyBlock product={product} />
        </TabPanel>
        <TabPanel value={value} index={EnumTabType.REVIEWS}></TabPanel>
        <TabPanel value={value} index={EnumTabType.ANALOGS}></TabPanel>
      </Heading>
    </Box>
  )
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
