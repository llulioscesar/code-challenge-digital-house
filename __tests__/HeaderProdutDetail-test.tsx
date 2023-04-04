import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {HeaderProductDetail} from '@components/molecules';

it('renders correctly', () => {
  renderer.create(<HeaderProductDetail title="Chocolate" />);
});
