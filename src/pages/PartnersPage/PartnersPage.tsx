import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Partners from 'components/Partners'
export const PartnersPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Partners />
      </AboutLayout>
    </Layout>
  )
}
