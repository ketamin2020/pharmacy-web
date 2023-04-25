import React, { useState, useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { MainList } from './components/MainList'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getDrugsList } from 'api/drugs'
import { Groups } from './components/Groups'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
export const DrugsList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()

  const [global, main, main_group, first_lavel, second_level] = pathname.split('/')

  const fetchDrugsList = async params => {
    try {
      setLoading(true)
      const res = await getDrugsList(params)

      setData(res)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrugsList({ main_group, first_lavel, second_level })
  }, [main_group, first_lavel, second_level])

  return (
    <Wrapper className='container'>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <>
          {data?.properties && <SearchBar properties={data?.properties} />}

          {data?.data && <MainList list={data?.data} />}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 100%;
`
