import { render } from '@testing-library/react';
import React from 'react';
import { Sandwichs } from '.';

test('it should have text SANDWICHS', () => {
	const { getByText } = render(<Sandwichs />);
	expect(getByText(/SANDWICHS/)).toBeInTheDocument();
});
