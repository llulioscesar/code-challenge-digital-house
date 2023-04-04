import {StyleSheet} from 'react-native';
import {styledText} from '@styles';
export const sytledHeaderPoints = StyleSheet.create({
  greeting: {
    ...styledText.common,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 27,
  },
  name: {
    ...styledText.common,
    fontSize: 14,
  },
});
