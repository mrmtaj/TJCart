
import React from 'react'

const Footer = () => {
  return (
            
    <footer className="bg-faded text-muted py-5 mt-5">
	  <div className="container">
		<div className="row">
				  <div className="col-sm-3">
			  <h5>Information</h5>
			  <ul className="list-unstyled">
				  <li><a href="/">About Us</a></li>
				  <li><a href="/">Delivery Information</a></li>
				  <li><a href="/">Privacy Policy</a></li>
				  <li><a href="/">Terms &amp; Conditions</a></li>
			  </ul>
			</div>
				<div className="col-sm-3">
			<h5>Customer Service</h5>
			<ul className="list-unstyled">
			  <li><a href="/">Contact Us</a></li>
			  <li><a href="/">Returns</a></li>
			  <li><a href="/">Site Map</a></li>
			</ul>
		  </div>
		  <div className="col-sm-3">
			<h5>Extras</h5>
			<ul className="list-unstyled">
			  <li><a href="/">Brands</a></li>
			  <li><a href="/">Gift Certificates</a></li>
			  <li><a href="/">Affiliate</a></li>
			  <li><a href="/">Specials</a></li>
			</ul>
		  </div>
		  <div className="col-sm-3">
			<h5>My Account</h5>
			<ul className="list-unstyled">
			  <li><a href="/">My Account</a></li>
			  <li><a href="/">Order History</a></li>
			  <li><a href="/">Wish List</a></li>
			  <li><a href="/">Newsletter</a></li>
			</ul>
		  </div>
		</div>
			<p className="float-right">
			  <a href="/">Back to top</a>
			</p>
	  </div>
	</footer>
  )
}

export default Footer
