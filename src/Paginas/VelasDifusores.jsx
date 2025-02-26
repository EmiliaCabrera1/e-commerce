import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerVelasDifusores } from "../Servicios/productos";

function VelasDifusores() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerVelasDifusores = async () => {
      const VelasDifusores = await obtenerVelasDifusores();
      setItems(VelasDifusores);
    };

    traerVelasDifusores();
  }, []);

  return (
    <>
      <Titulo titulo="Velas y Difusores" />
      <ContenedorItems items={items} />
    </>
  );
}

export default VelasDifusores;
