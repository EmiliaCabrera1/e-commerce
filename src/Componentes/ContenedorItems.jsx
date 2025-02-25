import React from "react";
import Item from "./Item";

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const ContenedorItems = () => {
  return (
    <div
      id="contenedor"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 mx-20 sm:mx-25 mt-15"
    >
      {items.map((item) => {
        return <Item id={item} />;
      })}
    </div>
  );
};

export default ContenedorItems;
