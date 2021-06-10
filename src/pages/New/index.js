import React from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import { capitalize } from "../../utils/functions";

import { AuthContext } from "../../contexts/auth";

import api from "../../services/api";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Picker from "../../components/Picker";

const New = () => {
  const navigation = useNavigation();
  const { user } = React.useContext(AuthContext);
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (isNaN(parseFloat(value)) || type === null || type === "") {
      alert("Preencha todos os campos");
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo: ${capitalize(type)} - Valor: ${parseFloat(value)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => handleAdd(),
        },
      ]
    );
  };

  const handleAdd = async () => {
    setLoading(true);
    await api
      .post(`/user/${user.id}/transaction`, {
        description: type,
        date: format(new Date(), "dd/MM/yyyy"),
        value,
      })
      .then((res) => navigation.navigate("Home"))
      .catch((error) => alert("Ops, ocorreu um erro"))
      .finally(() => {
        setLoading(false);
        setValue("");
        setType("");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Background>
        <Header />
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Valor desejado"
            style={{ backgroundColor: "rgba(255,255,255, 0.9)", color: "#222" }}
            placeholderColor="#222"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(value) => setValue(value)}
          />

          <Picker onChange={setType} value={type} />

          {loading ? (
            <S.SubmitButton>
              <S.SubmitText>Salvando...</S.SubmitText>
            </S.SubmitButton>
          ) : (
            <S.SubmitButton onPress={handleSubmit}>
              <S.SubmitText>Registrar</S.SubmitText>
            </S.SubmitButton>
          )}
        </SafeAreaView>
      </S.Background>
    </TouchableWithoutFeedback>
  );
};

export default New;
