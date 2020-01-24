import React from 'react';
import { render } from '@testing-library/react';
import { Tacos } from '../Tacos';

test('TACOS text should to be present', () => {
	const { getByText } = render(<Tacos />);
	expect(getByText(/TACOS/)).toBeInTheDocument();
});
