import React from "react";

const Encabezado = () => {
  return (
    <header className="flex items-center justify-between bg-beige py-15 px-8 h-[10vh] w-full">
      <div className="pr-10 w-full flex justify-start">
        <button className="">
          <img src="./assets/logo.svg" alt="Logo" />
        </button>
      </div>
      <div className="pr-10 w-full flex justify-end">
        <button className="px-5">
          <img src="./assets/lupa.svg" alt="Lupa" />
        </button>
        <button className="px-5">
          <img src="./assets/mg.svg" alt="Favoritos" />
        </button>
        <button className="px-5">
          <img src="./assets/carrito.svg" alt="Carrito" />
        </button>
      </div>
      <div className="pr-10 pl-auto w-full flex justify-end">
        <button>
          <img src="./assets/menu.svg" alt="Menu" />
        </button>
      </div>
    </header>
  );
};

export default Encabezado;
