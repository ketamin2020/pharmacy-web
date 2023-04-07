import React, { useState, useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { MainList } from './components/MainList'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getDrugsList } from 'api/drugs'
import { Groups } from './components/Groups'
export const DrugsList = () => {
  const [data, setData] = useState([])
  const { pathname } = useLocation()

  const [global, main, main_group, first_lavel, second_level] = pathname.split('/')

  const fetchDrugsList = async params => {
    try {
      const res = await getDrugsList(params)

      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDrugsList({ main_group, first_lavel, second_level })
  }, [main_group, first_lavel, second_level])

  return (
    <Wrapper className='container'>
      {main_group && !first_lavel && !second_level ? (
        <Groups groups={data?.data} />
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
