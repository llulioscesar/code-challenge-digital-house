import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {BasePoints} from '@components/templates';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {productsApi} from '@store/services';

const middleware = [...getDefaultMiddleware(), productsApi.middleware];

const mockStore = configureStore({middleware});
const store = mockStore({
  // Define el estado inicial de tu store aquí
  points: {
    data: [],
    filter: {
      date: [],
    },
  },
  [productsApi.reducerPath]: productsApi.reducer(undefined, {type: ''}),
});

describe('BasePoints', () => {
  it('renders correctly', async () => {
    const {getByText} = render(
      <ApiProvider api={productsApi}>
        <Provider store={store}>
          <BasePoints showAll={true} />
        </Provider>
      </ApiProvider>,
    );
    expect(getByText('+')).toBeTruthy();
  });
});
