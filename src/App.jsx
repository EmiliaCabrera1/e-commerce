import Rutas from "./Rutas";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/Pie";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Encabezado />
      <main className="overflow-y-auto mb-10 md:mb-10">
        <div
          className="fixed inset-0 bg-cover bg-center opacity-10 -z-10"
          style={{ backgroundImage: "url('./assets/textura (3).png')" }}
        ></div>
        <Rutas />
      </main>
      <Pie />
    </div>
  );
}

export default App;
