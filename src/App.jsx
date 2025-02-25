import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./Rutas";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/Pie";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Encabezado />
        <main className="overflow-y-auto">
          <Rutas />
        </main>
        <Pie />
      </div>
    </Router>
  );
}

export default App;
