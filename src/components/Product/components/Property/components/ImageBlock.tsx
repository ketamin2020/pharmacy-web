import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import styled from '@emotion/styled'

export const ImageBlock = ({ images }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Wrapper>
      <WrapperInner>
        <Tabs
          TabIndicatorProps={{
            style: { display: 'none' },
          }}
          orientation='vertical'
          value={value}
          onChange={handleChange}
          aria-label='icon label tabs example'
        >
          {images?.map((item, i) => (
            <Tab key={i} {...a11yProps(i)} icon={<IconImg active={value === i} src={item?.url} />} />
          ))}
        </Tabs>

        {images?.map((item, i) => (
          <TabPanel key={i} value={value} index={i}>
            <Image src={item?.url} />
            <Warning />
          </TabPanel>
        ))}
      </WrapperInner>

      {/* <MainProperties product={product} /> */}
    </Wrapper>
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

function IconImg({ src, active }) {
  return (
    <IconImageWrapper active={active}>
      <img alt='' src={src} />
    </IconImageWrapper>
  )
}
function Image({ src }) {
  return (
    <ImageWrapper>
      <img alt='' src={src} />
    </ImageWrapper>
  )
}

function Warning() {
  return (
    <ActualWrapper>
      <p>Зовнішній вигляд товару може відрізнятися від зображеного</p>
    </ActualWrapper>
  )
}

interface IconImageWrapperProps {
  active?: boolean
}

const IconImageWrapper = styled.div<IconImageWrapperProps>`
  width: 50px;
  height: 50px;
  padding: 10px;
  border: ${props => (props.active ? '1px solid #00a990' : 'none')};
  border-radius: ${props => (props.active ? '4px' : '0')};
  & img {
    display: block;
    width: 100%;
    height: auto;
  }
`
const ActualWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid rgba(112, 176, 247, 0.121569);
  color: #212121;
  background-color: rgba(141, 192, 249, 0.121569);
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 12px;
`
const ImageWrapper = styled.div`
  width: 450px;
  height: 450px;
  & img {
    display: block;
    width: 100%;
    max-width: 200px;
    height: auto;
    margin: 0 auto;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const WrapperInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 500px;
`
