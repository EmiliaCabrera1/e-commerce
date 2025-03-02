import React, { useState } from "react";
import { formatoMoneda } from "../Utilidad/Formato";
import { useUsuario } from "../Context/UsuarioContexto";
import AlertaInicio from "./AlertaInicio";

const DetalleItem = ({ isOpen, onClose, Id, ImagenUrl, Nombre, Precio }) => {
  if (!isOpen) return null;
  const { agregarCarrito, usuario } = useUsuario();

  const handleClose = (event) => {
    event.stopPropagation();
    onClose();
  };

  const agregarItem = (event) => {
    if (usuario) {
      event.stopPropagation();
      agregarCarrito(Id);
      onClose();
    } else {
      setLoginPopup(true);
    }
  };

  const [loginPopup, setLoginPopup] = useState(false);

  return (
    <div className="fixed inset-0 bg-beige/70 flex items-center justify-center z-50">
      <div
        id="popup-container"
        className="relative flex flex-col md:flex-row bg-beige/95 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] rounded p-10 w-[90%] md:w-[70%] mx-5 md:mx-20 mb-20 h-[90%] md:h-[70%] overflow-hidden"
      >
        <div className="absolute top-4 right-4 z-20 ">
          <button onClick={handleClose}>
            <img src="./assets/cerrar.svg" alt="cerrar" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex gap-2 md:gap-0 md:flex-col md:w-1/6 h-1/5 mb-2 md:h-full overflow-hidden">
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-full md:h-1/3 w-full mb-2"
            />
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-full md:h-1/3 w-full mb-2"
            />
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-full md:h-1/3 w-full"
            />
          </div>
          <div className="flex flex-col md:w-2/3 md:mx-2 h-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col h-1/3 md:w-1/4 md:h-full md:mt-8 p-6">
            <div className="text-xl">
              <h2 className="mb-2">{Nombre}</h2>
              <h3>{formatoMoneda(Precio)}</h3>
            </div>
            <div className="my-4">
              <button
                onClick={agregarItem}
                className="bg-[#F8F8F8] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-2 my-2 rounded"
              >
                Agregar al carrito
              </button>
              <AlertaInicio
                isOpen={loginPopup}
                onClose={() => setLoginPopup(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleItem;
