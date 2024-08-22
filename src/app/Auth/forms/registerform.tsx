import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/auth/auth.context";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AuthStatus } from "../../../contexts/auth/auth.model";

interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string;
  companyName: string;
  street: string;
  country: string;
  city: string;
  postalCode: string;
}

export const RegisterForm: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const { status, error, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputChange =
    (setStateFunc: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setStateFunc(event.target.value);
    };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    register!({
      email,
      password,
      firstName,
      lastName,
      companyName,
      phoneNumber,
      gender,
      street,
      country,
      city,
      postalCode,
    });
    navigate("/");
  };

  useEffect(() => {
    console.log(status);

    if (status === AuthStatus.logged) {
      navigate("/");
    } else if (status === AuthStatus.error && error) {
      console.log(error);
    }
  }, [status, error, navigate]);

  return (
    <form
      className="flex flex-col gap-5 w-full items-center"
      onSubmit={handleLogin}
    >
      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Nom de l'entreprise"
            value={companyName}
            onChange={handleInputChange(setCompanyName)}
            className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[87%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
          />
          <button
            type="button"
            onClick={nextStep}
            className="w-full lg:w-[87%] py-4 lg:py-[25px] rounded-lg bg-[#319f43] text-xl font-semibold text-neutral-50"
          >
            Suivant
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[87%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
          />
          <div className="flex flex-col gap-5 lg:flex-row w-full lg:w-[87%]">
            <input
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={handleInputChange(setLastName)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[50%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
            <input
              type="text"
              placeholder="Prenom"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[50%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword)}
            className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[87%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
          />
          <button
            type="button"
            onClick={nextStep}
            className="w-full lg:w-[87%] py-4 lg:py-[25px] rounded-lg bg-[#319f43] text-xl font-semibold text-neutral-50"
          >
            Suivant
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col gap-5 lg:flex-row w-full lg:w-[87%]">
            <input
              type="text"
              placeholder="Numéro de téléphone"
              value={phoneNumber}
              onChange={handleInputChange(setPhoneNumber)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[70%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
            <select
              value={gender}
              onChange={handleInputChange(setGender)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[30%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            >
              <option value="">Genre</option>
              <option value="MALE">Masculin</option>
              <option value="FEMALE">Féminin</option>
            </select>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row w-full lg:w-[87%]">
            <input
              type="text"
              placeholder="Pays"
              value={country}
              onChange={handleInputChange(setCountry)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[40%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
            <input
              type="text"
              placeholder="Ville"
              value={city}
              onChange={handleInputChange(setCity)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[60%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
          </div>
          <div className="flex flex-col gap-5 lg:flex-row w-full lg:w-[87%]">
            <input
              type="text"
              placeholder="Rue"
              value={street}
              onChange={handleInputChange(setStreet)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[70%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
            <input
              type="text"
              placeholder="Code postal"
              value={postalCode}
              onChange={handleInputChange(setPostalCode)}
              className="placeholder:text-center text-left pl-6 focus:outline-none w-full lg:w-[30%] py-4 lg:py-[25px] placeholder-black rounded-lg bg-neutral-50 text-xl font-extralight"
            />
          </div>
          <button
            type="submit"
            className="w-full lg:w-[87%] py-4 lg:py-[25px] rounded-lg bg-[#319f43] text-xl font-semibold text-neutral-50"
          >
            Creer mon compte
          </button>
        </>
      )}
      <div className="w-full lg:w-[87%] flex justify-between items-center">
        {(step === 2 || step === 3) && (
          <button
            onClick={prevStep}
            className="flex items-center justify-start px-4 py-1 lg:py-1 rounded-lg text-md font-extralight text-black cursor-pointer"
          >
            <IoIosArrowRoundBack size={30} /> Retour
          </button>
        )}
        <p className="text-xl text-left">
          <span className="text-xl font-extralight text-left text-black">
            J’ai déjà un compte.{" "}
          </span>
          <a href="/" className="text-xl font-bold text-left text-[#319f43]">
            Connexion
          </a>
        </p>
      </div>
    </form>
  );
};
