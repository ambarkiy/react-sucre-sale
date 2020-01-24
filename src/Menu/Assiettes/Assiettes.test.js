import React from 'react';
import { render } from '@testing-library/react';
import { Assiettes } from '../Assiettes';

test('ASSIETTES text should to be display', () => {
	const { getByText } = render(<Assiettes />);
	expect(getByText(/ASSIETTES/)).toBeInTheDocument();
});
