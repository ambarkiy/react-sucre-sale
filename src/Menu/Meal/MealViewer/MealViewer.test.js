import React from 'react';
import { render } from '@testing-library/react';
import { MealViewer } from '../MealViewer';

test('meal viewer should to be render', () => {
	const { getByText } = render(<MealViewer />);
	expect(getByText(/MEAL VIEWER/)).toBeInTheDocument();
});
