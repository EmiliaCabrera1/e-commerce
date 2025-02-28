import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Input from "../Componentes/Input";

const Registro = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { registrarUsuario, autenticarConGoogle } = useAuth();
  const [formError, setFormError] = React.useState("");

  const onSubmit = async (data) => {
    try {
      await registrarUsuario({
        email: data.email,
        password: data.contraseña,
      });
      setFormError(null);
    } catch (error) {
      setFormError(`Error creando usuario:, ${error.message}`);
    }
  };

  const manejarAutenticarConGoogle = async () => {
    try {
      await autenticarConGoogle();
    } catch (error) {
      setFormError(`Error en Google Sign-In: ${error.message}`);
    }
  };

  const contraseña = watch("contraseña", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center w-[90vw] sm:w-[50vw] h-[80vh] ">
        <h1 className="text-[#797979] text-3xl sm:text-5xl my-6 ">
          Crear Cuenta
        </h1>
        <div className="w-[90%] sm:w-[50%] mx-auto">
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="e-mail"
            error={errors?.email?.message}
            {...register("email", { required: "Email requerido" })}
          />
          <Input
            type="password"
            name="contraseña"
            id="contraseña"
            placeholder="contraseña"
            error={errors?.contraseña?.message}
            {...register("contraseña", { required: "Password requerido" })}
          />
          <Input
            type="password"
            name="confirmarContraseña"
            id="confirmarContraseña"
            placeholder="confirmar contraseña"
            error={errors?.confirmarContraseña?.message}
            {...register("confirmarContraseña", {
              required: "Password requerido",
              validate: (value) =>
                value === contraseña || "Las contraseñas no coinciden",
            })}
          />
        </div>
        {formError && (
          <span className="ml-2.5 text-red-500 text-sm mt-1">{formError}</span>
        )}
        <button
          type="submit"
          className="w-[90%] sm:w-[50%] p-4 my-5 text-xl md:text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]"
        >
          Continuar
        </button>
        <button
          type="button"
          onClick={manejarAutenticarConGoogle}
          className="flex items-center justify-center gap-5 w-[90%] sm:w-[50%] p-4 my-1 text-xl md:text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]"
        >
          <span>Continuar con Gmail</span>
          <img src="./assets/logo-gmail.svg" alt="logo gmail" className="h-6" />
        </button>
        <div className="flex text-xl sm:text-2xl mt-5 ">
          <h4>Ya tenes cuenta?</h4>
          <Link to="/login" className="mx-4 text-xl sm:text-2xl">
            Continuar
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Registro;
