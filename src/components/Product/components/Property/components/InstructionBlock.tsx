import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
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

export const InstructionBlock = ({ product }) => {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef(null)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    const element = ref.current.children[newValue]
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const section = product?.instruction?.section

  return (
    <Wrapper>
      <WrapperInner style={{ padding: '20px' }}>
        <Tabs
          style={{ color: '#00a990' }}
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label={section?.composition?.title} {...a11yProps(0)} />
          <Tab label={section?.medicinal_form?.title} {...a11yProps(1)} />
          <Tab label={section?.medicinal_group?.title} {...a11yProps(2)} />
          <Tab label={section?.pharmacodynamics?.title} {...a11yProps(3)} />
          <Tab label={section?.pharmacokinetics?.title} {...a11yProps(4)} />
          <Tab label={section?.indications_for_use?.title} {...a11yProps(5)} />
          <Tab label={section?.contraindication?.title} {...a11yProps(6)} />
          <Tab label={section?.interaction_with_other?.title} {...a11yProps(7)} />
          <Tab label={section?.features_of_application?.title} {...a11yProps(8)} />
          <Tab label={section?.ability_to_influence?.title} {...a11yProps(9)} />
          <Tab label={section?.use_during_pregnancy?.title} {...a11yProps(10)} />
          <Tab label={section?.children?.title} {...a11yProps(11)} />
          <Tab label={section?.overdose?.title} {...a11yProps(12)} />
          <Tab label={section?.adverse_reactions?.title} {...a11yProps(13)} />
          <Tab label={section?.expiration_date?.title} {...a11yProps(14)} />
          <Tab label={section?.storage_conditions?.title} {...a11yProps(15)} />
          <Tab label={section?.packaging?.title} {...a11yProps(16)} />
          <Tab label={section?.leave_category?.title} {...a11yProps(17)} />
          <Tab label={section?.producer?.title} {...a11yProps(18)} />
          <Tab label={section?.location?.title} {...a11yProps(19)} />
          <Tab label={section?.source_of_instructions?.title} {...a11yProps(20)} />
        </Tabs>
      </WrapperInner>
      <WrapperInner style={{ height: '1000px', overflow: 'scroll' }} ref={ref}>
        <Section item={section?.composition} />
        <Section item={section?.medicinal_form} />
        <Section item={section?.medicinal_group} />
        <Section item={section?.pharmacodynamics} />
        <Section item={section?.pharmacokinetics} />
        <Section item={section?.indications_for_use} />
        <Section item={section?.contraindication} />
        <Section item={section?.interaction_with_other} />
        <Section item={section?.features_of_application} />
        <Section item={section?.ability_to_influence} />
        <Section item={section?.use_during_pregnancy} />
        <Section item={section?.children} />
        <Section item={section?.overdose} />
        <Section item={section?.adverse_reactions} />
        <Section item={section?.expiration_date} />
        <Section item={section?.storage_conditions} />
        <Section item={section?.packaging} />
        <Section item={section?.leave_category} />
        <Section item={section?.producer} />
        <Section item={section?.location} />
        <Section item={section?.source_of_instructions} />
      </WrapperInner>
    </Wrapper>
  )
}

function Section({ item }) {
  return (
    !!item?.title &&
    item?.html && (
      <div>
        <Title>{item.title}</Title>
        <Row dangerouslySetInnerHTML={{ __html: item.html }} />
      </div>
    )
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 70%;
  gap: 20px;
  padding: 20px 0;
  border: 1px solid rgba(136, 143, 154, 0.16);
  border-radius: 10px;
`
const WrapperInner = styled.div``

const RowWrapper = styled.div

const Row = styled.div``
const Title = styled.h5``
