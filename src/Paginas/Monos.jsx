import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerMonos } from "../Servicios/productos";

function Monos() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerMonos = async () => {
      setCargando(true);
      const Monos = await obtenerMonos();
      setItems(Monos);
      setCargando(false);
    };

    traerMonos();
  }, []);

  return (
    <>
      <Titulo titulo="Monos" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default Monos;
