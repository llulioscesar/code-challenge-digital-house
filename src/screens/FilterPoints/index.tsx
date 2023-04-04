import React, {FC} from 'react';
import {BasePoints} from '@components/templates';
import {Button} from '@components/atoms';
import {RootStackParamList} from '@navigator/RootNavigation';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'FilterPoints'>;

export const FilterPoints: FC<Props> = props => {
  const {route, navigation} = props;

  const {params} = route;
  const {isRedeemed, dateFilter} = params;

  return (
    <BasePoints isRedeemed={isRedeemed} dateFilter={dateFilter}>
      <Button onPress={() => navigation.goBack()}>Todos</Button>
    </BasePoints>
  );
};
