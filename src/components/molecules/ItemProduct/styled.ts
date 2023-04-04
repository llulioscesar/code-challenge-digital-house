import {StyleSheet} from 'react-native';
import {styledText} from '@styles';

export const styledItemProduct = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 55,
    marginBottom: 8,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 16,
  },
  contentInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productName: {
    ...styledText.common,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
  },
  productDate: {
    ...styledText.common,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 7,
  },
  productPoints: {
    flexDirection: 'row',
  },
  productPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPoint: {
    ...styledText.common,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
  },
  productPointPositive: {
    color: '#00B833',
  },
  productPointNegative: {
    color: '#FF0000',
  },
  productPointArrow: {
    width: 10,
    height: 10,
    marginLeft: 23,
  },
});
