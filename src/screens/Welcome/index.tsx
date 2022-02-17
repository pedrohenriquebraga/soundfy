import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useThemeController } from '../../contexts/theme';
import { Container } from './styles';

const Welcome: React.FC = () => {

  const { toggleTheme } = useThemeController()

  return (
    <Container>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>oi</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Welcome;