import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerEspejos } from "../Servicios/productos";
import { obtenerFloreros } from "../Servicios/productos";
import { obtenerMonos } from "../Servicios/productos";
import { obtenerPantalon } from "../Servicios/productos";
import { obtenerPolleras } from "../Servicios/productos";
import { obtenerRemerasTops } from "../Servicios/productos";
import { obtenerVelasDifusores } from "../Servicios/productos";
import { obtenerVestidos } from "../Servicios/productos";

function itemsGenerales() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerTodosLosItems = async () => {
      setCargando(true);
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
      const espejos = await obtenerEspejos();
      _items.push(...espejos);
      const floreros = await obtenerFloreros();
      _items.push(...floreros);
      const velasdifusores = await obtenerVelasDifusores();
      _items.push(...velasdifusores);

      setItems(_items);
      setCargando(false);
    };

    traerTodosLosItems();
  }, []);

  return (
    <>
      <Titulo titulo="Todo los productos" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default itemsGenerales;
