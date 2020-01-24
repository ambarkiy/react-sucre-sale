import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Copyright } from '../Copyright';
import { Link } from 'react-router-dom';

const Footer = ({ navLinks, admLinks, adresse, socialLinks, copyright }) => {
	const navLinksElement = navLinks.map((navLink) => (
		<Link key={navLink.id} to={navLink.href} className='list-group-item'>
			{navLink.text}
		</Link>
	));

	const admLinksElement = admLinks.map((navLink) => (
		<Link key={navLink.id} to={navLink.href} className='list-group-item'>
			{navLink.text}
		</Link>
	));

	const socialLinksElement = socialLinks.map((socialLink) => (
		<FontAwesomeIcon key={socialLink.name} icon={socialLink.icon} size='2x' />
	));
	return (
		<footer className='mt-3 py-3 bg-dark text-light'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-lg-4 list-group list-group-flush'>{navLinksElement}</div>
					<div className='col-12 col-lg-4 list-group list-group-flush'>{admLinksElement}</div>

					<div className='col-12 col-lg-4 list-group list-group-flush'>
						<span className='list-group-item'>Nous Contacter</span>

						<div className='list-group-item text-muted'>{socialLinksElement}</div>
					</div>
				</div>
			</div>
			<hr />
			<Copyright {...copyright} />
		</footer>
	);
};

export default Footer;
