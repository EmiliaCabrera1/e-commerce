import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actualizarFavoritos } from "../Servicios/productos";

const UsuarioContext = createContext();

export const useUsuario = () => {
  return useContext(UsuarioContext);
};

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();
  const actualizarUsuario = (user) => {
    setUsuario(user);
  };

  const agregarFavorito = (id) => {
    if (!usuario) {
      navigate("/login");
    }
    const nuevoFavorito = [...favoritos, id];
    setFavoritos(nuevoFavorito);
    actualizarFavoritos(usuario, nuevoFavorito);
  };

  const quitarFavorito = (id) => {
    const nuevoFavorito = favoritos.filter((favorito) => favorito !== id);
    setFavoritos(nuevoFavorito);
    actualizarFavoritos(usuario, nuevoFavorito);
  };

  const limpiarFavoritos = () => {
    setFavoritos([]);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        actualizarUsuario,
        favoritos,
        agregarFavorito,
        quitarFavorito,
        limpiarFavoritos,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
