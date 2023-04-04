import {StyleSheet} from 'react-native';
import {styledText} from '@styles';

export const styledHeaderProductDetail = StyleSheet.create({
  container: {
    backgroundColor: '#CFD6FF',
    height: 117,
  },
  title: {
    ...styledText.common,
    fontSize: 24,
    fontWeight: '800',
    marginHorizontal: 20,
    marginBottom: 24,
    marginTop: 64,
  },
});
