import React from "react";
import { Picker as Select } from "@react-native-picker/picker";
import * as S from "./styles";

const Picker = ({ onChange, value }) => {
  return (
    <S.PickerView>
      <Select
        style={{ width: "100%", height: 45 }}
        selectedValue={value}
        onValueChange={(value, index) => onChange(value)}
      >
        <Select.Item label="Selecione o tipo" />
        <Select.Item label="Receita" value="receita" />
        <Select.Item label="Despesa" value="despesa" />
      </Select>
    </S.PickerView>
  );
};

export default Picker;
