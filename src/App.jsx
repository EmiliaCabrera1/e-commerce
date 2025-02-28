import Rutas from "./Rutas";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/Pie";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Encabezado />
      <main className="overflow-y-auto">
        <Rutas />
      </main>
      <Pie />
    </div>
  );
}

export default App;
