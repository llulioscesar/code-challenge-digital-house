import {StyleSheet} from 'react-native';
import {styledText} from '@styles';

export const styledPoints = StyleSheet.create({
  textTitle: {
    ...styledText.common,
    color: '#9B9898',
    fontWeight: '800',
    lineHeight: 19,
    fontSize: 14,
    fontStyle: 'normal',
    marginTop: 20,
  },
});
