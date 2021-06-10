import React from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import * as S from "./styles";
import logo from "../../assets/Logo.png";

import { AuthContext } from "../../contexts/auth";

import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";

const SignIn = () => {
  const navigation = useNavigation();
  const { signIn, errorAuth, loadingAuth } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signIn(email, password);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Background>
        <S.Container
          behavior={Platform.OS === "ios" ? "padding" : ""}
          enabled={true}
        >
          <S.Logo source={logo} />

          {errorAuth && <S.ErrorMessage>Usuário não encontrado</S.ErrorMessage>}

          <Input
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            returnKeyType="next"
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
          {loadingAuth ? (
            <S.SubmitButton>
              <ActivityIndicator size={20} color="#131313" />
            </S.SubmitButton>
          ) : (
            <S.SubmitButton onPress={handleLogin}>
              <S.SubmitText>Acessar</S.SubmitText>
            </S.SubmitButton>
          )}

          <S.Link onPress={() => navigation.navigate("SignUp")}>
            <S.LinkText>Criar uma conta</S.LinkText>
          </S.Link>
        </S.Container>
      </S.Background>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
