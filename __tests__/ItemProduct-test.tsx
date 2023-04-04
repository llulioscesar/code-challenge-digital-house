import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ItemProduct} from '@components/molecules';

it('renders correctly', () => {
  renderer.create(
    <ItemProduct
      date="2023-04-04T19:22:33.123Z"
      image="https://picsum.photos/200"
      isRedeemed={false}
      name="Chocolate"
      points={50}
    />,
  );
});
