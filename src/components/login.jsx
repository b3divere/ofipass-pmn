import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f3fb]">
      <div className="bg-white p-10 rounded-xl shadow-md w-96">
        <h2 className="text-center text-lg mb-6">
          Para registrarte debes rellenar el formulario a continuación
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Ingrese su correo"
            className="w-full p-3 border-2 border-red-500 rounded-md"
          />
          <input
            type="text"
            placeholder="Ingrese su Nombre"
            className="w-full p-3 border-2 border-red-500 rounded-md"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 border-2 border-red-500 rounded-md"
          />
          <button
            type="submit"
            className="w-full p-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;