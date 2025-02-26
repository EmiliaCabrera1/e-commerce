import React, { useState } from "react";
import Menu from "./Menu";

const Encabezado = () => {
  const [menuExpandido, setMenuExpandido] = useState(false);

  const toggleMenu = () => {
    setMenuExpandido(!menuExpandido);
  };
  return (
    <header className="flex items-center justify-between bg-beige sm:p-2 px-8 h-[10%] w-full min-h-[10%] max-h-[10%]">
      <div className="ml-6 pr-10 flex justify-start h-full w-[40%]">
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
          <button
            id="menu-deplegable"
            className="h-6 w-auto"
            onClick={toggleMenu}
          >
            <img
              src="./assets/menu.svg"
              alt="Menu"
              className="h-full w-full object-contain"
            />
          </button>
        </div>
      </div>
      {menuExpandido && <Menu />}
    </header>
  );
};

export default Encabezado;
