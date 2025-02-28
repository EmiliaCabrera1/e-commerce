import React, { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

export const useUsuario = () => {
  return useContext(UsuarioContext);
};

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const actualizarUsuario = (user) => {
    setUsuario(user);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
