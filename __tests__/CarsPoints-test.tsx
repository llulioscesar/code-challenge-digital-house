import 'react-native';
import React from 'react';
import {CardPoints} from '@components/molecules';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<CardPoints ammount={100} month="Diciembre" />);
});
