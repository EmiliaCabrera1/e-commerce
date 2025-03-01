import React from "react";
import { formatoMoneda } from "../Utilidad/Formato";
import { useUsuario } from "../Context/UsuarioContext";

const DetalleItem = ({ isOpen, onClose, Id, ImagenUrl, Nombre, Precio }) => {
  if (!isOpen) return null;
  const { agregarCarrito } = useUsuario();

  const handleClose = (event) => {
    event.stopPropagation();
    onClose();
  };

  const agregarItem = (event) => {
    event.stopPropagation();
    agregarCarrito(Id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-beige/70 flex items-center justify-center z-50">
      <div
        id="popup-container"
        className="relative flex flex-col md:flex-row bg-beige/95 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] rounded p-10 w-[90%] md:w-[70%] mx-5 md:mx-20 mb-20 h-[90%] md:h-[70%] overflow-hidden"
      >
        <div className="absolute top-4 right-4 z-20">
          <button onClick={handleClose}>
            <img src="./assets/cerrar.svg" alt="cerrar" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex flex-col md:flex-col md:w-1/6 h-full overflow-hidden">
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-1/3 md:h-1/3 w-full mb-2"
            />
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-1/3 md:h-1/3 w-full mb-2"
            />
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-1/3 md:h-1/3 w-full"
            />
          </div>
          <div className="flex flex-col md:w-2/3 md:mx-2 h-full overflow-hidden">
            <img
              src={ImagenUrl}
              alt="Foto del vestido"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col h-1/3 md:w-1/6 md:h-full p-4">
            <div className="text-xl">
              <h2>{Nombre}</h2>
              <h3>{formatoMoneda(Precio)}</h3>
            </div>
            <div className="my-4">
              <button
                onClick={agregarItem}
                className="bg-[#bbb4a9]/80 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 m-2"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleItem;
