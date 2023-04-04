import React, {FC, PropsWithChildren} from 'react';
import {View} from '@ant-design/react-native';
import {styledCallActionsPoints} from '@components/molecules/CallActionsPoints/styled';

type Props = PropsWithChildren & {};

export const CallActionsPoints: FC<Props> = props => {
  const {children} = props;
  return (
    <View style={styledCallActionsPoints.container}>
      <View style={styledCallActionsPoints.content}>{children}</View>
    </View>
  );
};
