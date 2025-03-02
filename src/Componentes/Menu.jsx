import React from "react";
import { Link } from "react-router-dom";
import { useUsuario } from "../Context/UsuarioContexto";
import { useAuth } from "../Context/AuthContext";

const Menu = ({ onClose }) => {
  const { usuario } = useUsuario();
  const { logout } = useAuth();

  const salir = () => {
    logout();
  };

  const manejarClickEnTransparencia = (event) => {
    onClose();

    event.target.style.pointerEvents = "none";

    const elementoDeAbajo = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    if (elementoDeAbajo) {
      elementoDeAbajo.click();
    }
  };

  return (
    <>
      <div className="absolute top-[8%] right-0 z-20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.20)] mr-2">
        <div className="flex h-[10vh] items-center justify-center pr-7 gap-5 bg-[#d9d9d9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] -ml-3 pl-10 pt-4">
          <img src="./assets/usuario.svg" alt="msn" className="max-h-5" />
          {!usuario && <Link to="/login">Iniciar Sesion</Link>}
          {usuario && <h1>{usuario.displayName ?? usuario.email}</h1>}
        </div>
        <div className=" flex-col pr-7 h-fit pb-6 bg-beige shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pl-10 pt-4 ">
          <ul className="space-y-2 text-white text-lg">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/indumentaria">Indumentaria</Link>
            </li>
            <li>
              <Link to="/vestidos">Vestidos</Link>
            </li>
            <li>
              <Link to="/monos">Monos</Link>
            </li>
            <li>
              <Link to="/pantalon">Pantalon</Link>
            </li>
            <li>
              <Link to="/polleras">Polleras</Link>
            </li>
            <li>
              <Link to="/remerastops">Remeras/Tops</Link>
            </li>
            <li>
              <Link to="/hogar">Hogar</Link>
            </li>
            <li>
              <Link to="/espejos">Espejos</Link>
            </li>
            <li>
              <Link to="/floreros">Floreros</Link>
            </li>
            <li>
              <Link to="/velasdifusores">Velas/Difusores</Link>
            </li>
            <li>
              <Link to="/itemsgenerales">Ver todos</Link>
            </li>
            {usuario && (
              <li className="mt-5">
                <button onClick={salir}>Cerrar Sesion</button>
              </li>
            )}
          </ul>
          <a
            href="https://wa.me/543876836037"
            target="_blank"
            className="h-6 w-6"
          >
            <button className="flex justify-end ml-auto mr-15 mt-10 text-white text-lg">
              Contacto
            </button>
          </a>
        </div>
      </div>
      <div
        onClick={manejarClickEnTransparencia}
        className="fixed inset-0 bg-transparent"
      ></div>
    </>
  );
};

export default Menu;
