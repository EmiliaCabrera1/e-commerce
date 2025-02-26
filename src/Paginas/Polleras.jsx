import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerPolleras } from "../Servicios/productos";

function Polleras() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerPolleras = async () => {
      const Polleras = await obtenerPolleras();
      setItems(Polleras);
    };

    traerPolleras();
  }, []);

  return (
    <>
      <Titulo titulo="Polleras" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Polleras;
