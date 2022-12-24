import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import OrderReturn from 'components/OrderReturn'
export const OrderReturnPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <OrderReturn />
      </AboutLayout>
    </Layout>
  )
}
