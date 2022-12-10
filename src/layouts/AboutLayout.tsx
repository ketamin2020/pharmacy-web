import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { RoutePath } from 'routes/types'
interface ISideMenu {
  name: string
  path: string
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 78%;
  gap: 20px;
  background-color: #f5f7fa;
  padding: 20px;
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

  & section,
  aside {
    box-shadow: 0 0 3px rgb(45 62 79 / 8%), 0 1px 4px rgb(57 72 86 / 12%);
    border-radius: 10px;
    background-color: white;
  }
`

const asideMenu: ISideMenu[] = [
  {
    name: 'Про нас ',
    path: RoutePath.ABOUT_PAGE,
  },
  {
    name: 'Як зробити замовлення',
    path: RoutePath.HOW_TO_SECTION,
  },
  {
    name: 'Доставка і оплата',
    path: RoutePath.DELIVERY_SECTION,
  },
  {
    name: 'Контакти',
    path: RoutePath.CONTACTS_SECTION,
  },
  {
    name: 'Наша місія',
    path: RoutePath.MISSION_SECTION,
  },
  {
    name: 'Наші партнери',
    path: RoutePath.PARTNERS_SECTION,
  },
  {
    name: 'Наша команда',
    path: RoutePath.TEAM_SECTION,
  },
  {
    name: 'Медичні експерти',
    path: RoutePath.EXPERTS_SECTION,
  },

  {
    name: 'Редакційна політика',
    path: RoutePath.EDITOR_POLICY_SECTION,
  },
  {
    name: 'Маркетингова політика',
    path: RoutePath.MARKETING_POLICY_SECTION,
  },
  {
    name: 'Політика конфіденційності',
    path: RoutePath.TERMS_SECTION,
  },
  {
    name: 'Угода про використання',
    path: RoutePath.AGREEMENT_SECTION,
  },

  {
    name: 'Умови повернення',
    path: RoutePath.ORDER_RETURN_SECTION,
  },
  {
    name: 'Гарантії якості',
    path: RoutePath.WARRANTY_SECTION,
  },
]
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
            {asideMenu.map(menu => (
              <li key={menu.path}>
                <NavLink to={menu.path} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
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
