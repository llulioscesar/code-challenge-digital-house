import React, {FC, useState} from 'react';
import {BasePoints} from '@components/templates';
import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Button} from '@components/atoms';
import {styledAllPoints} from './styled';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {RootStackParamList} from '@navigator/RootNavigation';
import {FilterDate} from '@store/slices';

type Props = NativeStackScreenProps<RootStackParamList, 'AllPoints'>;

export const AllPoints: FC<Props> = props => {
  const {navigation} = props;

  const [filterDate, setFilterDate] = useState<FilterDate | undefined>();

  const handleNavigation = (isRedeemed: boolean, dateFilter?: FilterDate) => {
    if (dateFilter) {
      navigation.push('FilterPoints', {isRedeemed, dateFilter});
    }
  };

  const handleChangeFilterDate = (date: FilterDate) => {
    setFilterDate(date);
  };

  return (
    <BasePoints showAll={true} onChangeDateFilter={handleChangeFilterDate}>
      <WingBlank style={styledAllPoints.actions} size="lg">
        <Button
          onPress={() => handleNavigation(false, filterDate)}
          style={styledAllPoints.button}>
          Ganados
        </Button>
        <WhiteSpace />
        <Button
          onPress={() => handleNavigation(true, filterDate)}
          style={styledAllPoints.button}>
          Canjeados
        </Button>
      </WingBlank>
    </BasePoints>
  );
};
