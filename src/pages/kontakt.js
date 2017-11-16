import React from 'react'
import Link from 'gatsby-link'

import map from '../img/map.png'

const ContactPage = () => (
  <section id="kontakt">
    <div className="row">
      <div className="column size_100 text-center margin-top-3">
        <h1>KONTAKT</h1>
      </div>
    </div>
    <div
      className="margin-top-3"
      style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 350,
        backgroundPosition: `50% 0`,
        padding: `2em`,
        position: 'relative'
      }}>
      <div className="row">
        <div className="column size_33 text-center">
          <h2>Marek Melichar</h2>
          <p>Selská 25/52</p>
          <p>Brno 61400</p>
          <p>IČ: 76334813</p>
        </div>
        <div className="column size_33 text-center">
          <h2>Telefon:</h2>
          <a href="tel:+420 774 982 478">+420 774 982 478</a>
        </div>
        <div className="column size_33 text-center">
          <h2>Email:</h2>
          <a href="mailto:marek@marekmelichar.cz">marek@marekmelichar.cz</a>
        </div>

        {/* <div className="column size_50">
          <h2>Marek Melichar</h2>
          <p>Selská 25/52</p>
          <p>Brno 61400</p>
          <h2>Telefon:</h2>
          <a href="tel:+420 774 982 478">+420 774 982 478</a>
          <h2>Email:</h2>
          <a href="mailto:marek@marekmelichar.cz">marek@marekmelichar.cz</a>
        </div> */}
        <div className="column size_50"></div>
      </div>
    </div>
  </section>
)

export default ContactPage
