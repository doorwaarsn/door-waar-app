import React from "react";
import { LoginForm } from "./forms/loginform";
import LOGO from "../../assets/logo/logo1.png";

const Login = () => {
  return (
    <section className="bg-gray-50">
      <div className="w-[500px]  flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0">
        <div className="relative w-32 h-32">
          <img
            src={LOGO}
            alt="Logo"
            className="absolute inset-0 w-full h-full object-contain opacity-0"
          />
          <div
            className="absolute inset-0 w-full h-full bg-[#14ABE3]"
            style={{
              WebkitMaskImage: `url(${LOGO})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
            }}
          ></div>
        </div>

        <div className="w-full bg-white rounded-lg shadow">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Connecter-vous
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
