import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import {
  Animation,
  AnimationContainer,
  Container,
  ContentContainer,
  Description,
  GrantPermissionsButton,
  GrantPermissionsButtonText,
  Title,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { usePersistedState } from "../../../hooks/usePersistedState";
import { useNavigation } from "@react-navigation/native";

const Permissions: React.FC = () => {
  const [grantedFiles, setGrantedFiles] = useState(false);
  const [onBoarded, setOnBoarded] = usePersistedState(
    "@SoundfyPlayer:onBoarded",
    false
  );
  const navigation = useNavigation()

  const handleGo = async () => {
    setOnBoarded(true);
    navigation.navigate("Home");
  };

  return (
    <Container>
      <AnimationContainer>
        <Animation
          source={require("../../../assets/permission.json")}
          loop={false}
          autoPlay
        />
      </AnimationContainer>
      <ContentContainer>
        <Title>Preciso de algumas permissões</Title>
        <Description>
          Algumas permissões devem ser dadas ao app para que seja possível ter
          acesso as músicas armazenadas no aparelho. Não usaremos essas
          permissões para outros propósitos!
        </Description>
        <GrantPermissionsButton>
          <GrantPermissionsButtonText>
            <Feather name="alert-circle" size={16} /> Aceite as permissões
          </GrantPermissionsButtonText>
        </GrantPermissionsButton>
      </ContentContainer>
      <Button content="Yeah! Tudo pronto para começarmos" onPress={handleGo} />
    </Container>
  );
};

export default Permissions;
