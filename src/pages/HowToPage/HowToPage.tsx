import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import HowTo from 'components/HowTo'
export const HowToPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <HowTo />
      </AboutLayout>
    </Layout>
  )
}
