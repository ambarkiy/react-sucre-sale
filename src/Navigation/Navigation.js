import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = ({ brand, navLinks }) => {
	const navLinksElement = navLinks.map((navLink) => (
		<Nav.Link key={navLink.id} as={NavLink} to={navLink.href} href={navLink.href}>
			{navLink.text}
		</Nav.Link>
	));
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
			<Navbar.Brand className='navbar-brand' as={NavLink} to='/' href='/'>
				{brand.text}
			</Navbar.Brand>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>{navLinksElement}</Nav>
			</Navbar.Collapse>
			<h3>
				<span className='badge badge-success'>03 44 53 05 17</span>
			</h3>
		</Navbar>
	);
};

export default Navigation;
