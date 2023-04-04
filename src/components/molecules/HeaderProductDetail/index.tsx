import React, {FC} from 'react';
import {Text} from 'react-native';
import {View} from '@ant-design/react-native';
import {styledHeaderProductDetail} from '@components/molecules/HeaderProductDetail/styled';

type Props = {
  title: string;
};

export const HeaderProductDetail: FC<Props> = props => {
  const {title} = props;
  return (
    <View style={styledHeaderProductDetail.container}>
      <Text style={styledHeaderProductDetail.title}>{title}</Text>
    </View>
  );
};
