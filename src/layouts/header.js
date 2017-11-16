import React, {Component} from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    showMobileMenu: false,
    currentPage: 0
  }

  currentPageHandler = index => {
    this.setState({ currentPage: index })
  }

  render() {
    return (
      <header className="fixed">
      	<div className="row">
      		<Link to="/" className="column size_33 name-wrap">
      			<h1>MAREK MELICHAR</h1>
      			<h2>TVORBA WEBOVÝCH STRÁNEK</h2>
      		</Link>
      		<div className="column size_33 logo-wrap text-center">
      			<img src={logo} className="logo" alt="Logo" />
      		</div>
      		<div className="column size_33 main-menu">
            <nav id="menu-main-menu">
              <ul className="primary-menu-list">
                <li className={`menu-item ${this.state.currentPage === 0 ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler(0)}><Link to="/">DOMŮ</Link></li>
                <li className={`menu-item ${this.state.currentPage === 1 ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler(1)}><Link to="/portfolio">PORTFOLIO</Link></li>
                <li className={`menu-item ${this.state.currentPage === 2 ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler(2)}><Link to="/kontakt">KONTAKT</Link></li>
              </ul>
            </nav>

            <nav id="slide-menu" className="display-none" rel="nofollow">
              <ul className="primary-menu-list">
                <li className={`menu-item ${this.state.currentPage === 0 ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler(0)}><Link to="/">DOMŮ</Link></li>
                <li className={`menu-item ${this.state.currentPage === 1 ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler(1)}><Link to="/portfolio">PORTFOLIO</Link></li>
                <li className={`menu-item ${this.state.currentPage === 2 ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler(2)}><Link to="/kontakt">KONTAKT</Link></li>
              </ul>
            </nav>

            <div
              className="menu-trigger display-none"
              onClick={() => this.setState({ showMobileMenu: !this.state.showMobileMenu })}
              ></div>
      		</div>
      	</div>
    	</header>
    )
  }
}
