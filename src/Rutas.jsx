import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Registro from "./Paginas/Registro";
import Vestidos from "./Paginas/Vestidos";
import Espejos from "./Paginas/Espejos";
import Floreros from "./Paginas/Floreros";
import Monos from "./Paginas/Monos";
import Pantalon from "./Paginas/Pantalon";
import Polleras from "./Paginas/Polleras";
import RemerasTops from "./Paginas/RemerasTops";
import VelasDifusores from "./Paginas/VelasDifusores";
import ItemsGenerales from "./Paginas/ItemsGenerales";
import Indumentaria from "./Paginas/Indumentaria";
import Hogar from "./Paginas/Hogar";
import Login from "./Paginas/Login";
import Favoritos from "./Paginas/Favoritos";
import Carrito from "./Paginas/Carrito";
import ProtectedRoute from "./Componentes/ProtectedRoute";
import Pagina404 from "./Paginas/404";
import ConfirmacionCompra from "./Paginas/ConfirmacionCompra";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/vestidos" element={<Vestidos />} />
      <Route path="/espejos" element={<Espejos />} />
      <Route path="/floreros" element={<Floreros />} />
      <Route path="/monos" element={<Monos />} />
      <Route path="/pantalon" element={<Pantalon />} />
      <Route path="/polleras" element={<Polleras />} />
      <Route path="/remerastops" element={<RemerasTops />} />
      <Route path="/velasdifusores" element={<VelasDifusores />} />
      <Route path="/itemsgenerales" element={<ItemsGenerales />} />
      <Route path="/indumentaria" element={<Indumentaria />} />
      <Route path="/hogar" element={<Hogar />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/favoritos"
        element={<ProtectedRoute element={Favoritos} />}
      />
      <Route path="/carrito" element={<ProtectedRoute element={Carrito} />} />
      <Route path="*" element={<Pagina404 />} />
      <Route path="Compra" element={<ConfirmacionCompra />} />
    </Routes>
  );
};

export default Rutas;
