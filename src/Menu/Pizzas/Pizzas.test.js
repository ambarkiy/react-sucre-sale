import { render } from '@testing-library/react';
import React from 'react';
import { Pizzas } from '.';

test('PIZZAS should to be in the document', () => {
	const { getByText } = render(<Pizzas />);
	expect(getByText(/PIZZAS/)).toBeInTheDocument();
});
