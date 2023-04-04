import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@store/rootReducer';
import {Product} from '@store/slices/points/dto';

export type FilterDate = {
  monthName: string;
  month: number;
  year: number;
};

type State = {
  data: Product[];
  filter: {
    date: FilterDate[];
  };
};

const initialState: State = {
  data: [],
  filter: {
    date: [],
  },
};

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setData: (state, {payload}: PayloadAction<Product[]>) => {
      state.data = payload;
    },
    setFilterDate: (state, {payload}: PayloadAction<FilterDate[]>) => {
      state.filter = {
        ...state.filter,
        date: payload,
      };
    },
  },
});

export const {setData, setFilterDate} = pointsSlice.actions;
export const pointsReducer = pointsSlice.reducer;

export const pointsSelector = (state: RootState) => state.points;
