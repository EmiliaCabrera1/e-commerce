import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerPantalon } from "../Servicios/productos";

function Pantalon() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerPantalon = async () => {
      setCargando(true);
      const Pantalon = await obtenerPantalon();
      setItems(Pantalon);
      setCargando(false);
    };

    traerPantalon();
  }, []);

  return (
    <>
      <Titulo titulo="Pantalones" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default Pantalon;
