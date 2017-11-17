import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'

import banner from '../img/banner.png'
import screens from '../img/screens.png'
import browser from '../img/browser.png'
import can_i_help from '../img/can_i_help.png'

import slide1 from '../img/slider/1.png'
import slide2 from '../img/slider/2.png'
import slide3 from '../img/slider/3.png'
import slide4 from '../img/slider/4.png'
import slide5 from '../img/slider/5.png'
import {ArrowNext, ArrowPrev} from '../components'

const settings = {
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  draggable: true,
  centerMode: true,
  swipe: true,
  touchMove: true,
  swipeToSlide: true,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
  responsive: [
    { 
      breakpoint: 767, 
      settings: { slidesToShow: 2 } 
    }, {
      breakpoint: 321,
      settings: { slidesToShow: 1 }
    }
  ]
}

const IndexPage = () => (
  <article>
    <section className="position-relative z-1">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 390,
          backgroundPosition: `50% 0`
        }}>

        <h1>Tvořím webové stránky, specializuji se na weby menšího a středního rozsahu, jejich logickou strukturu, přehled v informacích webu, originální grafiku, kvalitní a validní kód. Weby tvořím zcela na míru.</h1>
        <h2>Potřebujete nový web?</h2>
        <a href="/kontakt" className="btn btn-default" type="submit">Kontaktujte mě</a>
      </div>
    </section>

    <section className="offer-web-services">
      <div className="row">
        <div className="container">
          <div className="column size_50">
            <h2>Tvorba webových stránek</h2>
            <ul>
              <li>Vytvořím Vám web nebo vylepším ten stávající</li>
              <li>Web bude plně editovatelný v CMS</li>
              <li>Nabízím kódování html, css, js šablon na míru pro následné použití v CMS</li>
              <li>Web bude připraven i v responzivní verzi, pro snadné užívání na mobilnímtelefonu nebo tabletu</li>
              <li>Web bude v základu SEO optimalizovaný</li>
              <li>Web bude optimalizovaný pro zobrazení ve všech hlavních prohlížečích</li>
            </ul>
          </div>
          <div className="column size_50">
            <div className="screens">
              <img src={screens} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="offer-javascript-services">
      <div className="row">
        <div className="column size_60">
          <div className="browser">
            <img src={browser} alt="" />
          </div>
        </div>
        <div className="column size_40">
          <h2>Vývoj webových aplikací</h2>
          <ul>
            <li>Vyvíjím na míru webové JavaScript aplikace,</li>
            <li>technologie které používám:</li>
            <li>– React, Redux</li>
            <li>– Node.js</li>
            <li>– ES6, ES7, Babel</li>
            <li>– Webpack</li>
            <li>– Meteor JS (real-time JS aplikace) + MongoDB</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="full-width-slider">
      <h2>Ukázky z portfolia</h2>

      <Slider {...settings}>
        <Link to="/portfolio" className="slide">
          <img src={slide1} alt="epoznamky.cz" />
        </Link>
        <Link to="/portfolio" className="slide">
          <img src={slide2} alt="kovářství Uhříček" />
        </Link>
        <Link to="/portfolio" className="slide">
          <img src={slide3} alt="Bottleservice" />
        </Link>
        <Link to="/portfolio" className="slide">
          <img src={slide4} alt="Výškové práce" />
        </Link>
        <Link to="/portfolio" className="slide">
          <img src={slide5} alt="LMŠ Permoník" />
        </Link>
      </Slider>
    </section>

    <section className="container-fluid part-of-your-project" style={{backgroundImage: `url(${can_i_help})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 300, backgroundPosition: `50% 0`}}>
      <div className="row">
        <div className="column size_100 text-center">
          <h2>Můžu Vám pomoci i s Vaším projektem?</h2>
          <h3><span className="icon ion-ios-email-outline" aria-hidden="true"></span><a href="mailto:marek@marekmelichar.cz">marek@marekmelichar.cz</a></h3>
        </div>
      </div>
    </section>
  </article>
)

export default IndexPage
