import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TIMEOUT, URL_API} from '@config';
import {GetProductsResponse} from '@store/services/products/dto';
import {Product} from '@store/slices/points/dto';
import {FilterDate, setData, setFilterDate} from '@store/slices/points';
import {day} from '@util';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
    timeout: TIMEOUT,
  }),
  keepUnusedDataFor: process.env.NODE_ENV !== 'test' ? 60 : 0,
  endpoints: builder => ({
    get: builder.query<GetProductsResponse, void>({
      query: () => '/api/v1/products',
      onQueryStarted: (arg, {dispatch, queryFulfilled}) => {
        queryFulfilled.then(response => {
          const {data} = response;

          const results: Product[] = [];
          let filterDate: FilterDate[] = [];

          data.forEach(item => {
            const date = day.utc(item.createdAt);
            if (date) {
              const filter: FilterDate = {
                monthName: date.format('MMMM').toUpperCase(),
                month: date.month(),
                year: date.year(),
              };

              const isFilter = filterDate.find(
                element =>
                  filter.month === element.month &&
                  filter.year === element.year,
              );
              if (!isFilter) {
                filterDate.push(filter);
              }
            }

            results.push({
              id: item.id,
              name: item.product,
              points: item.points,
              image: item.image,
              isRedemption: item.is_redemption,
              createdAt: item.createdAt,
            });
          });

          if (filterDate.length > 1) {
            filterDate = filterDate.sort((a, b) => {
              if (b.year === a.year) {
                return b.month - a.month;
              }
              return b.year - a.year;
            });
            dispatch(setFilterDate(filterDate));
          }

          dispatch(setData(results));
        });
      },
    }),
  }),
});

export const {useGetQuery, useLazyGetQuery} = productsApi;
