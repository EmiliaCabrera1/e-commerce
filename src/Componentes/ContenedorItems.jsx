import React, { useEffect, useState } from "react";
import Item from "./Item";

const ContenedorItems = ({ items }) => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (items.length > 0) {
      setCargando(false);
    } else {
      setCargando(true);
    }
  }, [items]);

  return (
    <div
      id="contenedor"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-10 mx-20 sm:mx-25 mt-15"
    >
      {!cargando && items.map((item) => <Item key={item.Id} {...item} />)}
    </div>
  );
};

export default ContenedorItems;
