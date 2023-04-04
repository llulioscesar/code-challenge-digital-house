import React, {FC, PropsWithChildren} from 'react';
import {View} from '@ant-design/react-native';
import {styledCallActionProductDetail} from '@components/molecules/CallActionProductDetail/styled';

type Props = PropsWithChildren & {};
export const CallActionProductDetail: FC<Props> = props => {
  const {children} = props;
  return (
    <View style={styledCallActionProductDetail.container}>{children}</View>
  );
};
