import React, {Component} from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    showMobileMenu: false,
    currentPage: ''
  }

  componentDidMount() {
    // set the initial current menu item, when user comes to the page or after refreshing the page
    this.setState({ currentPage: window.location.pathname.replace(/\//g , '') })
  }

  currentPageHandler = id => {
    this.setState({ currentPage: id })
  }

  currentPageMobileHandler = id => {
    this.setState({ 
      currentPage: id,
      showMobileMenu: !this.state.showMobileMenu
    })
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
                <li className={`menu-item ${this.state.currentPage === '' ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler('')}><Link to="/">DOMŮ</Link></li>
                <li className={`menu-item ${this.state.currentPage === 'portfolio' ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler('portfolio')}><Link to="/portfolio">PORTFOLIO</Link></li>
                <li className={`menu-item ${this.state.currentPage === 'kontakt' ? 'current_page_item' : null}`} onClick={() => this.currentPageHandler('kontakt')}><Link to="/kontakt">KONTAKT</Link></li>
              </ul>
            </nav>

            <nav id="slide-menu" className={`${this.state.showMobileMenu ? 'open' : 'display-none'}`} rel="nofollow">
              <ul className="primary-menu-list">
              <li className={`menu-item ${this.state.currentPage === '' ? 'current_page_item' : null}`} onClick={() => this.currentPageMobileHandler('')}><Link to="/">DOMŮ</Link></li>
              <li className={`menu-item ${this.state.currentPage === 'portfolio' ? 'current_page_item' : null}`} onClick={() => this.currentPageMobileHandler('portfolio')}><Link to="/portfolio">PORTFOLIO</Link></li>
              <li className={`menu-item ${this.state.currentPage === 'kontakt' ? 'current_page_item' : null}`} onClick={() => this.currentPageMobileHandler('kontakt')}><Link to="/kontakt">KONTAKT</Link></li>
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
