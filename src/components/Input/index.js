import React from "react";

import * as S from "./style";

const Input = (props) => {
  return (
    <S.AreaInput>
      <S.InputPage autoCorrect={false} autoCapitalize="none" {...props} />
    </S.AreaInput>
  );
};

export default Input;
