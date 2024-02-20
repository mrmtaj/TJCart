import React, {useContext} from 'react';
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import {useAuth} from '../context/AuthContext';



function TopNav(props) {
 
	const { user } = useContext(UserContext);

	const { authUser } = useAuth();


	return (
		<div id="top-nav" className="bg-light smaller-font-size text-muted">
			<nav className="navbar-expand-md container px-3">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link text-muted" href="/"><span className="hidden-xs hidden-sm hidden-md"> {user && (<>welcome: {user.username} </>)}  {authUser?.email}</span></a>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-muted" to="/cart"><i className="la la-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">Shopping Cart</span></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-muted" to="/checkout"><i className="la la-share"></i> <span className="hidden-xs hidden-sm hidden-md">Checkout</span></Link>
						</li>
					</ul>
                 
					<ul className="navbar-nav float-right" data-component-currency>
					
						<li className="nav-item dropdown float-right">
							<a className="nav-link dropdown-toggle text-muted" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="la la-dollar"></i>&ensp;USD</a>

							<div className="dropdown-menu" aria-labelledby="dropdown01">
								<a className="dropdown-item" href="/">Action</a>
								<a className="dropdown-item" href="/">Another action</a>
								<a className="dropdown-item" href="/">Something else here</a>
							</div>

						</li>

						<li className="nav-item dropdown float-right" data-component-language>
							<a className="nav-link dropdown-toggle text-muted" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="la la-flag"></i>&ensp;EN</a>

							<div className="dropdown-menu" aria-labelledby="dropdown01">
								<a className="dropdown-item" href="/">Action</a>
								<a className="dropdown-item" href="/">Another action</a>
								<a className="dropdown-item" href="/">Something else here</a>
							</div>
						</li>
					</ul>
				</div>
				
			</nav>
		</div>
	);
}

export default TopNav
