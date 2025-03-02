import React from "react";
import Item from "./Item";

const ContenedorItems = ({ items, cargando }) => {
  return (
    <>
      <div
        id="contenedor"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-10 mx-20 sm:mx-25 mt-15"
      >
        {items.length > 0 &&
          items.map((item) => <Item key={item.Id} {...item} />)}
      </div>
      {items.length === 0 && !cargando && (
        <h2 className=" text-xl md:text-3xl text-center text-[#797979] mb-2">
          No hay items para mostrar
        </h2>
      )}
      {cargando && (
        <h2 className=" text-xl md:text-3xl text-center text-[#797979] mb-2">
          Cargando...
        </h2>
      )}
    </>
  );
};

export default ContenedorItems;
