import { useState, useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { debounce } from '@mui/material/utils'
import { searchByCityName as fetchCities } from 'api/drugs'

interface MainTextMatchedSubstrings {
  offset: number
  length: number
}

interface PlaceType {
  Present: string
}

export default function CitySearchAutocomplite({ onSelect, inputVal }) {
  const [value, setValue] = useState<PlaceType | null>(inputVal)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState<readonly PlaceType[]>([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)

  const searchByCityName = useMemo(
    () =>
      debounce((search: string, callback: (results?: readonly PlaceType[]) => void) => {
        fetchCities({ search, page, limit })
          .then(results => {
            callback(results)
          })
          .catch(error => {
            console.error('Error fetching cities:', error)
            callback([])
          })
      }, 400),
    [],
  )

  useEffect(() => {
    let active = true
    setLoading(true)
    if (inputValue === '') {
      setOptions(value ? [value] : [])
      return undefined
    }

    searchByCityName(inputValue, (results?: readonly PlaceType[]) => {
      const { cities } = results
      if (active) {
        let newOptions: readonly PlaceType[] = []

        if (value) {
          newOptions = [value]
        }

        if (results) {
          newOptions = [...newOptions, ...cities]
        }

        setOptions(newOptions)
      }
    })
    setLoading(false)

    return () => {
      active = false
    }
  }, [value, inputValue, searchByCityName])

  return (
    <Autocomplete
      id='google-map-demo'
      sx={{ width: 300 }}
      loading={loading}
      getOptionLabel={option => (typeof option === 'string' ? option : option?.Present)}
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText='No locations'
      size='small'
      fullWidth
      style={{ width: '100%' }}
      onChange={(event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options)
        setValue(newValue)
        onSelect(newValue)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      renderInput={params => <TextField {...params} label='Адреса' fullWidth />}
      renderOption={(props, option) => {
        return (
          <li {...props}>
            <Grid container alignItems='center'>
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnIcon sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                <Typography variant='body2' color='text.secondary'>
                  {option?.Present}
                </Typography>
              </Grid>
            </Grid>
          </li>
        )
      }}
    />
  )
}
