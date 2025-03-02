import ComponenteRegistro from "../Componentes/Registro";

function Registro() {
  return (
    <div className="relative h-full w-screen overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{ backgroundImage: "url('./assets/inicio (2).png')" }}
      ></div>
      <ComponenteRegistro />
    </div>
  );
}

export default Registro;
