import React from "react";
import { Text, ActivityIndicator, Alert } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

import api from "../../services/api";

import * as S from "./styles";

import Header from "../../components/Header";
import HistoryList from "../../components/HistoryList";

const Home = () => {
  const isFocused = useIsFocused();
  const { user } = React.useContext(AuthContext);
  const [history, setHistory] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    async function loadList() {
      setLoading(true);
      await api
        .get(`/user/${user.id}`)
        .then((res) => {
          setBalance(res.data.data[0].balance);
          setHistory(res.data.data[0].transactions.reverse());
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
    loadList();
  }, [isFocused]);

  const handleDelete = (key) => {
    Alert.alert(`Excluir`, "Você deseja fazer essa operação?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Confirmar",
        onPress: () => confirm(key),
      },
    ]);
  };
  const confirm = async (key) => {
    if (history.length > 0) {
      await api
        .delete(`/user/${user.id}/transaction/${key}`)
        .then((res) => {
          const newHistory = history.filter(({ id }) => id !== key);
          setHistory(newHistory);
        })
        .catch((error) => {
          alert("Houve um erro");
        });
    }
  };

  return (
    <S.Backgound>
      <Header />
      <S.Container>
        <S.Name>{user && user.name}</S.Name>
        <S.Balance>
          R$ {balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </S.Balance>
      </S.Container>

      <S.Title>Últimas movimentações</S.Title>

      {history.length === 0 ? (
        <S.ViewLoading>
          <Text>Nenhum registro encontrado</Text>
        </S.ViewLoading>
      ) : loading ? (
        <S.ViewLoading>
          <ActivityIndicator size={30} color="#131313" />
        </S.ViewLoading>
      ) : (
        <S.List
          showsVerticalScrollIndicator={false}
          data={history}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <HistoryList data={item} deleteItem={handleDelete} />
          )}
        />
      )}
    </S.Backgound>
  );
};

export default Home;
