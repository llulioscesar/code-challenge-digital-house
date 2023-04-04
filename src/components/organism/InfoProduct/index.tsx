import React, {FC} from 'react';
import {View} from '@ant-design/react-native';
import {Text} from 'react-native';
import {day, formatterCurrency} from '@util';
import {styledInfoProduct} from '@components/organism/InfoProduct/styled';

type Props = {
  date: string;
  points: number;
};

export const InfoProduct: FC<Props> = props => {
  const {date, points} = props;
  return (
    <View style={styledInfoProduct.container}>
      <Text style={styledInfoProduct.titleSection}>Detalles del producto:</Text>
      <Text style={styledInfoProduct.textDate}>
        Comprado el {day.utc(date).format('DD [de] MMMM[,] YYYY')}
      </Text>
      <Text style={styledInfoProduct.titleSection}>
        Con esta compra acumulastes:
      </Text>
      <Text style={styledInfoProduct.textPoint}>
        {formatterCurrency(points).replace('$', '')} puntos
      </Text>
    </View>
  );
};
