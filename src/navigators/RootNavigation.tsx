import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AllPoints, FilterPoints, ProductDetail} from '@screens';
import {FilterDate} from '@store/slices';
import {Product} from '@store/slices/points/dto';

export type RootStackParamList = {
  AllPoints: undefined;
  FilterPoints: {
    isRedeemed: boolean;
    dateFilter: FilterDate;
  };
  ProductDetail: {
    product: Product;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="AllPoints">
          <Stack.Screen name="AllPoints" component={AllPoints} />
          <Stack.Screen name="FilterPoints" component={FilterPoints} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
