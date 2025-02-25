import React from "react";

const Encabezado = () => {
  return (
    <header className="flex items-center justify-between bg-beige py-4 px-8 h-[10vh] w-full">
      <div className="pr-10 flex justify-start max-h-full w-[40%]">
        <button className="w-auto">
          <img
            src="./assets/logo.svg"
            alt="Logo"
            className=" h-full object-contain"
          />
        </button>
      </div>
      <div className="w-[60%] h-full justify-end flex gap-12 items-center mr-8">
        <div className=" flex justify-end my-4 max-h-full gap-3">
          <button className=" h-full w-auto">
            <img
              src="./assets/lupa.svg"
              alt="Lupa"
              className="h-6 w-full object-contain"
            />
          </button>
          <button className=" h-full w-auto">
            <img
              src="./assets/mg.svg"
              alt="Favoritos"
              className="h-6 w-full object-contain"
            />
          </button>
          <button className=" h-full w-auto">
            <img
              src="./assets/carrito.svg"
              alt="Carrito"
              className="h-6 w-full object-contain"
            />
          </button>
        </div>
        <div className="flex justify-end max-h-full">
          <button className="h-6 w-auto">
            <img
              src="./assets/menu.svg"
              alt="Menu"
              className="h-full w-full object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Encabezado;
