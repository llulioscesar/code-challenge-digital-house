import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {InfoProduct} from '@components/organism';

it('renders correctly', () => {
  renderer.create(<InfoProduct date="2023-04-04T19:22:33.123Z" points={50} />);
});
