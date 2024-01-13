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
import Drawer from '@mui/material/Drawer'
import Button from 'common/Button/Button'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const initQuery = {
  dosage: [],
  production_form: [],
  imported: [],
  maker: [],
  package: [],
  quantity: [],
  administration_route: [],
  active_ingredient: [],
  storage_temperature: [],
  marked_name: [],
  warnings: [],
}

export const DrugsList = () => {
  const [data, setData] = useState([])
  const [params, setParams] = useState(initQuery)
  const [open, setOpen] = useState(false)
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

  const onChangeParams = async (group, id) => {
    const newQuery = { ...params }

    if (group in newQuery) {
      const currentGroup = newQuery[group]

      if (currentGroup.includes(id)) {
        newQuery[group] = currentGroup.filter(item => item !== id)
      } else {
        newQuery[group] = [...currentGroup, id]
      }
    }

    setParams(newQuery)

    const res = await getDrugsList({ main_group, first_lavel, second_level, ...newQuery })

    setData(res)
  }

  console.log(params)

  useEffect(() => {
    fetchDrugsList({ main_group, first_lavel, second_level })
  }, [main_group, first_lavel, second_level])

  const screenWidth = window.innerWidth

  return (
    <Wrapper className='container'>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <>
          <MobWrapper>
            <Button style={{ width: '100%' }} color='green' shape='square' onClick={() => setOpen(true)}>
              <span>Фільтр</span>
            </Button>
            <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}>
              <Button
                style={{ margin: '10px auto', width: '100%' }}
                color='green'
                shape='square'
                onClick={() => setOpen(false)}
              >
                <span>Закрити</span>
              </Button>
              {data?.properties && (
                <SearchBar params={params} onChangeParams={onChangeParams} properties={data?.properties} />
              )}
            </Drawer>

            {data?.data && <MainList list={data?.data} />}
          </MobWrapper>

          <DesctopWrapper>
            {data?.properties && (
              <SearchBar params={params} onChangeParams={onChangeParams} properties={data?.properties} />
            )}

            {data?.data && <MainList list={data?.data} />}
          </DesctopWrapper>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
  }

  display: grid;
  grid-template-columns: 300px 100%;
`
const MobWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const DesctopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 320px 1110px;
    align-content: baseline;
  }
`
