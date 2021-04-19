import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  content: string,
}

const Button: React.FC<ButtonProps> = ({ content } : ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.7}
    >
      <Text>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
})

export { Button };
