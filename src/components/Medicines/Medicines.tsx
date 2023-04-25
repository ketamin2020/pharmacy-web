import React, { useState, useEffect } from 'react'
import { getMedicinesGroupList } from 'api/drugs'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import { GroupItem } from './components/GroupItem'
export const Medicines = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()

  const [global, main, main_group] = pathname.split('/')

  useEffect(() => {
    const fetchMedicinesGroup = async params => {
      setLoading(true)
      try {
        const res = await getMedicinesGroupList(params)
        setData(res?.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (main_group) fetchMedicinesGroup({ main_group })
  }, [])

  return (
    <Wrapper className='container'>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <>
          <h2>{data?.group_name}</h2>
          <ItemsWrapper>
            {data?.children &&
              data?.children?.map(item => <GroupItem key={item.slug} groupPath={data.slug} item={item} />)}
          </ItemsWrapper>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
