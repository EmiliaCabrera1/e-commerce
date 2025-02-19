import React from "react";

const Registro = () => {
  return (
    <div className="flex flex-col items-center w-[50vw] h-[80vh]">
      <h1 className="text-[#797979] text-5xl my-6 ">Crear Cuenta</h1>

      <input type="text" name="e-mail" id="e-mail" placeholder="e-mail" />
      <input
        type="text"
        name="contraseña"
        id="contraseña"
        placeholder="contraseña"
      />
      <input
        type="text"
        name="confirmar contraseña"
        id="confirmar contraseña"
        placeholder="confirmar contraseña"
      />
      <button className="w-[50%] p-4 my-5 text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]">
        Continuar
      </button>
      <div className="flex text-xl">
        <h4>Ya tenes cuenta?</h4>
        <button className="mx-4 text-2xl">Continuar</button>
      </div>
    </div>
  );
};

export default Registro;
