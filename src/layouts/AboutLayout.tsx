import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { publicRoutes } from 'routes/routes'

const Wrapper = styled.div`
  background-color: #f5f7fa;
  padding: 20px;
  & aside {
    display: none;
  }
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 20% 78%;
    gap: 20px;
    & aside {
      display: block;
      box-shadow: 0 0 3px rgb(45 62 79 / 8%), 0 1px 4px rgb(57 72 86 / 12%);
      border-radius: 10px;
      background-color: white;
    }
  }

  & ul {
    list-style: none;
    padding: 20px;
    & li {
      padding: 6px 4px;
      &:hover {
        background-color: #f7f9fa;
      }
    }
  }

  & section {
    padding: 20px;
    box-shadow: 0 0 3px rgb(45 62 79 / 8%), 0 1px 4px rgb(57 72 86 / 12%);
    border-radius: 10px;
    background-color: white;
  }

  @media screen and (min) {
  }
`
const activeStyle = {
  color: '#00a990',
  fontWeight: '600',
}

const AboutLayout = ({ children }) => {
  return (
    <Wrapper>
      <aside>
        <nav>
          <ul>
            {publicRoutes.map(menu => (
              <li key={menu.path}>
                <NavLink end to={menu.path} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section>{children}</section>
    </Wrapper>
  )
}

export default AboutLayout
