import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ImageProduct} from '@components/molecules';

it('renders correctly', () => {
  renderer.create(<ImageProduct source="https://picsum.photos/200" />);
});
