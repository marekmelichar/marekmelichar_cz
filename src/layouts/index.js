import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './header'

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
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
