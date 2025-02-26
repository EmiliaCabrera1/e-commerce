import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registro = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.contrasena)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const contrasena = watch("contrasena", "");
  console.log(errors);
  const auth = getAuth();

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
        <button className="w-[50%] p-4 my-5 text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]">
          Continuar
        </button>
        <button className="flex items-center justify-center gap-5 w-[50%] p-4 my-1 text-2xl bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#737171]">
          <span>Continuar con Gmail</span>
          <img src="./assets/logo-gmail.svg" alt="logo gmail" className="h-6" />
        </button>
        <div className="flex text-xl mt-5 ">
          <h4>Ya tenes cuenta?</h4>
          <button className="mx-4 text-2xl">Continuar</button>
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
