import React from "react";
import {
  Container,
  HeaderAnimation,
  HeaderAnimationContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleContainer,
  MusicButton,
  MusicContentContainer,
  MusicCover,
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

const Home: React.FC = () => {
  const { allMusics, currentMusic, handleSelectMusic } = usePlayer();
  const { colors } = useTheme();

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
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
              <Feather name="clock" size={23} /> Tocadas recentemente
            </SectionTitle>
            <MusicsContainer>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://lab.fm/wp-content/uploads/2020/02/021920-Lil-Pump-Warner-Records-Nabil-Elderkin.png",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>Lil Pump - Boss</MusicName>
                  <MusicDuration>02:17</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://lab.fm/wp-content/uploads/2020/02/021920-Lil-Pump-Warner-Records-Nabil-Elderkin.png",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>Lil Pump - Boss</MusicName>
                  <MusicDuration>02:17</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://lab.fm/wp-content/uploads/2020/02/021920-Lil-Pump-Warner-Records-Nabil-Elderkin.png",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>Lil Pump - Boss</MusicName>
                  <MusicDuration>02:17</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
            </MusicsContainer>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>
              <Feather name="list" size={23} /> Todas as músicas
            </SectionTitle>
            <MusicsContainer>
              {allMusics.map((music, index) => {
                return (
                  <MusicButton
                    key={index}
                    onPress={() => handleSelectMusic(music.index)}
                  >
                    <MaterialIcons name="music-note" size={70} color={colors.secondary} />
                    <MusicContentContainer>
                      <MusicName isPlaying={music.path === currentMusic?.path}>
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
