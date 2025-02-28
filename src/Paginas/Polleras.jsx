import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerPolleras } from "../Servicios/productos";

function Polleras() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerPolleras = async () => {
      setCargando(true);
      const Polleras = await obtenerPolleras();
      setItems(Polleras);
      setCargando(false);
    };

    traerPolleras();
  }, []);

  return (
    <>
      <Titulo titulo="Polleras" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default Polleras;
