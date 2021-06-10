import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.Text`
  text-align: center;
  color: #ff0000;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SucessMessage = styled.Text`
  text-align: center;
  color: #00b94a;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 9px;
`;

export const LinkText = styled.Text`
  color: #fff;
  margin-bottom: 10px;
`;
