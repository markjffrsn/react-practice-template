import '../scss/app.scss';

import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
					<div className="container">
						<a href="/" className="navbar-brand">
							Logo
						</a>

						<ul className="navbar-nav d-flex">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}
