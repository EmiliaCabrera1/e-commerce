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
import { useUsuario } from "./UsuarioContext";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();
  const { actualizarUsuario } = useUsuario();

  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        const uid = usuario.uid;
        setUsuario(uid);
        actualizarUsuario(usuario);
      } else {
        actualizarUsuario(null);
        setUsuario(null);
      }
    });
  }, []);
  const registrarUsuario = async ({ email, password }) => {
    const credencial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { usuario } = credencial;
    navigate("/");
    return usuario;
  };
  const autenticarConGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credencial = GoogleAuthProvider.credentialFromResult(result);
    const token = credencial.accessToken;
    const usuario = result.user;

    console.log("Usuario autenticado:", usuario);
    navigate("/");
    return usuario;
  };

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const usuario = userCredential.user;
      console.log("Usuario autenticado:", usuario);
      navigate("/");
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
