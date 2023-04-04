import React, {FC} from 'react';
import {Card, View} from '@ant-design/react-native';
import {Text} from 'react-native';
import {styledCardPoints} from '@components/molecules/CardPoints/styled';
import {useTheme} from '@ant-design/react-native/lib/style';
import {formatterCurrency} from '@util';

type Props = {
  ammount: number;
  month: string;
};

export const CardPoints: FC<Props> = props => {
  const {ammount, month} = props;

  const theme = useTheme();
  const css = styledCardPoints(theme);

  return (
    <>
      <Card style={css.card}>
        <View style={css.container}>
          <Text style={css.textMonth}>{month}</Text>
          <Text style={css.textPoints}>
            {formatterCurrency(ammount).replace('$', '')} pts
          </Text>
        </View>
      </Card>
    </>
  );
};
