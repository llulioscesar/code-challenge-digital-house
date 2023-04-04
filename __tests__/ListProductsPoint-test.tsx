import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ListProductsPoints} from '@components/organism';

describe('ListProductsPoints', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <ListProductsPoints
          products={[
            {
              createdAt: '2022-12-09T06:34:25.607Z',
              name: 'Handmade Metal Shoes',
              points: 16434,
              image: 'https://loremflickr.com/640/480/transport',
              isRedemption: false,
              id: '1',
            },
            {
              createdAt: '2022-12-09T17:02:51.904Z',
              name: 'Recycled Plastic Tuna',
              points: 92984,
              image: 'https://loremflickr.com/640/480/technics',
              isRedemption: false,
              id: '2',
            },
          ]}
        />
        ,
      </NavigationContainer>,
    );
    expect(getByText('Handmade Metal Shoes')).toBeTruthy();
  });
});
