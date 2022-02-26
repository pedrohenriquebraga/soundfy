import AnimatedLottieView from "lottie-react-native";
import styled from "styled-components/native";
import fonts from "../../styles/fonts";

export const Container = styled.ScrollView`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 12px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`;

export const HeaderTitleContainer = styled.View`
  justify-content: center;
`;

export const HeaderAnimationContainer = styled.View``;

export const HeaderAnimation = styled(AnimatedLottieView)`
  height: 150px;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  font-family: ${fonts.hero};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionsContainer = styled.View``;

export const SectionContainer = styled.View`
  margin-bottom: 25px;
`;

export const SectionTitle = styled.Text`
  font-family: ${fonts.heading};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black};
`;

export const MusicsContainer = styled.View``;

export const MusicButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 8px;
  flex-direction: row;
  border-radius: 12px;
  elevation: 2;
  margin-top: 10px;
`;

export const MusicContentContainer = styled.View`
  width: 90%;
  justify-content: center;
  padding: 10px 15px 0px 5px;
`;

export const MusicCover = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin: auto 0;
`;

export const MusicName = styled.Text`
  font-family: ${fonts.name};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
`;

export const MusicDuration = styled.Text`
  font-family: ${fonts.text};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.heading};
`;
