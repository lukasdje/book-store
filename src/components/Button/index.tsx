import React from 'react';

import {
    Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
  
} from 'react-native';

import { styles } from './style';

type Props = TouchableOpacityProps & {
    title: string,
    color: ColorValue,
    backgroundColor: ColorValue,
    borderWidth?: Number,
}

export default function Button({ title, color, backgroundColor, borderWidth, ...rest }: Props){
  return (
    <TouchableOpacity 
    style={[styles.button, { backgroundColor }]}
    {...rest}

    >
        <Text style={[styles.text, { color }]}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}