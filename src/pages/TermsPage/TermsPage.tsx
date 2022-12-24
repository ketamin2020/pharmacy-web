import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Terms from 'components/Terms'
export const TermsPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Terms />
      </AboutLayout>
    </Layout>
  )
}
