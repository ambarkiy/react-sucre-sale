import React from 'react';

const Adresse = ({ raisonSociale, voieEtNumero, cpCommune, tel }) => {
	return (
		<address>
			<span>{raisonSociale}</span>
			<br />
			<small>
				{voieEtNumero}
				<br />
				{cpCommune}
				<br />
				{`tel : ${tel}`}
			</small>
		</address>
	);
};

export default Adresse;
