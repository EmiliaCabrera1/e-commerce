import React from "react";

const ConfirmacionCompra = () => {
  return (
    <div className="flex flex-col items-center px-30 py-20 bg-[#bbb4a9]/80 rounded-[10px] shadow-[0px_6px_6px_0px_rgba(0,0,0,0.30)] my-3 mx-auto ">
      <img
        src="./assets/confirmar.svg"
        alt="Compra Confirmada"
        className="mb-20"
      />
      <h6 className="mb-6 text-2xl text-center">
        GRACIAS POR SU COMPRA EN DE LAS ALBA!!
      </h6>
      <h5 className="text-center">
        UN VENDEDOR SE COMUNICARA A TU MAIL REGISTRADO PARA INDICARTE LAS
        INSTRUCCIONES DE PAGO Y SOLICITARTE LA DIRECCION DE ENTREGA.
      </h5>
    </div>
  );
};

export default ConfirmacionCompra;
