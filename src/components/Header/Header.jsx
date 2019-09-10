import React from 'react';
import {
	Navbar,
	Nav
} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Link to="/" className="navbar-brand">Weather App</Link>
			<Nav className="ml-auto">
				<Link to="/settings" className="nav-link">Settings</Link>
			</Nav>
		</Navbar>
	);
};
