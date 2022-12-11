import React from 'react'
import Layout from 'layouts/MainLayout'
import AboutLayout from 'layouts/AboutLayout'
import Payment from 'components/Payment'
export const PaymentPage = () => {
  return (
    <Layout>
      <AboutLayout>
        <Payment />
      </AboutLayout>
    </Layout>
  )
}
