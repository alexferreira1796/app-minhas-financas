import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StatusBarPage from "./src/components/StatusBarPage";

import AuthProvider from "./src/contexts/auth";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBarPage backgroundColor="#131313" barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
