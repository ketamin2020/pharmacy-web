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
export const SearchBar = () => {
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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component='fieldset' variant='standard'>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={state.gilad} onChange={handleChangeValue} name='gilad' />}
                label='Gilad Gray'
              />
              <FormControlLabel
                control={<Checkbox checked={state.jason} onChange={handleChangeValue} name='jason' />}
                label='Jason Killian'
              />
              <FormControlLabel
                control={<Checkbox checked={state.antoine} onChange={handleChangeValue} name='antoine' />}
                label='Antoine Llorca'
              />
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-right: 1px solid gray;
`
