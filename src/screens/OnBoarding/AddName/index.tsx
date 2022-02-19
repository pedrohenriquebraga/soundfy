import React, { useState } from 'react';
import Button from '../../../components/Button';
import Storage from "@react-native-async-storage/async-storage"
import { useTheme } from 'styled-components';
import { AddNameContainer, Container, NameInput, NameInputContainer, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const AddName: React.FC = () => {

  const [name, setName] = useState("")
  const { colors } = useTheme()
  const navigation = useNavigation()

  const handleSubmit = async () => {
    await Storage.setItem("@SoundfyPlayer:name", name)
    navigation.navigate("Permissions")
  }

  return (
    <Container>
      <AddNameContainer>
        <Title>Como devo te chamar?</Title>
        <NameInputContainer>
          <NameInput 
            keyboardType='name-phone-pad'
            onChangeText={setName}
            selectionColor={colors.secondary}
          />
        </NameInputContainer>
      </AddNameContainer>
      <Button content='Continuar' enabled={!!name} onPress={handleSubmit} />
    </Container>
  );
}

export default AddName;