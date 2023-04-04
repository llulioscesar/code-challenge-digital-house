import React, {FC} from 'react';
import {Text} from 'react-native';
import {sytledHeaderPoints} from '@components/molecules/HeaderPoints/styled';

type Props = {
  name: string;
};

export const HeaderPoints: FC<Props> = ({name}) => {
  return (
    <>
      <Text style={sytledHeaderPoints.greeting}>Bienvenido de vuelta!</Text>
      <Text style={sytledHeaderPoints.name}>{name}</Text>
    </>
  );
};
