import {StyleSheet} from 'react-native';
import {styledText} from '@styles';

export const styledInfoProduct = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  titleSection: {
    ...styledText.common,
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
    marginBottom: 19,
  },
  textDate: {
    ...styledText.common,
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  textPoint: {
    ...styledText.common,
    lineHeight: 33,
    fontSize: 24,
    fontWeight: '800',
    marginTop: 12,
    marginBottom: 47,
  },
});
