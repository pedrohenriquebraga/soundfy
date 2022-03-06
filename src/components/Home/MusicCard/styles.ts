import styled from "styled-components/native";
import fonts from "../../../styles/fonts";

export const MusicButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 8px;
  flex-direction: row;
  border-radius: 12px;
  elevation: 2;
  margin-top: 10px;
`;

export const MusicContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px 15px 0px 5px;
`;

export const MusicCover = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin: auto 5px;
`;

export const MusicName = styled.Text<{ isPlaying?: boolean }>`
  font-family: ${fonts.name};
  font-size: 13px;
  color: ${({ theme, isPlaying }) =>
    isPlaying ? theme.colors.primary : theme.colors.black};
`;

export const MusicDuration = styled.Text`
  font-family: ${fonts.text};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.heading};
`;
