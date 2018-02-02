import React, {Component} from 'react'

import logo from '../img/logo.png'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    showMobileMenu: false
  }

  render() {
    return (
      <footer className="container-fluid footer">
    		<div className="row">
    			<div className="column size_100 text-center social">
            {/* dont use Link because it is not inside the app */}
    				<a href="https://twitter.com/marek_melichar"><i className="icon ion-social-twitter-outline"></i></a>
    				<a href="https://www.facebook.com/marek.melichar"><i className="icon ion-social-facebook-outline"></i></a>
    				<a href="https://www.linkedin.com/in/melicharmarek/"><i className="icon ion-social-linkedin-outline"></i></a>
    				<a href="https://github.com/marekmelichar"><i className="icon ion-social-github-outline"></i></a>
    			</div>
    		</div>
    	</footer>
    )
  }
}
