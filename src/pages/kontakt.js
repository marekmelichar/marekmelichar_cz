import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <section>
    <div className="row contact-page">
			<div className="column size_100">
					<form>
						<div style="display: none;"> <input type="hidden" name="_wpcf7" value="70" /> <input type="hidden" name="_wpcf7_version" value="4.9.1" /> <input type="hidden" name="_wpcf7_locale" value="en_US" /> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f70-p19-o1" /> <input
							  type="hidden" name="_wpcf7_container_post" value="19" /></div>
						<p><span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" id="contactEmail" aria-required="true" aria-invalid="false" placeholder="E-mail" /></span><br
            /> <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="contactName" aria-required="true" aria-invalid="false" placeholder="Jméno" /></span><br
            /> <span className="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" className="wpcf7-form-control wpcf7-text" id="contactSubject" aria-invalid="false" placeholder="Předmět" /></span><br /> <span className="wpcf7-form-control-wrap textarea"><textarea name="textarea" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" id="contactText" aria-invalid="false" placeholder="Vzkaz"></textarea></span></p>
						<p
						  className="submit-icon"><span className="ion-ios-paperplane-outline"></span><input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" id="sipkaOdeslat" /></p>
							<div className="wpcf7-response-output wpcf7-display-none"></div>
					</form>
			</div>
		</div>
		<div className="map"></div>
  </section>
)

export default ContactPage
