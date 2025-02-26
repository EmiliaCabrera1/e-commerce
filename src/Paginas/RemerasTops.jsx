import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerRemerasTops } from "../Servicios/productos";

function RemerasTops() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerRemerasTops = async () => {
      const RemerasTops = await obtenerRemerasTops();
      setItems(RemerasTops);
    };

    traerRemerasTops();
  }, []);

  return (
    <>
      <Titulo titulo="Remeras y Tops" />
      <ContenedorItems items={items} />
    </>
  );
}

export default RemerasTops;
