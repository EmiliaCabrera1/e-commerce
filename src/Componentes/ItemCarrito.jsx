import React from "react";

const ItemCarrito = () => {
  return (
    <div className="flex bg-beige/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-70% mx-20 mb-5 h-2/5 max-h-full p-6">
      <img src="./assets/ejemploVestido.svg" alt="Ejemplo Vestido" />
      <div className="mx-8 w-full">
        <h3 className="mb-3">Nombre del vestido</h3>
        <h4> $00.00</h4>
      </div>
      <div className="flex justify-end w-full items-center  ">
        <button> - 1 +</button>
        <h4 className="mx-5"> $00.00</h4>
        <img
          src="./assets/basurero.svg"
          alt="Basurero"
          className="h-4 w-auto ml-2"
        />
      </div>
    </div>
  );
};

export default ItemCarrito;
