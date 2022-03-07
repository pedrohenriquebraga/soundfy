import React from "react";
import Main from "../../components/Home/Main";
import Header from "../../components/Header";
import MiniPlayer from "../../components/MiniPlayer";
import PresentationHeader from "../../components/Home/PresentationHeader";
import { usePlayer } from "../../contexts/player";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { HeaderButton } from "../../components/Header/styles";
import { Container } from "./styles";

const Home: React.FC = () => {
  const { colors } = useTheme();
  const { currentMusic, getMoreMusics } = usePlayer();

  return (
    <>
      <Header>
        <HeaderButton>
          <Feather name="star" size={24} color={colors.black} />
        </HeaderButton>
        <HeaderButton>
          <Feather name="compass" size={24} color={colors.black} />
        </HeaderButton>
      </Header>
      <Container
        contentContainerStyle={{ paddingBottom: currentMusic ? 100 : 0 }}
      >
        <PresentationHeader />
        <Main />
      </Container>
      <MiniPlayer />
    </>
  );
};

export default Home;
