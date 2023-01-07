import React from 'react'
import Layout from 'layouts/MainLayout'
import AccountLayout from 'layouts/AccountLayout'
import WishList from 'components/WishList'
export const WishListPage = () => {
  return (
    <Layout>
      <AccountLayout>
        <WishList />
      </AccountLayout>
    </Layout>
  )
}
