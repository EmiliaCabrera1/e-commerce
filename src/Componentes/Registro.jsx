import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { auth } from "../Firebase/config";
import { Link } from "react-router-dom";

const Registro = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { registrarUsuario, autenticarConGoogle } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    registrarUsuario({ email: data.email, password: data.contrasena });
  };

  const contrasena = watch("contrasena", "");
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center w-[50vw] h-[80vh]">
        <h1 className="text-[#797979] text-5xl my-6 ">Crear Cuenta</h1>
        <input
          type="text"
          name="e-mail"
          id="e-mail"
          placeholder="e-mail"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          name="contraseña"
          id="contraseña"
          placeholder="contraseña"
          {...register("contrasena", { required: true })}
        />
        <input
          type="password"
          name="confirmar contraseña"
          id="confirmar contraseña"
          placeholder="confirmar contraseña"
          {...register("confirmarContrasena", {
            required: true,
            validate: (value) =>
              value === contrasena || "Las contraseñas no coinciden",
          })}
        />
        <h4>{errors?.root?.message}</h4>
        <button
          type="submit"
          className="w-[50%] p-4 my-5 text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]"
        >
          Continuar
        </button>
        <button
          type="button"
          onClick={autenticarConGoogle}
          className="flex items-center justify-center gap-5 w-[50%] p-4 my-1 text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]"
        >
          <span>Continuar con Gmail</span>
          <img src="./assets/logo-gmail.svg" alt="logo gmail" className="h-6" />
        </button>
        <div className="flex text-xl mt-5 ">
          <h4>Ya tenes cuenta?</h4>
          <Link className="mx-4 text-2xl">Continuar</Link>
        </div>
      </div>
    </form>
  );
};

export default Registro;

//   //usuario existente

//   import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
