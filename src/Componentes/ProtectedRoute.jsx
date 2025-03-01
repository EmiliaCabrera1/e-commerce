import React from "react";
import { Navigate } from "react-router-dom";
import { useUsuario } from "../Context/UsuarioContext"; // Adjust the import based on your context file location

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { usuario } = useUsuario();

  return usuario ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
