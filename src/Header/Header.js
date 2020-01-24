import React from 'react';
import { Adresse } from '../Adresse';
import { Horaire } from '../Horaire';
import { FOOTER } from '../custom';

const Header = () => {
	const { adresse } = FOOTER;
	return (
		<div className='container-fluid text-light bg-dark'>
			<div className='row d-flex justify-content-around'>
				<h4 className='align-self-center'>
					<span className='h3 badge badge-danger'>
						Toutes nos Pizzas à moitié prix le Mardi
						<br />
						Deux formules achetées , bouteille offerte
						<br />
						Dessert offert pour un plat acheté
					</span>
				</h4>
				<div>
					<Adresse className='list-group-item bg-transparent' {...adresse} />
				</div>
				<div>
					<Horaire />
				</div>
			</div>
		</div>
	);
};

export default Header;
