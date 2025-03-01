import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../Context/UsuarioContexto";

const FinalizarCompra = ({ isOpen, onClose, usuario, items, totalOrden }) => {
  const navigate = useNavigate();
  const { finalizarCompra } = useUsuario();
  if (!isOpen) return null;

  const CompletarCompra = (usuario, items) => {
    const infoUsuario = {
      Email: usuario.email,
      Nombre: usuario?.providerData[0]?.displayName,
    };
    const numeroOrdenCompra = finalizarCompra(infoUsuario, items, totalOrden);
    if (numeroOrdenCompra) {
      navigate("/compra");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-beige/50 flex items-center justify-center z-50">
      <div className="bg-beige/90 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] w-11/12 sm:w-2/3 lg:w-1/2 mx-5 mb-20 h-auto max-h-full p-6 rounded-lg">
        <p className="text-center text-3xl text-[#d9d9d9]">
          Estas segure de que desea finalizar la compra?
        </p>
        <button
          className="w-[80%] sm:w-[40%] p-4 my-5 text-lg sm:text-xl bg-[#d9d9d9] rounded-lg shadow-md border border-[#737171] mx-auto block"
          onClick={() => {
            CompletarCompra(usuario, items);
          }}
        >
          Finalizar
        </button>
        <button
          className="w-[80%] sm:w-[40%] p-4 my-5 text-lg sm:text-xl bg-[#d9d9d9] rounded-lg shadow-md border border-[#737171] mx-auto block"
          onClick={() => {
            onClose();
          }}
        >
          Seguir comprando
        </button>
      </div>
    </div>
  );
};

export default FinalizarCompra;
