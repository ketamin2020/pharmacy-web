import React from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const GroupChild = ({ child, handleNavigate }) => {
  return (
    <>
      <SubTitle onClick={() => handleNavigate(`/${child.slug}`)}>{child.group_name}</SubTitle>
      {child.children.map(item => (
        <Item onClick={() => handleNavigate(`/${child.slug}/${item.slug}`)} key={item.slug}>
          {item.group_name}
        </Item>
      ))}
    </>
  )
}

export const Groups = ({ groups }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate = (path: string) => {
    navigate(pathname + path)
  }

  return (
    <Wrapper>
      {!!groups?.length &&
        groups?.map(group => (
          <React.Fragment key={group.slug}>
            <Title>{group?.group_name}</Title>
            {group.children.map(child => (
              <GroupChild key={child.slug} child={child} handleNavigate={handleNavigate} />
            ))}
          </React.Fragment>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Title = styled.h2``
const SubTitle = styled.h3`
  transition: all 0.2s;
  font-size: 14px;
  &:hover {
    color: var(--greenColor);
    transition: all 0.2s;
    cursor: pointer;
  }
`
const Item = styled.p`
  transition: all 0.2s;
  color: rgba(57, 69, 86, 0.6);
  font-size: 14px;
  &:hover {
    color: var(--greenColor);
    transition: all 0.2s;
    cursor: pointer;
  }
`
