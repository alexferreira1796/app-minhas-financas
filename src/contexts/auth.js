import React from "react";
import api from "../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [loadingAuth, setLoadingAuth] = React.useState(true);
  const [errorAuth, setErrorAuth] = React.useState(false);
  const [successSingUp, setSuccessSignUp] = React.useState(false);

  React.useEffect(() => {
    async function getStorage() {
      const item = await AsyncStorage.getItem("@finance-user");
      if (item) {
        setUser(JSON.parse(item));
      }
      setLoading(false);
      setErrorAuth(false);
      setLoadingAuth(false);
    }
    getStorage();
  }, []);

  // Login User
  async function signIn(email, password) {
    setLoadingAuth(true);
    await api
      .get(`/user/${email}/${password}`)
      .then((res) => res.data)
      .then((data) => {
        defineData(data.data);
      })
      .catch((error) => {
        setErrorAuth(!error.response.data.success);
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  }

  // Add User
  async function signUp(name, email, password) {
    setLoadingAuth(true);
    await api
      .post("/add/user", {
        name,
        email,
        password,
      })
      .then((res) => res.data)
      .then((data) => {
        setSuccessSignUp(true);
      })
      .catch((error) => {
        setErrorAuth(!error.response.data.success);
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  }

  const defineData = (data) => {
    storageUser(data);
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
    });
    setLoading(false);
    setErrorAuth(false);
    setSuccessSignUp(false);
  };

  const storageUser = async (data) => {
    await AsyncStorage.setItem("@finance-user", JSON.stringify(data));
  };

  // Deslogar
  const signOut = async () => {
    await AsyncStorage.removeItem("@finance-user")
      .then(() => {
        setUser(null);
        setLoading(false);
        setErrorAuth(false);
        setSuccessSignUp(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        logged: !!user,
        user,
        signIn,
        signUp,
        signOut,
        loading,
        loadingAuth,
        errorAuth,
        successSingUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
