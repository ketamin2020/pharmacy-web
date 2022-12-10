import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import About from 'components/About'
export const AboutPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <About />
      </AboutLayout>
    </Layout>
  )
}
