import {StyleSheet} from 'react-native';
import {Theme} from '@ant-design/react-native/lib/style';
import {styledText} from '@styles';
export const styledCardPoints = (theme: Theme) => {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.brand_primary,
      borderRadius: 20,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 24,
      height: 143,
      marginHorizontal: 36,
      marginVertical: 20,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textMonth: {
      ...styledText.common,
      position: 'absolute',
      left: 19,
      top: 21,
      fontWeight: '800',
      lineHeight: 22,
      fontSize: 16,
      fontStyle: 'normal',
      color: theme.color_text_base_inverse,
    },
    textPoints: {
      ...styledText.common,
      fontWeight: '800',
      fontSize: 32,
      lineHeight: 44,
      color: theme.color_text_base_inverse,
      textAlign: 'center',
    },
  });
};
