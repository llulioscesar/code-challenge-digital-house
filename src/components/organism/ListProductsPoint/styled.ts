import {StyleSheet} from 'react-native';
import {styledText} from '@styles';

export const styledListProductsPoint = StyleSheet.create({
  container: {},
  title: {
    ...styledText.common,
    color: '#9B9898',
    textTransform: 'uppercase',
    lineHeight: 19,
    fontSize: 14,
    fontWeight: '800',
    fontStyle: 'normal',
    marginBottom: 20,
  },
  containerList: {
    paddingVertical: 23,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 133,
  },
});
