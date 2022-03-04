import React, { useMemo } from "react";
import {
  Container,
  HeaderAnimation,
  HeaderAnimationContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleContainer,
  MusicButton,
  MusicContentContainer,
  MusicDuration,
  MusicName,
  MusicsContainer,
  SectionContainer,
  SectionsContainer,
  SectionTitle,
} from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { useTheme } from "styled-components";
import MiniPlayer from "../../components/MiniPlayer";
import { usePlayer } from "../../contexts/player";
import { secondsToTime } from "../../utils/time";
import { HeaderButton } from "../../components/Header/styles";

const Home: React.FC = () => {
  const {
    allMusics,
    currentMusic,
    recentListenMusics,
    handleSelectMusic,
    getMoreMusics,
  } = usePlayer();
  const currentMusicPath = useMemo(() => {
    if (allMusics && currentMusic) {
      return allMusics[currentMusic.index].path;
    }
  }, [allMusics, currentMusic]);
  const { colors } = useTheme();

  return (
    <>
      <Header>
        <HeaderButton>
          <Feather name="star" size={26} color={colors.black} />
        </HeaderButton>
      </Header>
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: currentMusic ? 100 : 0,
        }}
        onScrollEndDrag={getMoreMusics}
      >
        <HeaderContainer>
          <HeaderTitleContainer>
            <HeaderTitle>
              Olá,
              {"\n"}O que vamos ouvir?
            </HeaderTitle>
          </HeaderTitleContainer>
          <HeaderAnimationContainer>
            <HeaderAnimation
              source={require("../../assets/astronaut-music.json")}
              autoPlay
              loop
            />
          </HeaderAnimationContainer>
        </HeaderContainer>
        <SectionsContainer>
          <SectionContainer>
            <SectionTitle>
              <Feather name="clock" size={18} /> Tocadas recentemente
            </SectionTitle>
            <MusicsContainer>
              {recentListenMusics.map((rlm, index) => {
                return (
                  <MusicButton
                    onPress={() => handleSelectMusic(rlm.index)}
                    key={index}
                  >
                    <MaterialIcons
                      name="music-note"
                      size={70}
                      color={colors.secondary}
                    />
                    <MusicContentContainer>
                      <MusicName isPlaying={rlm.path === currentMusicPath}>
                        {rlm.name}
                      </MusicName>
                      <MusicDuration>
                        {secondsToTime(rlm.duration)}
                      </MusicDuration>
                    </MusicContentContainer>
                  </MusicButton>
                );
              })}
            </MusicsContainer>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>
              <Feather name="list" size={18} /> Todas as músicas
            </SectionTitle>
            <MusicsContainer>
              {allMusics.map((music, index) => {
                return (
                  <MusicButton
                    key={index}
                    onPress={() => handleSelectMusic(music.index)}
                  >
                    <MaterialIcons
                      name="music-note"
                      size={70}
                      color={colors.secondary}
                    />
                    <MusicContentContainer>
                      <MusicName isPlaying={music.path === currentMusicPath}>
                        {music.name}
                      </MusicName>
                      <MusicDuration>
                        {secondsToTime(music.duration)}
                      </MusicDuration>
                    </MusicContentContainer>
                  </MusicButton>
                );
              })}
            </MusicsContainer>
          </SectionContainer>
        </SectionsContainer>
      </Container>
      <MiniPlayer />
    </>
  );
};

export default Home;
