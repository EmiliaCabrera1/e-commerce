import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerRemerasTops } from "../Servicios/productos";

function RemerasTops() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerRemerasTops = async () => {
      setCargando(true);
      const RemerasTops = await obtenerRemerasTops();
      setItems(RemerasTops);
      setCargando(false);
    };

    traerRemerasTops();
  }, []);

  return (
    <>
      <Titulo titulo="Remeras y Tops" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default RemerasTops;
