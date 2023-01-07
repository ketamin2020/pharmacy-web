import React from 'react'
import Layout from 'layouts/MainLayout'
import AccountLayout from 'layouts/AccountLayout'
import PersonalInfo from 'components/PersonalInfo'
export const PersonalInfoPage = () => {
  return (
    <Layout>
      <AccountLayout>
        <PersonalInfo />
      </AccountLayout>
    </Layout>
  )
}
