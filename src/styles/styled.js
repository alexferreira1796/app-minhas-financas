import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${0 + getStatusBarHeight()}px;
`;
