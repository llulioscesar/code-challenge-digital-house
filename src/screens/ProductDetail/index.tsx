import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StatusBar} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '@navigator/RootNavigation';
import {
  CallActionProductDetail,
  HeaderProductDetail,
  ImageProduct,
  InfoProduct,
} from '@components/molecules';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {styledProductDetail} from './styled';
import {Button} from '@components/atoms';

export type ProductDetailProps = NavigationProp<
  RootStackParamList,
  'ProductDetail'
>;

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export const ProductDetail: FC<Props> = props => {
  const {route, navigation} = props;
  const {params} = route;
  const {product} = params;
  const {name, image, createdAt, points} = product;
  return (
    <SafeAreaView style={styledProductDetail.container}>
      <ScrollView>
        <StatusBar backgroundColor="#CFD6FF" />
        <HeaderProductDetail title={name} />
        <ImageProduct source={image} />
        <InfoProduct date={createdAt} points={points} />
      </ScrollView>
      <CallActionProductDetail>
        <Button onPress={() => navigation.goBack()}>Aceptar</Button>
      </CallActionProductDetail>
    </SafeAreaView>
  );
};
