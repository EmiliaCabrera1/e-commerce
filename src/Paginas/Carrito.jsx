import { useState, useEffect } from "react";
import ItemCarrito from "../Componentes/ItemCarrito";
import Titulo from "../Componentes/Titulo";
import { obtenerEspejos } from "../Servicios/productos";
import { obtenerFloreros } from "../Servicios/productos";
import { obtenerMonos } from "../Servicios/productos";
import { obtenerPantalon } from "../Servicios/productos";
import { obtenerPolleras } from "../Servicios/productos";
import { obtenerRemerasTops } from "../Servicios/productos";
import { obtenerVelasDifusores } from "../Servicios/productos";
import { obtenerVestidos } from "../Servicios/productos";
import { useUsuario } from "../Context/UsuarioContext";
import FinalizarCompra from "../Componentes/Finalizar Compra";

function Carrito() {
  const [items, setItems] = useState([]);
  const [itemsFiltrados, setItemsFiltrados] = useState([]);
  const { itemsCarrito, quitarCarrito } = useUsuario();
  const [cargando, setCargando] = useState(false);
  const [finalizarPopup, setFinalizarPopup] = useState(false);

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

  useEffect(() => {
    console.log(itemsCarrito);
    setItemsFiltrados(items.filter((item) => itemsCarrito.includes(item.Id)));
  }, [items, itemsCarrito]);

  return (
    <>
      <Titulo titulo="Carrito" />
      {itemsFiltrados.length > 0 &&
        itemsFiltrados.map((item) => (
          <ItemCarrito
            key={item.Id}
            borrarItem={() => quitarCarrito(item.Id)}
            {...item}
          />
        ))}
      {itemsFiltrados.length === 0 && !cargando && (
        <h2 className="text-3xl text-center">No hay items para mostrar</h2>
      )}
      {cargando && <h2 className="text-3xl text-center">Cargando...</h2>}
      {itemsFiltrados.length > 0 && (
        <button
          onClick={() => setFinalizarPopup(true)}
          className="flex p-3 bg-[#bbb4a9]/80 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mx-auto mb-20"
        >
          Finalizar compra
        </button>
      )}
      <FinalizarCompra
        isOpen={finalizarPopup}
        onClose={() => setFinalizarPopup(false)}
      />
    </>
  );
}

export default Carrito;
