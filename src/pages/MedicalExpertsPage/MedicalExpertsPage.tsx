import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import MedicalExperts from 'components/MedicalExperts'
export const MedicalExpertsPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <MedicalExperts />
      </AboutLayout>
    </Layout>
  )
}
