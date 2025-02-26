import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerPantalon } from "../Servicios/productos";

function Pantalon() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerPantalon = async () => {
      const Pantalon = await obtenerPantalon();
      setItems(Pantalon);
    };

    traerPantalon();
  }, []);

  return (
    <>
      <Titulo titulo="Pantalones" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Pantalon;
