import React, { useState } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../Context/UsuarioContext";
import AlertaInicio from "./AlertaInicio";

const Encabezado = () => {
  const [menuExpandido, setMenuExpandido] = useState(false);
  const { usuario } = useUsuario();
  const [loginPopup, setLoginPopup] = useState(false);
  const navigate = useNavigate();
  const funcionOnClick = (path) => {
    if (usuario) {
      navigate(path);
    } else {
      setLoginPopup(true);
    }
  };
  const toggleMenu = () => {
    setMenuExpandido(!menuExpandido);
  };

  return (
    <header className="flex items-center justify-between bg-beige p-2 sm:px-8 h-[10%] w-full min-h-[10%] max-h-[10%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-20">
      <div className="ml-2 sm:ml-6 pr-5 sm:pr-10 flex justify-start h-full w-[40%]">
        <button className="w-auto  sm:py-4">
          <img
            src="./assets/logo.svg"
            alt="Logo"
            className=" h-full object-contain"
          />
        </button>
      </div>
      <div className="w-[50%] sm:w-[60%] h-full justify-end flex gap-8 sm:gap-12 items-center mr-2 sm:mr-8">
        <div className=" flex justify-end my-4 max-h-full gap-3">
          <button
            onClick={() => funcionOnClick("/favoritos")}
            className=" h-full w-auto"
          >
            <img
              src="./assets/mg.svg"
              alt="Favoritos"
              className="h-6 w-full object-contain"
            />
          </button>
          <button
            className=" h-full w-auto"
            onClick={() => funcionOnClick("/carrito")}
          >
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
              className={`h-full w-full object-contain ${
                menuExpandido ? "hidden" : "block"
              }`}
              id="menu"
            />
            <img
              src="./assets/cerrar.svg"
              alt="cerrar"
              className={`h-full w-full object-contain ${
                menuExpandido ? "block" : "hidden"
              }`}
              id="cerrar"
            />
          </button>
        </div>
      </div>
      {menuExpandido && <Menu />}
      <AlertaInicio isOpen={loginPopup} onClose={() => setLoginPopup(false)} />
    </header>
  );
};

export default Encabezado;
