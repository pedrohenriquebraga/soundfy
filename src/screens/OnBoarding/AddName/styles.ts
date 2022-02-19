import styled from 'styled-components/native';
import fonts from '../../../styles/fonts';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const AddNameContainer = styled.View``

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 25px;
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 5px;
`

export const NameInputContainer = styled.View`
margin-bottom: 50px;
`

export const NameInput = styled.TextInput`
  text-align: center;
  font-family: ${fonts.text};
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  padding: 8px;
`
