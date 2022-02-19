import React from "react";
import {
  Container,
  HeaderButton,
  HeaderContentContainer,
  HeaderTitle,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = "Soundfy", showBack }) => {

  const navigation = useNavigation()

  const handleGoBack = async () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  return (
    <Container>
      {
        showBack && (
          <HeaderButton onPress={handleGoBack}>
            <Feather name="arrow-left" size={26} color="#FFF" />
          </HeaderButton>
        )
      }
      <HeaderContentContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContentContainer>
    </Container>
  );
};

export default Header;
