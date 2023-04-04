import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {Points} from '@components/organism';

describe('Points', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Points ammount={100} month="Enero" />);
    expect(getByText('100 pts')).toBeTruthy();
  });
});
