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

const Home: React.FC = () => {
  const { colors } = useTheme();

  return (
    <>
      <Header />
      <Container>
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
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://img.gta5-mods.com/q75/images/xxxtentacion-changes-loading-music/271594-257881bff3f942bd4e14468a79ad06c2.jpg",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>XXXTENTACION - Going Down!</MusicName>
                  <MusicDuration>01:56</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://img.gta5-mods.com/q75/images/xxxtentacion-changes-loading-music/271594-257881bff3f942bd4e14468a79ad06c2.jpg",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>XXXTENTACION - Going Down!</MusicName>
                  <MusicDuration>01:56</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://img.gta5-mods.com/q75/images/xxxtentacion-changes-loading-music/271594-257881bff3f942bd4e14468a79ad06c2.jpg",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>XXXTENTACION - Going Down!</MusicName>
                  <MusicDuration>01:56</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://img.gta5-mods.com/q75/images/xxxtentacion-changes-loading-music/271594-257881bff3f942bd4e14468a79ad06c2.jpg",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>XXXTENTACION - Going Down!</MusicName>
                  <MusicDuration>01:56</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
              <MusicButton>
                <MusicCover
                  source={{
                    uri: "https://img.gta5-mods.com/q75/images/xxxtentacion-changes-loading-music/271594-257881bff3f942bd4e14468a79ad06c2.jpg",
                  }}
                />
                <MusicContentContainer>
                  <MusicName>XXXTENTACION - Going Down!</MusicName>
                  <MusicDuration>01:56</MusicDuration>
                </MusicContentContainer>
              </MusicButton>
            </MusicsContainer>
          </SectionContainer>
        </SectionsContainer>
      </Container>
      <MiniPlayer />
    </>
  );
};

export default Home;
