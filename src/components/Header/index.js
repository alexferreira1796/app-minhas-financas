import React from "react";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

const Header = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Menu onPress={() => navigation.toggleDrawer()}>
        <Feather name="menu" size={30} color="#fff" />
      </S.Menu>
    </S.Container>
  );
};

export default Header;
