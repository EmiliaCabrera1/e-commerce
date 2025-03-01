import React, { useState } from "react";
import { formatoMoneda } from "../Utilidad/Formato";
import { useUsuario } from "../Context/UsuarioContext";
import AlertaInicio from "./AlertaInicio";
import DetalleItem from "./DetalleItem";

const Item = ({ Id, ImagenUrl, Nombre, Precio }) => {
  const { favoritos, agregarFavorito, quitarFavorito, usuario } = useUsuario();
  const [loginPopup, setLoginPopup] = useState(false);
  const [detallePopup, setDetallePopup] = useState(false);

  const esFavorito = favoritos.includes(Id) && usuario;

  const cambiarFavorito = (id) => {
    if (!usuario) {
      setLoginPopup(true);
    } else {
      if (esFavorito) {
        quitarFavorito(id);
      } else {
        agregarFavorito(id);
      }
    }
  };

  return (
    <div
      onClick={() => setDetallePopup(true)}
      className="relative bg-beige/30 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] w-full aspect-[2/3]"
    >
      <img
        src={ImagenUrl}
        alt="Foto del vestido"
        className="h-[80%] w-full object-cover"
      />
      <button
        type="button"
        className="absolute z-10 right-4 top-[65%] w-[15%]"
        onClick={() => cambiarFavorito(Id)}
      >
        {!esFavorito && <img src="./assets/mg.svg" alt="Corazon" />}
        {esFavorito && <img src="./assets/mg2.svg" alt="Corazon Completo" />}
      </button>
      <div className="h-[20%] mx-2 my-2 space-y-1">
        <h5 className="text-nowrap">{Nombre}</h5>
        <h6 className="font-thin ">{formatoMoneda(Precio)}</h6>
      </div>
      <AlertaInicio isOpen={loginPopup} onClose={() => setLoginPopup(false)} />
      <DetalleItem
        isOpen={detallePopup}
        onClose={() => setDetallePopup(false)}
        Id={Id}
        ImagenUrl={ImagenUrl}
        Nombre={Nombre}
        Precio={Precio}
      />
    </div>
  );
};

export default Item;
