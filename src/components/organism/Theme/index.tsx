import React, {FC, PropsWithChildren} from 'react';
import {Provider} from '@ant-design/react-native';
import {Theme} from '@ant-design/react-native/lib/style';
import '@assets/fonts/Avenir.otf';

type Props = PropsWithChildren & {};

export const customTheme: Partial<Theme> = {
  brand_primary: '#334FFA',
  primary_button_fill: '#334FFA',
  button_height: 50,
  button_border_radius: 10,
  button_font_size: 16,

  font_family: 'Avenir',
  fill_body: '#F8F8F8',
};

export const ThemeProvider: FC<Props> = props => {
  const {children} = props;
  return (
    <>
      <Provider theme={customTheme}>{children}</Provider>
    </>
  );
};
