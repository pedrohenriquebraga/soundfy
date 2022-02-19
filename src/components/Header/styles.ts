import styled from 'styled-components/native';
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import fonts from '../../styles/fonts';

export const Container = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${getStatusBarHeight(true)}px;
  height: 60px;
  elevation: 3;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`

export const HeaderButton = styled.TouchableOpacity`
  position: absolute;
  margin: 0px 12px;
  left: 0;
`

