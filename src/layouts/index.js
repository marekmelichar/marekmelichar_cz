import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import logo from '../img/logo.png'

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
        { name: 'charset', content: 'utf-8' },
        { name: 'description', content: 'Marek Melichar - Webdesigner' },
        { name: 'keywords', content: 'Marek Melichar, Brno, Webdesigner' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-tap-highlight', content: 'no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'application-name', content: 'Marek Melichar - Webdesigner' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'gray' },
        { name: 'apple-mobile-web-app-title', content: 'Marek Melichar - Webdesigner' },
        { name: 'theme-color', content: '#3d3d3d' },
        { name: 'msapplication-TileColor', content: '#3d3d3d' },
        { name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
        { property: 'og:locale', content: 'cs_CZ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Marek Melichar - Webdesign' },
        { property: 'og:description', content: 'Tvořím webové stránky, specializuji se na weby menšího a středního rozsahu, jejich logickou strukturu, přehled v informacích webu, originální grafiku, kvalitní a validní kód. Weby tvořím zcela na míru.' },
        { property: 'og:url', content: 'https://marekmelichar.cz/' },
        { property: 'og:image', content: {logo} },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: 'Tvořím webové stránky, specializuji se na weby menšího a středního rozsahu, jejich logickou strukturu, přehled v informacích webu, originální grafiku, kvalitní a validní kód. Weby tvořím zcela na míru.' },
        { name: 'twitter:title', content: 'Marek Melichar - Webdesign' },
        { name: 'twitter:image', content: {logo} },
      ]}
    >

      <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      <link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
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
