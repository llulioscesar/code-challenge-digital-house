import React, {FC} from 'react';
import {Button as Btn} from '@ant-design/react-native';
import {ButtonProps} from '@ant-design/react-native/es/button';

type Props = ButtonProps;

export const Button: FC<Props> = props => {
  const {type = 'primary', ...rest} = props;
  return <Btn type={type} {...rest} />;
};
