import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import * as S from "./styles";

import Header from "../../components/Header";

const Profile = () => {
  const navigation = useNavigation();
  const { user, signOut } = React.useContext(AuthContext);

  return (
    <S.Container>
      <Header />
      <S.Name>{user.name}</S.Name>

      <S.Button
        color="#009b4a"
        onPress={() => navigation.navigate("Registrar")}
      >
        <S.TextButton>Registrar gastos</S.TextButton>
      </S.Button>

      <S.Button color="#c64136" onPress={() => signOut()}>
        <S.TextButton>Sair</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Profile;
