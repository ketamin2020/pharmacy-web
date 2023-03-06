import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import { visuallyHidden } from '@mui/utils'
import { Add } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import CloseIcon from '@mui/icons-material/Close'
import { TextField } from '@mui/material'
import { FormControl } from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

import Select, { SelectChangeEvent } from '@mui/material/Select'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import AppBar from '@mui/material/AppBar'

import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { getProperties, deleteProperty, updateProperty, createProperty } from 'api/property'
import { getSubstances } from 'api/substances'
import notification from 'common/Notification/Notification'

import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { Edit } from '@material-ui/icons'
interface Film {
  title: string
  year: number
}

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

interface Data {
  id: string
  morion: number
  section: object
  external_code: string
  name: string
}

function createData(id, morion, section, external_code, name): Data {
  return {
    id,
    morion,
    section,
    external_code,
    name,
  }
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'morion',
    numeric: true,
    disablePadding: false,
    label: 'Morion',
  },
  {
    id: 'external_code',
    numeric: true,
    disablePadding: false,
    label: 'External code',
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

interface EnhancedTableToolbarProps {
  numSelected: number
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, handleClickOpen, handleDelete } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
          Properties
        </Typography>
      )}
      {numSelected > 0 ? (
        <>
          <Tooltip title='Delete'>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Edit selected'>
            <IconButton onClick={handleClickOpen}>
              <Edit />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title='Add new brand'>
          <IconButton onClick={handleClickOpen}>
            <Add />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}
const initData = {
  active_ingredient: {
    value: '',
  },
  marketed_name: {
    value: '',
  },
  manufacturing_country: {
    value: '',
  },
  maker: {
    value: '',
  },
  imported: {
    value: '',
  },
  dosage: {
    value: '',
  },
  production_form: {
    value: '',
  },
  prescription: {
    value: '',
  },
  morion: {
    value: '',
  },
  administration_route: {
    value: '',
  },
  quantity: {
    value: '',
  },

  expiration: {
    value: '',
  },
  atc: {
    value: '',
  },
  storage_temperature: {
    value: '',
  },

  package: {
    value: '',
  },
}

export const Property = () => {
  const [state, setState] = useState(initData)

  const [data, setData] = useState([])
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>()
  const [selected, setSelected] = useState<readonly string[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [open, setOpen] = useState(false)
  const [rowSelected, setRowSelected] = useState({})
  const [code, setCode] = useState()
  const [name, setName] = useState()
  const [externalCode, setExternalCode] = useState()
  const [openAutocomplete, setOpenAutocomplete] = React.useState(false)
  const [options, setOptions] = React.useState<readonly Film[]>([])
  const loading = open && options.length === 0

  const onChangeHandle = (e: onChange<HTMLInputElement>) => {
    const { name, value } = e.target
    setState(prev => ({ ...prev, [name]: { ...prev[name], value: value } }))
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setState(initData)

    setCode(null)
    setName('')
    setExternalCode('')
    setRowSelected('')
    setSelected([])
  }

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.name)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string, row) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setRowSelected(row)
    setState(row.section)

    setCode(row.morion)
    setName(row.name)
    setExternalCode(row.external_code)
    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const fetchInstructionsList = async () => {
    try {
      const res = await getProperties()
      setData(res)
    } catch (error) {
      notification('error', 'Something went wrong!')
    }
  }

  const handleCreate = async () => {
    try {
      await createProperty({
        section: state,
        morion: code,
        name,
        external_code: externalCode,
      })
      await fetchInstructionsList()
      notification('success', 'Property was created successfuly!')
    } catch (error) {
      notification('error', 'Something went wrong!')
    }
  }
  const handleUpdate = async () => {
    try {
      await updateProperty({
        id: rowSelected.id,
        section: state,
        morion: code,
        name,
        external_code: externalCode,
      })
      await fetchInstructionsList()
      notification('success', 'Property was updated successfuly!')
    } catch (error) {
      notification('error', 'Something went wrong!')
    }
  }
  const handleDelete = async () => {
    try {
      await deleteProperty(rowSelected.id)
      await fetchInstructionsList()
      notification('success', 'Property was deleted successfuly!')
    } catch (error) {
      notification('error', 'Something went wrong!')
    }
  }

  const fetchSubstanceList = async () => {
    try {
      const res = await getSubstances()

      setOptions(res)
    } catch (error) {
      notification('error', 'Something went wrong!')
    }
  }

  useEffect(() => {
    fetchInstructionsList()
  }, [])
  useEffect(() => {
    fetchSubstanceList()
  }, [])

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  const rows = data?.map(d => createData(d.id, d.morion, d.section, d.external_code, d.name))

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          handleDelete={handleDelete}
          handleClickOpen={handleClickOpen}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name)
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name, row)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>

                      <TableCell component='th' id={labelId} scope='row' padding='none'>
                        {row.id}
                      </TableCell>
                      <TableCell align='left'>{row.morion}</TableCell>
                      <TableCell align='left'>{row.external_code}</TableCell>
                      <TableCell align='left'>{row.name}</TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Create New Property
            </Typography>

            {rowSelected?.id ? (
              <Button
                autoFocus
                color='inherit'
                onClick={() => {
                  handleUpdate()
                  handleClose()
                }}
              >
                update
              </Button>
            ) : (
              <Button
                autoFocus
                color='inherit'
                onClick={() => {
                  handleCreate()
                  handleClose()
                }}
              >
                save
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <List>
          <TextField
            fullWidth
            label='Morion'
            required
            size='small'
            type='number'
            onChange={e => setCode(e.target.value)}
            value={code}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='External code'
            size='small'
            type='text'
            onChange={e => setExternalCode(e.target.value)}
            value={externalCode}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='Name'
            size='small'
            required
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
            style={{ marginBottom: '20px' }}
          />
          <Autocomplete
            id='asynchronous-demo'
            fullWidth
            style={{ marginBottom: '20px' }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={option => option.name_ua}
            options={options}
            loading={loading}
            onChange={onChangeHandle}
            value={state.active_ingredient.value || null}
            size='small'
            renderInput={params => (
              <TextField
                {...params}
                label='Substance'
                size='small'
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color='inherit' size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <TextField
            fullWidth
            label='Marked name'
            required
            size='small'
            name='marked_name'
            onChange={onChangeHandle}
            value={state.marketed_name.value}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='Manufacturing country'
            required
            size='small'
            name='manufacturing_country'
            onChange={onChangeHandle}
            value={state.manufacturing_country.value}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='Maker'
            required
            size='small'
            name='maker'
            onChange={onChangeHandle}
            value={state.maker.value}
            style={{ marginBottom: '20px' }}
          />
          <FormControl fullWidth>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={state.imported.value}
              label='Imported'
              onChange={onChangeHandle}
              style={{ marginBottom: '20px' }}
              size='small'
            >
              <MenuItem value={'Так'}>Так</MenuItem>
              <MenuItem value={'Ні'}>Ні</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Dosage'
            required
            size='small'
            name='dosage'
            onChange={onChangeHandle}
            value={state.dosage.value}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='Form'
            required
            size='small'
            name='production_form'
            onChange={onChangeHandle}
            value={state.production_form.value}
            style={{ marginBottom: '20px' }}
          />
          <FormControl fullWidth>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={state.prescription.value}
              label='Prescription'
              onChange={onChangeHandle}
              style={{ marginBottom: '20px' }}
              size='small'
            >
              <MenuItem value={'Так'}>Так</MenuItem>
              <MenuItem value={'Ні'}>Ні</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Administration route'
            required
            size='small'
            name='administration_route'
            onChange={onChangeHandle}
            value={state.administration_route.value}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='Quantity'
            required
            size='small'
            name='quantity'
            onChange={onChangeHandle}
            value={state.quantity.value}
            style={{ marginBottom: '20px' }}
          />
          <FormControl fullWidth>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={state.expiration.value}
              label='Expiration'
              placeholder='Expiration'
              onChange={onChangeHandle}
              style={{ marginBottom: '20px' }}
              size='small'
            >
              <MenuItem value={'1 рік'}>1 рік</MenuItem>
              <MenuItem value={'2 роки'}>2 роки</MenuItem>
              <MenuItem value={'3 роки'}>3 роки</MenuItem>
              <MenuItem value={'4 роки'}>4 роки</MenuItem>
              <MenuItem value={'5 років'}>1 років</MenuItem>
              <MenuItem value={'6 років'}>6 років</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Storage temperature'
            required
            size='small'
            name='storage_temperature'
            onChange={onChangeHandle}
            value={state.storage_temperature.value}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label='Package'
            required
            size='small'
            name='package'
            onChange={onChangeHandle}
            value={state.package.value}
            style={{ marginBottom: '20px' }}
          />
        </List>
      </Dialog>
    </Box>
  )
}
