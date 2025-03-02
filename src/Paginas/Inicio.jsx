function Inicio() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/inicio (2).png')" }}
      ></div>
      <img
        src="./assets/frase.svg"
        alt="frase"
        className="absolute z-20 right-[40%] top-[15%]"
      />
    </div>
  );
}

export default Inicio;
