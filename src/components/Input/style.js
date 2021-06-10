import styled from "styled-components/native";

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const InputPage = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.placeholderColor
    ? props.placeholderColor
    : "rgba(255,255,255,0.20)",
}))`
  background: rgba(0, 0, 0, 0.2);
  width: 90%;
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
`;
