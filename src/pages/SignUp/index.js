import React from "react";
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import * as S from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

import Input from "../../components/Input";

const SignUp = () => {
  const { signUp, errorAuth, successSingUp, loadingAuth } =
    React.useContext(AuthContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleAdd = () => {
    if (name !== "" && email !== "" && password !== "") {
      signUp(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Background>
        <S.Container
          behavior={Platform.OS === "ios" ? "padding" : ""}
          enabled={true}
        >
          {errorAuth && <S.ErrorMessage>Usuário já existe!</S.ErrorMessage>}
          {successSingUp && (
            <S.SucessMessage>Usuário criado com sucesso!</S.SucessMessage>
          )}

          <Input
            placeholder="Nome"
            value={name}
            onChangeText={(value) => setName(value)}
          />

          <Input
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
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
            <S.SubmitButton onPress={handleAdd}>
              <S.SubmitText>Cadastrar</S.SubmitText>
            </S.SubmitButton>
          )}
        </S.Container>
      </S.Background>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
