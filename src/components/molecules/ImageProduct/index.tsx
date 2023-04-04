import React, {FC} from 'react';
import {Card, View} from '@ant-design/react-native';
import {styledImageProduct} from '@components/molecules/ImageProduct/styled';
import {Image} from 'react-native';

type Props = {
  source: string;
};

export const ImageProduct: FC<Props> = props => {
  const {source} = props;

  return (
    <View style={styledImageProduct.layout}>
      <Card style={styledImageProduct.container}>
        <Image source={{uri: source}} style={styledImageProduct.image} />
      </Card>
    </View>
  );
};
