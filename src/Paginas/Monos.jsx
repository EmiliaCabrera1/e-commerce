import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerMonos } from "../Servicios/productos";

function Monos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerMonos = async () => {
      const Monos = await obtenerMonos();
      setItems(Monos);
    };

    traerMonos();
  }, []);

  return (
    <>
      <Titulo titulo="Monos" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Monos;
