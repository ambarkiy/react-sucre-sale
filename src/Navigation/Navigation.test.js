import React from 'react';
import { Navigation } from '../Navigation';
import { render } from '@testing-library/react';

jest.mock('./NavBrand/NavBrand', () => () => <mock-brand />);

test('it should render a navigation  with a brand text', () => {});
