import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Missiya from 'components/Missiya'
export const MissiyaPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Missiya />
      </AboutLayout>
    </Layout>
  )
}
