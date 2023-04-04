import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {Product} from '@store/slices/points/dto';
import {ItemProduct} from '@components/molecules';
import {View} from '@ant-design/react-native';
import {styledListProductsPoint} from '@components/organism/ListProductsPoint/styled';
import {useNavigation} from '@react-navigation/native';
import {ProductDetailProps} from '@screens';

type Props = {
  products: Product[];
};

export const ListProductsPoints: FC<Props> = props => {
  const {products = []} = props;

  const navigation = useNavigation<ProductDetailProps>();

  const handlePress = (product: Product) => {
    navigation.navigate('ProductDetail', {product});
  };

  return (
    <>
      <Text style={styledListProductsPoint.title}>TUS MOVIMIENTOS</Text>
      <View style={styledListProductsPoint.containerList}>
        {products && (
          <>
            {products.map((product, index) => {
              return (
                <Pressable onPress={() => handlePress(product)} key={index}>
                  <ItemProduct
                    image={product.image}
                    name={product.name}
                    date={product.createdAt}
                    points={product.points}
                    isRedeemed={product.isRedemption}
                  />
                </Pressable>
              );
            })}
          </>
        )}
      </View>
    </>
  );
};
