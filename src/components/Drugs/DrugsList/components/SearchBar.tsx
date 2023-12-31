import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import Checkbox from '@mui/material/Checkbox'
import styled from '@emotion/styled'

const PropertyItem = ({ items, name, query, handleChangeValue, params }) => {
  return (
    <Accordion style={{ margin: '0px !important' }} defaultExpanded>
      <AccordionSummary
        style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px', margin: '0px !important' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <p style={{ margin: '0px', fontSize: '14px' }}> {name}</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component='fieldset' variant='standard'>
          <FormGroup>
            {items?.map(item => (
              <FormControlLabel
                key={item.id}
                style={{ alignItems: 'flex-start' }}
                control={
                  <Checkbox
                    checked={params?.includes(item?.id)}
                    onChange={e => handleChangeValue(e, item?.id)}
                    name={query}
                    style={params?.includes(item?.id) ? { color: 'rgb(255, 51, 102)' } : { color: '#dbd6d6' }}
                  />
                }
                name={query}
                label={
                  <p style={{ margin: '0 0 0 10px' }}>
                    <span style={{ fontSize: '14px' }}>{item.name}</span>
                    <span style={{ color: 'gray', fontSize: '14px' }}>{`(${item.count})`}</span>{' '}
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

export const SearchBar = ({ properties, onChangeParams, params }) => {
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>, id) => {
    onChangeParams(event.target.name, id)
  }

  return (
    <Wrapper>
      {' '}
      {!!properties?.route && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='administration_route'
          items={properties.route}
          name='Спосіб введення'
          params={params?.route}
        />
      )}
      {!!properties?.temperature && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='storage_temperature'
          items={properties.temperature}
          name='Температура зберігання'
          params={params?.temperature}
        />
      )}
      {!!properties?.substances && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='active_ingredient'
          items={properties.substances}
          name='Діюча речовина'
          params={params?.substances}
        />
      )}
      {!!properties?.quantity && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='quantity'
          items={properties.quantity}
          name='Кількість в упаковці'
          params={params?.quantity}
        />
      )}
      {!!properties?.packages && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='package'
          items={properties.packages}
          name='Упаковка'
          params={params?.packages}
        />
      )}
      {!!properties?.makers && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='maker'
          items={properties.makers}
          name='Виробник'
          params={params?.makers}
        />
      )}
      {!!properties?.forms && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='production_form'
          items={properties.forms}
          name='Лікарська форма'
          params={params?.forms}
        />
      )}
      {!!properties?.dosages && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='dosage'
          items={properties.dosages}
          name='Дозування'
          params={params?.dosages}
        />
      )}
      {!!properties?.trade_name && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='marked_name'
          items={properties.trade_name}
          name='Торгова назва'
          params={params?.trade_name}
        />
      )}
      {!!properties?.imported && (
        <PropertyItem
          handleChangeValue={handleChangeValue}
          query='imported'
          items={properties.imported}
          name='Імпорт'
          params={params?.imported}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & .MuiAccordionSummary-content .Mui-expanded {
    margin-bottom: 0px !important;
  }
  .Mui-expanded {
    min-height: 34px;
    margin: 0 !important;
  }
  padding: 20px;
`
