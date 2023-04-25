import React from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/types'
import { NavLink } from 'react-router-dom'
export const GroupItem = ({ item, groupPath }) => {
  const navigate = useNavigate()

  const navigateHandle = path => {
    navigate(`${RoutePath.DRUGS}/${groupPath}/${path}`)
  }
  const { group_image, group_name, slug } = item
  return (
    <Wrapper onClick={() => navigateHandle(slug)}>
      <img src={group_image} alt={slug} />
      <NavLink style={{ textAlign: 'center' }} to={`${RoutePath.DRUGS}/${groupPath}/${slug}`}>
        {group_name}
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 320px;
  cursor: pointer;
  border-radius: 20px;
  padding: 20px;
  & img {
    display: block;
    width: 100%;
    height: auto;
  }
  &:hover {
    box-shadow: 0px 6px 24px rgba(0, 169, 80, 0.25);
  }
`
