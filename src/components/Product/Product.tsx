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
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import { Reviews } from './components/Reviews/Reviews'
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
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(0)
  const { id } = useParams()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  useEffect(() => {
    const fetchPridyctById = async () => {
      setLoading(true)
      try {
        const res = await getDrugById({ id })
        setProduct(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchPridyctById()
  }, [id])

  return (
    <Box className='container' sx={{ bgcolor: 'background.paper' }}>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <Heading reviews={product?.reviews} code={product?.price?.code} name={product?.name}>
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
          <TabPanel value={value} index={EnumTabType.REVIEWS}>
            <Reviews product={product} />
          </TabPanel>
          <TabPanel value={value} index={EnumTabType.ANALOGS}></TabPanel>
        </Heading>
      )}
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
