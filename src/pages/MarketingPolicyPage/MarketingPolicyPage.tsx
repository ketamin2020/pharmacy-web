import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import MarketingPolicy from 'components/MarketingPolicy'
export const MarketingPolicyPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <MarketingPolicy />
      </AboutLayout>
    </Layout>
  )
}
