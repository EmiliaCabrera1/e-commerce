import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerVestidos } from "../Servicios/productos";

function Vestidos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerVestidos = async () => {
      const vestidos = await obtenerVestidos();
      setItems(vestidos);
    };

    traerVestidos();
  }, []);

  return (
    <>
      <Titulo titulo="Vestidos" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Vestidos;
