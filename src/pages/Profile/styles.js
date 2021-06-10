import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #131313;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
