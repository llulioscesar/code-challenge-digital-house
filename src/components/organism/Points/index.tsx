import React, {FC} from 'react';
import {Text} from 'react-native';
import {CardPoints} from '@components/molecules';
import {styledPoints} from '@components/organism/Points/styled';

type Props = {
  ammount: number;
  month: string;
};

export const Points: FC<Props> = props => {
  const {ammount, month} = props;
  return (
    <>
      <Text style={styledPoints.textTitle}>TUS PUNTOS</Text>
      <CardPoints ammount={ammount} month={month} />
    </>
  );
};
