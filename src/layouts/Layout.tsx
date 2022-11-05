import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
