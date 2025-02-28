import React from "react";
import { formatoMoneda } from "../Utilidad/Formato";

const Item = ({ Id, ImagenUrl, Nombre, Precio }) => {
  return (
    <div className="relative bg-beige/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full aspect-[2/3]">
      <img
        src={ImagenUrl}
        alt="Foto del vestido"
        className="h-[80%] w-full object-cover"
      />
      <img
        src="./assets/mg.svg"
        alt="Corazon"
        className="absolute z-10 right-4 top-[65%] w-[15%]"
      />
      <div className="h-[20%] mx-2 my-2 space-y-1">
        <h5 className="text-nowrap">{Nombre}</h5>
        <h6 className="font-thin ">{formatoMoneda(Precio)}</h6>
      </div>
    </div>
  );
};

export default Item;
