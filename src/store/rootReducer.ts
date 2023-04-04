import {combineReducers} from '@reduxjs/toolkit';
import {pointsReducer} from '@store/slices';
import {productsApi} from '@store/services';

export const rootReducer = combineReducers({
  points: pointsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
