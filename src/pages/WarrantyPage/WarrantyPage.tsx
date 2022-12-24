import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Warranty from 'components/Warranty'
export const WarrantyPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Warranty />
      </AboutLayout>
    </Layout>
  )
}
