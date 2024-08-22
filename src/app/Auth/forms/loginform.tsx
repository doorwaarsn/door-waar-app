import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/auth/auth.context";
import { useNavigate } from "react-router-dom";
import { emailSchema, passwordSchema } from "../validation";
import { AuthStatus } from "../../../contexts/auth/auth.model";
import { toast } from "react-toastify";
import * as yup from "yup";

export const LoginForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { status, error, login, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      // await emailSchema.validate({ phoneNumber: phoneNumber });
      // await passwordSchema.validate({ password: password });
      login!(phoneNumber, password);
      toast.success("Login successfully!");
      console.log(login!(phoneNumber, password));
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        toast.error(error.message);
      }
    }
  };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : undefined;
  let roleAsString = user?.role.toString();

  useEffect(() => {
    if (status === AuthStatus.logged) {
      if (roleAsString && roleAsString !== "EMPLOYED") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard/profile");
      }
    } else if (status === AuthStatus.error && error) {
      console.log(error);
    }
  }, [status, error, navigate, roleAsString]);

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
      <div>
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Téléphone
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ex: 77 234 84 76"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Souvienir de moi
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Mot de passe oublié ?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-[#14ABE3] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Connection
      </button>
      {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p> */}
    </form>
  );
};
