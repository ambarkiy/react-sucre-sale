import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from '../NotFound';

test('NOT FOUND should to be', () => {
	const { getByText } = render(<NotFound />);
	expect(getByText(/NOT FOUND/)).toBeInTheDocument();
});
