/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        const uid = usuario.uid;
        setUsuario(uid);
        console.log("Usuario logueado.");
      } else {
        console.log("Usuario NO logueado.");
        setUsuario(null);
      }
    });
  }, []);
  const registrarUsuario = async ({ email, password }) => {
    try {
      const credencial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { usuario } = credencial;

      return usuario;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };
  const autenticarConGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credencial = GoogleAuthProvider.credentialFromResult(result);
      const token = credencial.accessToken;
      const usuario = result.user;

      console.log("Usuario autenticado:", usuario);
      return usuario;
    } catch (error) {
      console.error("Error en Google Sign-In:", error.message);
    }
  };

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const usuario = userCredential.user;
        console.log(usuario);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Cerraste sesión");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ usuario, login, registrarUsuario, logout, autenticarConGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
