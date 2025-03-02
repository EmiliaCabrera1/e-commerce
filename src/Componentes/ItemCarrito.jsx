import React from "react";
import { formatoMoneda } from "../Utilidad/Formato";

const ItemCarrito = ({ Id, Nombre, ImagenUrl, Precio, borrarItem }) => {
  return (
    <div
      className="flex bg-beige/60 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] w-[80%] md:w-[60%] mx-auto
   mb-5 h-1/6 p-6"
    >
      <img src={ImagenUrl} alt={`Imagen ${Nombre}`} />
      <div className="mx-8 w-full">
        <h3 className="my-3">{Nombre}</h3>
        <h4>{formatoMoneda(Precio)}</h4>
      </div>
      <button
        onClick={borrarItem}
        className="flex justify-end w-full items-center  "
      >
        <img
          src="./assets/basurero.svg"
          alt="Basurero"
          className="h-4 w-auto ml-2 mt-2"
        />
      </button>
    </div>
  );
};

export default ItemCarrito;
