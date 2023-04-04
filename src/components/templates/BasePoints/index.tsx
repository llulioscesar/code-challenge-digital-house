import React, {
  FC,
  useEffect,
  useState,
  PropsWithChildren,
  Fragment,
} from 'react';
import {CallActionsPoints, HeaderPoints} from '@components/molecules';
import {Points, SkeletonPoints, ListProductsPoints} from '@components/organism';
import {styledBasePoints} from '@components/templates/BasePoints/styled';
import {Pressable, SafeAreaView, ScrollView} from 'react-native';
import {useGetQuery} from '@store/services';
import {useAppSelector} from '@store/configureStore';
import {FilterDate, pointsSelector} from '@store/slices';
import {Product} from '@store/slices/points/dto';
import {ActionSheet, View} from '@ant-design/react-native';
import {day} from '@util';

type Props = PropsWithChildren & {
  isRedeemed?: boolean;
  showAll?: boolean;
  dateFilter?: FilterDate;
  onChangeDateFilter?: (date: FilterDate) => void;
};

export const BasePoints: FC<Props> = props => {
  const {children, showAll, isRedeemed, dateFilter, onChangeDateFilter} = props;

  const {filter, data} = useAppSelector(pointsSelector);

  const {isLoading, isSuccess} = useGetQuery();

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [filterForDate, setFilterForDate] = useState<FilterDate | undefined>();

  useEffect(() => {
    if (filter.date.length > 0) {
      let filterDate = filterForDate || dateFilter || filter.date[0];

      let total = 0;

      setFilterForDate(filterDate);
      if (onChangeDateFilter) {
        onChangeDateFilter(filterDate);
      }

      const filterData: Product[] = [];
      data.forEach(product => {
        const date = day.utc(product.createdAt);
        if (
          date.month() === filterDate.month &&
          date.year() === filterDate.year
        ) {
          if (showAll) {
            filterData.push(product);
          } else if (isRedeemed && product.isRedemption) {
            filterData.push(product);
          } else if (
            isRedeemed !== undefined &&
            !isRedeemed &&
            !product.isRedemption
          ) {
            filterData.push(product);
          }

          if (!product.isRedemption) {
            total += product.points;
          }
        }
      });
      setProducts(filterData);
      setTotalPoints(total);
    }
  }, [
    data,
    dateFilter,
    filter.date,
    filterForDate,
    isRedeemed,
    isSuccess,
    onChangeDateFilter,
    showAll,
  ]);

  const handleShowFilterDate = () => {
    const BUTTONS = [
      ...filter.date.map(({monthName, year}) => `${monthName} - ${year}`),
      'Cancelar',
    ];
    const CANCEL_INDEX = BUTTONS.length - 1;

    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
      },
      buttonIndex => {
        if (buttonIndex !== CANCEL_INDEX) {
          setFilterForDate(filter.date[buttonIndex]);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styledBasePoints.container}>
      {isLoading || !filterForDate ? (
        <SkeletonPoints />
      ) : (
        <Fragment>
          <ScrollView>
            <View style={styledBasePoints.content}>
              <HeaderPoints name="Ruben Rodríguez" />
              <Pressable onPress={handleShowFilterDate}>
                <Points ammount={totalPoints} month={filterForDate.monthName} />
              </Pressable>
              <ListProductsPoints products={products} />
            </View>
          </ScrollView>
          <CallActionsPoints>{children}</CallActionsPoints>
        </Fragment>
      )}
    </SafeAreaView>
  );
};
