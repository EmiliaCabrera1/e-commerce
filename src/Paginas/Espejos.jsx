import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerEspejos } from "../Servicios/productos";

function Espejos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerEspejos = async () => {
      const Espejos = await obtenerEspejos();
      setItems(Espejos);
    };

    traerEspejos();
  }, []);

  return (
    <>
      <Titulo titulo="Espejos" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Espejos;
