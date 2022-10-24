import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';

import {COLORS, SIZES, FONTS} from '../constants';

const CurrencyLabel = ({
  icon,
  currency,
  code,
}: {
  icon: ImageSourcePropType | undefined;
  currency: string | undefined;
  code: string | undefined;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          width: 25,
          height: 25,
          marginTop: 5,
        }}
      />
      <View style={{marginLeft: SIZES.base}}>
        <Text style={{...FONTS.h3}}>{currency}</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;
