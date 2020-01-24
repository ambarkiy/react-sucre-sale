import React from 'react';
import { render } from '@testing-library/react';
import { Accueil } from '../Accueil';

test('ACCUEIL text should to be', () => {
	const { getByText } = render(<Accueil />);
	expect(getByText(/BIENVENUE/)).toBeInTheDocument();
});
