import React from "react";
import { View, TouchableOpacity } from "react-native";
import * as S from "./style";

import { Feather } from "@expo/vector-icons";

const HistoryList = ({ data, deleteItem }) => {
  return (
    <S.Container>
      <View>
        <S.Type>
          <S.IconView type={data.description}>
            <Feather
              name={data.description === "despesa" ? "arrow-down" : "arrow-up"}
              color="#fff"
              size={20}
            />
            <S.TypeText>{data.description}</S.TypeText>
          </S.IconView>
        </S.Type>
        <S.Value>R$ {data.value}</S.Value>
      </View>
      <View>
        <TouchableOpacity onLongPress={() => deleteItem(data.id)}>
          <Feather name="trash" size={20} color="#c62c36" />
        </TouchableOpacity>
      </View>
    </S.Container>
  );
};

export default HistoryList;
