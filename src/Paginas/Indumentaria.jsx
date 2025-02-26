import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerMonos } from "../Servicios/productos";
import { obtenerPantalon } from "../Servicios/productos";
import { obtenerPolleras } from "../Servicios/productos";
import { obtenerRemerasTops } from "../Servicios/productos";
import { obtenerVestidos } from "../Servicios/productos";

function Indumentaria() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerTodosLosItems = async () => {
      let _items = [];
      const vestidos = await obtenerVestidos();
      _items.push(...vestidos);
      const polleras = await obtenerPolleras();
      _items.push(...polleras);
      const remerastops = await obtenerRemerasTops();
      _items.push(...remerastops);
      const pantalon = await obtenerPantalon();
      _items.push(...pantalon);
      const monos = await obtenerMonos();
      _items.push(...monos);

      setItems(_items);
    };

    traerTodosLosItems();
  }, []);

  return (
    <>
      <Titulo titulo="Indumantaria" />
      <ContenedorItems items={items} />
    </>
  );
}

export default Indumentaria;
