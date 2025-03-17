import React from 'react';
import { Card, Text } from '@ant-design/react-native';
import CustomButton from '../atoms/Button';

const CardItem = ({ title, content, onButtonPress }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Header title={title} />
      <Card.Body>
        <Text>{content}</Text>
      </Card.Body>
      <Card.Footer content={<CustomButton title="Click Me" onPress={onButtonPress} />} />
    </Card>
  );
};

export default CardItem;