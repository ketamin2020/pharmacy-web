import React, { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet'
const SEOProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>ArtMed</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      {children}
    </>
  )
}

export default SEOProvider
