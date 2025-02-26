import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerFloreros } from "../Servicios/productos";

function Floreros() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerFloreros = async () => {
      const Floreros = await obtenerFloreros();
      setItems(Floreros);
    };

    traerFloreros();
  }, []);

  return (
    <>
      <Titulo titulo="Floreros" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Floreros;
