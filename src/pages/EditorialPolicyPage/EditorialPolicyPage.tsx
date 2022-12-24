import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import EditorialPolicy from 'components/EditorialPolicy'
export const EditorialPolicyPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <EditorialPolicy />
      </AboutLayout>
    </Layout>
  )
}
