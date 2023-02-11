import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(name: string, calories: number) {
  return { name, calories }
}

const rows = [
  createData('Діюча речовина', 159),
  createData('Торгівельна назва', 237),
  createData('GTIN', 262),
  createData('Країна виробник', 305),
  createData('Виробник', 356),
  createData('Імпорт', 356),
  createData('Дозування', 356),
  createData('Форма випуску', 356),
  createData('Рецептурний відпуск', 356),
  createData('Код Морион', 356),

  createData('Спосіб введения', 356),
  createData('К-ть в упаковці', 356),
  createData('Термін придатності', 356),
  createData('Код АТС/ATX', 356),

  createData('Температура зберігання', 356),
  createData('Упаковка', 356),

  createData('Температура зберігання', 356),
  createData('Упаковка', 356),
]

const DrugTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Назва</StyledTableCell>
            <StyledTableCell align='center'>Значення</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DrugTable
