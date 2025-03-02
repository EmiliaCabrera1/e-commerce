import ComponenteLogin from "../Componentes/Login";

function Login() {
  return (
    <div className="relative h-full w-screen overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{ backgroundImage: "url('./assets/inicio (2).png')" }}
      ></div>
      <ComponenteLogin />
    </div>
  );
}

export default Login;
