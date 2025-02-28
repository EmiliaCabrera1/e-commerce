import React, { createContext, useContext, useState } from "react";
import { actualizarFavoritos } from "../Servicios/productos";
import { obtenerFavoritos } from "../Servicios/productos";

const UsuarioContext = createContext();

export const useUsuario = () => {
  return useContext(UsuarioContext);
};

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  console.log(favoritos);

  const actualizarUsuario = (user) => {
    setUsuario(user);
    if (user) {
      setearFavoritos(user);
    }
  };

  const agregarFavorito = (id) => {
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

  const setearFavoritos = async (usuario) => {
    setFavoritos(await obtenerFavoritos(usuario));
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
        setearFavoritos,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
