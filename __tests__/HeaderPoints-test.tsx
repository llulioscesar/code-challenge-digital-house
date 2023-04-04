import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {HeaderPoints} from '@components/molecules';

it('renders correctly', () => {
  renderer.create(<HeaderPoints name="Julio Caicedo" />);
});
