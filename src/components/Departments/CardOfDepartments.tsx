import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const CardOfDepartments = ({ datas, loading, error }: any) => {
  const [filteredProfessions, setFilteredProfessions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      setFilteredProfessions(datas);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const filteredProff = datas.filter((proff: any) => {
      const proffMatch =
        proff?.name?.toLowerCase().includes(lowerQuery) || false;
      const subProffMatch =
        proff?.subProfession?.some((subProff: any) =>
          subProff?.name.toLowerCase().includes(lowerQuery)
        ) || false;

      return proffMatch || subProffMatch;
    });

    setFilteredProfessions(filteredProff);
  }, [datas, query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[800px] ">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#0095ff] animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center h-[800px] flex flex-col justify-center items-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">
          {error.code}
        </h1>
        <p className="mb-4 text-lg text-gray-600">Oops! {error}.</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Let's get you back{" "}
          <Link to="/dashboard" className="text-blue-500">
            home
          </Link>
          .
        </p>
      </div>
    );
  }
  return (
    <div className="flex-1 w-full h-[444px] mt-4 pt-[16px] pb-[20px] flex flex-col">
      <div className="w-full flex justify-between items-center rounded-t-[8px] border border-[#eff4fa] bg-white py-[10px] px-[20px]">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Professions
        </h6>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-white rounded-md border border-[#eff4fa]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-64 h-[34px] p-2 bg-transparent border-none placeholder:text-sm"
              placeholder="Search..."
            />
            <span className="flex items-center px-2 text-[#8f9bb3] cursor-pointer">
              <CiSearch size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        {filteredProfessions.map((item: any, i: number) => (
          <Card key={i} datas={item} />
        ))}
      </div>
    </div>
  );
};

export default CardOfDepartments;
