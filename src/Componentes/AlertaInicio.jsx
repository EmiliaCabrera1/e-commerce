import React from "react";
import { useNavigate } from "react-router-dom";

const AlertaInicio = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-beige/50 flex items-center justify-center z-50">
      <div className="bg-beige/90 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] w-11/12 sm:w-2/3 lg:w-1/2 mx-5 mb-20 h-auto max-h-full p-6 rounded-lg">
        <p className="text-center text-3xl text-[#d9d9d9]">
          Para continuar es necesario iniciar sesion.
        </p>
        <button
          className="w-[80%] sm:w-[40%] p-4 my-5 text-lg sm:text-xl bg-[#d9d9d9] rounded-lg shadow-md border border-[#737171] mx-auto block"
          onClick={() => navigate("/login")}
        >
          Iniciar Sesion
        </button>
        <button
          className="w-[80%] sm:w-[40%] p-4 my-5 text-lg sm:text-xl bg-[#d9d9d9] rounded-lg shadow-md border border-[#737171] mx-auto block"
          onClick={onClose}
        >
          Atras
        </button>
      </div>
    </div>
  );
};

export default AlertaInicio;
