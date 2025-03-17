import React from 'react';
import { Button } from '@ant-design/react-native';

const CustomButton = ({ title, onPress, type = 'primary' }) => {
  return <Button type={type} onPress={onPress}>{title}</Button>;
};

export default CustomButton;