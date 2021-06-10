import React from "react";
import { View, ActivityIndicator } from "react-native";

import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const { logged, loading } = React.useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={30} color="#131313" />
      </View>
    );
  }

  return !logged ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
