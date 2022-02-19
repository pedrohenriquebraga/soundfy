import React from "react";
import { useTheme } from "styled-components";
import {
  MiniPlayerActionButton,
  MiniPlayerActionContainer,
  MiniPlayerContainer,
  MiniPlayerContentContainer,
  MiniPlayerCover,
  MiniPlayerCoverContainer,
  MiniPlayerLeftSide,
  MiniPlayerMusicName,
  MiniPlayerTitle,
} from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

const MiniPlayer: React.FC = () => {

  const { colors } = useTheme()
  const navigation = useNavigation()

  const handleGoMusicPlayer = async () => {
    navigation.navigate("MusicPlayer")
  }

  return (
    <MiniPlayerContainer activeOpacity={0.7} onPress={handleGoMusicPlayer}>
      <MiniPlayerLeftSide>
        <MiniPlayerCoverContainer>
          <MiniPlayerCover
            source={{
              uri: "https://conteudo.imguol.com.br/c/entretenimento/5a/2018/11/19/rapper-tekashi-6ix9ine-e-preso-por-extorsao-diz-site-1542652676776_v2_900x506.jpg.webp",
            }}
          />
        </MiniPlayerCoverContainer>
        <MiniPlayerContentContainer>
          <MiniPlayerTitle>
            <Feather name="music" size={10} color={colors.primary} /> Tocando
            agora...
          </MiniPlayerTitle>
          <MiniPlayerMusicName>6ix9ine - BUBA!</MiniPlayerMusicName>
        </MiniPlayerContentContainer>
      </MiniPlayerLeftSide>

      <MiniPlayerActionContainer>
        <MiniPlayerActionButton>
          <MaterialIcons name="skip-previous" size={30} color={colors.black} />
        </MiniPlayerActionButton>
        <MiniPlayerActionButton>
          <MaterialIcons name="play-arrow" size={30} color={colors.black} />
        </MiniPlayerActionButton>
        <MiniPlayerActionButton>
          <MaterialIcons name="skip-next" size={30} color={colors.black} />
        </MiniPlayerActionButton>
      </MiniPlayerActionContainer>
    </MiniPlayerContainer>
  );
};

export default MiniPlayer;
