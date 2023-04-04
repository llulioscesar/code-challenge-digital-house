import {StyleSheet} from 'react-native';

export const styledImageProduct = StyleSheet.create({
  layout: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  container: {
    height: 350,
    width: '100%',
    borderRadius: 10,
  },
  image: {
    height: 200,
    marginHorizontal: 76,
    marginVertical: 76,
    resizeMode: 'cover',
  },
});
