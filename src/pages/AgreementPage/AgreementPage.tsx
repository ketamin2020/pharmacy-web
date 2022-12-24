import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Agreement from 'components/Agreement'
export const AgreementPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Agreement />
      </AboutLayout>
    </Layout>
  )
}
