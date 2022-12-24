import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Team from 'components/Team'
export const TeamPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Team />
      </AboutLayout>
    </Layout>
  )
}
