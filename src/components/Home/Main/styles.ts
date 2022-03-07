import styled from 'styled-components/native';
import fonts from '../../../styles/fonts';

export const SectionsContainer = styled.View``;

export const SectionContainer = styled.View`
  margin-bottom: 25px;
`;

export const SectionTitle = styled.Text`
  font-family: ${fonts.heading};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.background};
`;
