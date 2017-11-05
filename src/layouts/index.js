import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

// import '../styles/slick/slick.min.css'
// import '../styles/slick/slick-theme.min.css'
import '../styles/ionicons.css'
import '../styles/lib.css'
import '../styles/nav.css'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Marek Melichar - tvorba webových stránek Brno"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Header />
    <main>
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
