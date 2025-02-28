import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerEspejos } from "../Servicios/productos";

function Espejos() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerEspejos = async () => {
      setCargando(true);
      const Espejos = await obtenerEspejos();
      setItems(Espejos);
      setCargando(false);
    };

    traerEspejos();
  }, []);

  return (
    <>
      <Titulo titulo="Espejos" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default Espejos;
