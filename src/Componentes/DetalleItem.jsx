import React from "react";

const DetalleItem = ({ isOpen, onClose, Id, ImagenUrl, Nombre, Precio }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-beige/70 flex items-center justify-center z-50">
      <div className="bg-beige/90 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[70%] mx-20 mb-20 h-[70%] max-h-full">
        <div className="flex justify-end">
          <button className="m-8" onClick={onClose}>
            <img src="./assets/flecha.svg" alt="flecha" />
          </button>
        </div>
        <div className="flex mx-10 pb-10 h-full">
          <div className="pr-6 flex flex-col justify-between h-full">
            <img
              src="./assets/ejemploVestido.svg"
              alt="Foto del vestido"
              className="flex-1 mb-5 object-cover max-h-full"
            />
            <img
              src="./assets/ejemploVestido.svg"
              alt="Foto del vestido"
              className="flex-1 mb-5 object-cover max-h-full"
            />
            <img
              src="./assets/ejemploVestido.svg"
              alt="Foto del vestido"
              className="flex-1 mb-5 object-cover max-h-full"
            />
          </div>
          <div className="pr-6 md:w-2/5 h-full">
            <img
              src="./assets/ejemploVestido.svg"
              alt="Foto del vestido"
              className="h-full object-cover max-h-full"
            />
          </div>
          <div className="pr-6 mb-6 md:w-2/5">
            <h2>Nombre del Vestido</h2>
            <h3>$0.00</h3>

            <div className="my-8">
              <h6>Selecciona tu talle</h6>
              <button className="bg-[#bbb4a9]/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 ml-0 mt-3 m-2 ">
                S
              </button>
              <button className="bg-[#bbb4a9]/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 m-2 ">
                M
              </button>
              <button className="bg-[#bbb4a9]/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 m-2 ">
                L
              </button>
              <button className="bg-[#bbb4a9]/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 m-2 ">
                XL
              </button>
            </div>
            <div className="my-4">
              <button className="bg-[#bbb4a9]/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 ml-0 m-2 ">
                + 1 -
              </button>
              <button className="bg-[#bbb4a9]/80 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-3 py-1 m-2 ">
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
