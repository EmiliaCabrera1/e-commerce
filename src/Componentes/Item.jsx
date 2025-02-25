import React from "react";

const Item = () => {
  return (
    <div className="bg-beige/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full h-full aspect-[2/3]">
      <img
        src="./assets/ejemploVestido.svg"
        alt="Foto del vestido"
        className="h-[70%] w-auto object-cover"
      />
      <img
        src="./assets/mg.svg"
        alt="Corazon"
        className="-mt-12 z-20 mr-4 ml-auto h-8 w-auto"
      />
      <h4 className="mx-2 mt-8 mb-1 text-nowrap">Nombre del vestido</h4>
      <h6 className="mx-2 mb-5 font-thin ">$0.00</h6>
    </div>
  );
};

export default Item;
