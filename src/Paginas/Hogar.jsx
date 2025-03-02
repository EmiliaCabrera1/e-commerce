import { useState, useEffect } from "react";
import ContenedorItems from "../Componentes/ContenedorItems";
import Titulo from "../Componentes/Titulo";
import { obtenerEspejos } from "../Servicios/productos";
import { obtenerFloreros } from "../Servicios/productos";
import { obtenerVelasDifusores } from "../Servicios/productos";

function hogar() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const traerTodosLosItems = async () => {
      setCargando(true);
      let _items = [];
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
      <Titulo titulo="Hogar" />
      <ContenedorItems items={items} cargando={cargando} />
    </>
  );
}

export default hogar;
