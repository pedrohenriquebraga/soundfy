import React from "react";
import Header from "../../components/Header";
import {
  Container,
  MusicControllerButton,
  MusicControllers,
  MusicControllersContainer,
  MusicCover,
  MusicCoverContainer,
  MusicDuration,
  MusicDurationContainer,
  MusicExtraControllerButton,
  MusicExtraControllersContainer,
  MusicInfosContainer,
  MusicName,
  MusicSeek,
  MusicSeekContainer,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const MusicPlayer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <>
      <Header title="Tocando agora" showBack />
      <Container>
        <MusicInfosContainer>
          <MusicCoverContainer>
            <MusicCover
              source={{
                uri: "https://conteudo.imguol.com.br/c/entretenimento/5a/2018/11/19/rapper-tekashi-6ix9ine-e-preso-por-extorsao-diz-site-1542652676776_v2_900x506.jpg.webp",
              }}
            />
          </MusicCoverContainer>
          <MusicName>6ix9ine - BUBA!</MusicName>
        </MusicInfosContainer>
        <MusicControllersContainer>
          <MusicSeekContainer>
            <MusicSeek
              minimumValue={0}
              maximumValue={230000}
              value={36000}
              thumbTintColor={colors.secondary}
              minimumTrackTintColor={colors.secondary}
              maximumTrackTintColor={colors.light_shape}
            />
            <MusicDurationContainer>
              <MusicDuration>00:36</MusicDuration>
              <MusicDuration>02:30</MusicDuration>
            </MusicDurationContainer>
          </MusicSeekContainer>
          <MusicControllers>
            <MusicControllerButton>
              <MaterialIcons
                name="skip-previous"
                size={45}
                color={colors.black}
              />
            </MusicControllerButton>
            <MusicControllerButton>
              <MaterialIcons
                name="play-circle-fill"
                size={65}
                color={colors.primary}
              />
            </MusicControllerButton>
            <MusicControllerButton>
              <MaterialIcons name="skip-next" size={45} color={colors.black} />
            </MusicControllerButton>
          </MusicControllers>
        </MusicControllersContainer>
        <MusicExtraControllersContainer>
          <MusicExtraControllerButton>
            <MaterialIcons name="loop" size={25} color={colors.secondary} />
          </MusicExtraControllerButton>
          <MusicExtraControllerButton>
            <MaterialIcons name="volume-up" size={25} color={colors.black} />
          </MusicExtraControllerButton>
        </MusicExtraControllersContainer>
      </Container>
    </>
  );
};

export default MusicPlayer;
