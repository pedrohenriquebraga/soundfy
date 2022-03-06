import React, { useMemo } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { IMusicData } from "../../../@types/interfaces";
import { usePlayer } from "../../../contexts/player";
import { secondsToTime } from "../../../utils/time";
import {
  MusicButton,
  MusicContentContainer,
  MusicCover,
  MusicDuration,
  MusicName,
} from "./styles";

interface IMusicCardProps {
  music: IMusicData;
}

const MusicCard: React.FC<IMusicCardProps> = ({ music }) => {
  const { colors } = useTheme();
  const { handleSelectMusic, allMusics, currentMusic } = usePlayer();

  const currentMusicPath = useMemo(() => {
    if (allMusics && currentMusic) {
      return allMusics[currentMusic.index].path;
    }
  }, [allMusics, currentMusic]);

  return (
    <MusicButton
      onPress={() => handleSelectMusic(music.index)}
      key={music.index}
    >
      <MaterialIcons name="music-note" size={70} color={colors.secondary} />
      <MusicContentContainer>
        <MusicName isPlaying={music.path === currentMusicPath}>
          {music.name}
        </MusicName>
        <MusicDuration>{secondsToTime(music.duration)}</MusicDuration>
      </MusicContentContainer>
    </MusicButton>
  );
};

export default MusicCard;
