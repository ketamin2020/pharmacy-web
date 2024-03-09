import React, { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet'

const SEOProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          Інтернет аптека: купити ліки онлайн в ARTMED за низькою ціною. Замовлення мед препаратів з доставкою по
          Україні | ARTMED
        </title>
        <link rel='canonical' href={window.location.host} />
      </Helmet>
      {children}
    </>
  )
}

export default SEOProvider
