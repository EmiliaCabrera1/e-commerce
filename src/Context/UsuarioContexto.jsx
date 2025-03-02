import React, { createContext, useContext, useState } from "react";
import {
  actualizarFavoritos,
  actualizarCarrito,
  obtenerCarrito,
  crearOrdenCompra,
} from "../Servicios/productos";
import { obtenerFavoritos } from "../Servicios/productos";

const UsuarioContexto = createContext();

export const useUsuario = () => {
  return useContext(UsuarioContexto);
};

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const actualizarUsuario = (user) => {
    setUsuario(user);
    if (user) {
      setearFavoritos(user);
      setearCarrito(user);
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

  const agregarCarrito = (id) => {
    const nuevoCarrito = [...itemsCarrito, id];
    setItemsCarrito(nuevoCarrito);
    actualizarCarrito(usuario, nuevoCarrito);
  };

  const quitarCarrito = (id) => {
    const nuevoCarrito = itemsCarrito.filter(
      (itemCarrito) => itemCarrito !== id
    );
    setItemsCarrito(nuevoCarrito);
    actualizarCarrito(usuario, nuevoCarrito);
  };

  const limpiarCarrito = () => {
    setItemsCarrito([]);
  };

  const setearCarrito = async (usuario) => {
    setItemsCarrito(await obtenerCarrito(usuario));
  };

  const finalizarCompra = async (infoUsuario, productos, totalOrden) => {
    try {
      const ordenCompraNro = crearOrdenCompra(
        infoUsuario,
        productos,
        totalOrden
      );
      setItemsCarrito([]);
      actualizarCarrito(usuario, []);
      return ordenCompraNro;
    } catch (e) {
      console.log("Fallo la creacion de la Orden de Compra.", e.message);
    }
  };

  return (
    <UsuarioContexto.Provider
      value={{
        usuario,
        actualizarUsuario,
        favoritos,
        agregarFavorito,
        quitarFavorito,
        limpiarFavoritos,
        setearFavoritos,
        itemsCarrito,
        agregarCarrito,
        quitarCarrito,
        limpiarCarrito,
        setearCarrito,
        finalizarCompra,
      }}
    >
      {children}
    </UsuarioContexto.Provider>
  );
};
