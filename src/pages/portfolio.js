import React from 'react'
import Link from 'gatsby-link'

import Portfolio1 from '../img/portfolio/1.jpg'
import Portfolio2 from '../img/portfolio/2.jpg'
import Portfolio3 from '../img/portfolio/3.jpg'
import Portfolio4 from '../img/portfolio/4.jpg'
import Portfolio5 from '../img/portfolio/5.jpg'
import Portfolio6 from '../img/portfolio/6.jpg'

const PortfolioPage = () => (
  <section className="portfolio">
    <div className="row">
			<div className="column size_100">
				<h3>PORTFOLIO</h3>
			</div>
		</div>
    <div className="image-grid group">
      <img src={Portfolio1} className="gallery-img" alt="Výškové práce Melichar" />
      <img src={Portfolio2} className="gallery-img" alt="Lesní mateřská škola Permoník" />
      <img src={Portfolio3} className="gallery-img" alt="Bottle service" />
      <img src={Portfolio4} className="gallery-img" alt="Kovářství Uhříček" />
      <img src={Portfolio5} className="gallery-img" alt="epoznamky.cz" />
      <img src={Portfolio6} className="gallery-img" alt="LanCraft" />
    </div>
  </section>
)

export default PortfolioPage
