import ComponenteRegistro from "../Componentes/Registro";

function Registro() {
  return (
    <div className="flex items-center align-center h-screen">
      <ComponenteRegistro />
      <div className="hidden sm:flex fixed max-w-[50vw] h-screen right-0  shadow-[0px_8px_8px_0px_rgba(0,0,0,0.30)]">
        <img
          src="./assets/inicio (2).png"
          alt="img inicio"
          className="object-cover h-full"
        />
        <img
          src="./assets/frase.svg"
          alt="frase"
          className="absolute z-20 right-[35%] top-[25%] "
        />
      </div>
    </div>
  );
}

export default Registro;
