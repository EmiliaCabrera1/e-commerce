import React from "react";

const Titulo = ({ titulo }) => {
  return (
    <div className="flex my-6 mx-5 justify-between">
      <img src="./assets/linea.svg" alt="Linea" className="w-1/3" />
      <h1 className="text-[#797979] text-4xl ">{titulo}</h1>
      <img src="./assets/linea.svg" alt="Linea" className="w-1/3" />
    </div>
  );
};

export default Titulo;
