import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Contacts from 'components/Contacts'
export const ContactsPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Contacts />
      </AboutLayout>
    </Layout>
  )
}
