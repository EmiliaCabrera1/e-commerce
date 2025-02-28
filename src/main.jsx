import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthContext";
import { UsuarioProvider } from "./Context/UsuarioContext";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <UsuarioProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UsuarioProvider>
    </Router>
  </StrictMode>
);
