import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {BasePoints} from '@components/templates';
import {Provider} from 'react-redux';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {productsApi} from '@store/services';
import {store} from '@store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import {JSDOM} from 'jsdom';

const {window} = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
});
global.window = window;
global.document = window.document;

describe('BasePoints', () => {
  it('renders correctly', async () => {
    const {getAllByText} = render(
      <NavigationContainer>
        <ApiProvider api={productsApi}>
          <Provider store={store}>
            <BasePoints showAll={true} />
          </Provider>
        </ApiProvider>
      </NavigationContainer>,
    );
    await waitFor(() => expect(getAllByText('+')).toBeTruthy());
  });
});

afterAll(() => {
  delete (global as any).window;
  delete (global as any).document;
});
