import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import styled from '@emotion/styled'

const PropertyItem = ({ items, name }) => {
  return (
    <Accordion style={{ margin: '0px !important' }} defaultExpanded>
      <AccordionSummary
        style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px', margin: '0px !important' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <p style={{ margin: '0px' }}> {name}</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component='fieldset' variant='standard'>
          <FormGroup>
            {items?.map(item => (
              <FormControlLabel
                key={item.id}
                control={<Checkbox checked={false} onChange={() => null} name={item?.id} />}
                label={
                  <p style={{ margin: '0 0 0 10px' }}>
                    {item.name} <span style={{ color: 'gray' }}>{`(${item.count})`}</span>{' '}
                  </p>
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  )
}

export const SearchBar = ({ properties }) => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  })
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <Wrapper>
      {' '}
      {!!properties?.route && <PropertyItem items={properties.route} name='Спосіб введення' />}
      {!!properties?.temperature && <PropertyItem items={properties.temperature} name='Температура зберігання' />}
      {!!properties?.substances && <PropertyItem items={properties.substances} name='Діюча речовина' />}
      {!!properties?.quantity && <PropertyItem items={properties.quantity} name='Кількість в упаковці' />}
      {!!properties?.packages && <PropertyItem items={properties.packages} name='Упаковка' />}
      {!!properties?.makers && <PropertyItem items={properties.makers} name='Виробник' />}
      {!!properties?.forms && <PropertyItem items={properties.forms} name='Лікарська форма' />}
      {!!properties?.dosages && <PropertyItem items={properties.dosages} name='Дозування' />}
      {!!properties?.trade_name && <PropertyItem items={properties.trade_name} name='Торгова назва' />}
      {!!properties?.imported && <PropertyItem items={properties.imported} name='Імпорт' />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & .MuiAccordionSummary-content .Mui-expanded {
    margin-bottom: 0px !important;
  }
`
