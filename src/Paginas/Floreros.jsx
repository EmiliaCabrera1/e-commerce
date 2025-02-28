import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerFloreros } from "../Servicios/productos";

function Floreros() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerFloreros = async () => {
      setCargando(true);
      const Floreros = await obtenerFloreros();
      setItems(Floreros);
      setCargando(false);
    };

    traerFloreros();
  }, []);

  return (
    <>
      <Titulo titulo="Floreros" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default Floreros;
