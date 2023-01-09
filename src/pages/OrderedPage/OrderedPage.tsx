import React from 'react'
import Layout from 'layouts/MainLayout'
import AccountLayout from 'layouts/AccountLayout'
import Ordered from 'components/Ordered'
export const OrderedPage = () => {
  return (
    <Layout>
      <AccountLayout>
        <Ordered />
      </AccountLayout>
    </Layout>
  )
}
