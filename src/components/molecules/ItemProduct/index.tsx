import React, {FC} from 'react';
import {Image, Text} from 'react-native';
import {View} from '@ant-design/react-native';
import {styledItemProduct} from '@components/molecules/ItemProduct/styled';
import {day, formatterCurrency} from '@util';

type Props = {
  image: string;
  name: string;
  date: string;
  points: number;
  isRedeemed: boolean;
};

export const ItemProduct: FC<Props> = props => {
  const {image, name, date, points, isRedeemed} = props;
  return (
    <>
      <View style={styledItemProduct.container}>
        <Image
          style={styledItemProduct.image}
          loadingIndicatorSource={require('@assets/images/Placeholder_view_vector 1.png')}
          source={{uri: image, cache: 'force-cache'}}
        />
        <View style={styledItemProduct.contentInfo}>
          <Text style={styledItemProduct.productName}>{name}</Text>
          <Text style={styledItemProduct.productDate}>
            {day.utc(date).format('DD [de] MMMM[,] YYYY')}
          </Text>
        </View>
        <View style={styledItemProduct.productPointContainer}>
          <View style={styledItemProduct.productPoints}>
            <Text
              style={[
                styledItemProduct.productPoint,
                isRedeemed
                  ? styledItemProduct.productPointNegative
                  : styledItemProduct.productPointPositive,
              ]}>
              {`${isRedeemed ? '-' : '+'}`}
            </Text>
            <Text style={styledItemProduct.productPoint}>
              {`${formatterCurrency(points).replace('$', '')}`}
            </Text>
          </View>
          <Image
            source={require('@assets/images/Subtract.png')}
            style={styledItemProduct.productPointArrow}
          />
        </View>
      </View>
    </>
  );
};
