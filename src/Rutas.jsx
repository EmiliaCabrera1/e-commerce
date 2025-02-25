import React from "react";
import { Routes, Route } from "react-router-dom";
import Vestidos from "./Paginas/Vestidos";
import Inicio from "./Paginas/Inicio";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/vestidos" element={<Vestidos />} />
    </Routes>
  );
};

export default Rutas;
