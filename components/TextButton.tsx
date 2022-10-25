import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {COLORS, SIZES, FONTS} from '../constants';

interface PropsTextButton {
  label: string;
  customContainerStyle?: any;
  customLabelStyle?: any;
  onPress: () => void;
}

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}: PropsTextButton) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green,
        ...customContainerStyle,
      }}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...customLabelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
