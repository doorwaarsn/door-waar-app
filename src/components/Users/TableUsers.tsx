import Pencil from "../../assets/icons/pencil.svg";
import Trash from "../../assets/icons/trash.svg";
import { Link } from "react-router-dom";
import React from "react";

const TableUsers = ({ users, loading, error }: any) => {
  function RoleButton({ item }: any) {
    const roleColors: any = {
      ADMIN: "bg-custom-red",
      CEO_AND_FOUNDER: "bg-custom-blue",
      HR_ADMIN: "bg-custom-green",
      EMPLOYED: "bg-custom-gray",
      MANAGER: "bg-custom-yellow",
      GREAT: "bg-custom-purple",
    };

    const backgroundColorClass = roleColors[item.role];

    return (
      <button
        className={` h-[26px] p-[5px] px-[15px] rounded-[8px] ${backgroundColorClass} text-[13px] leading-[1.23] text-center ${
          item.role === "EMPLOYED" ? "text-[#8f9bb3]" : "text-white"
        }`}
      >
        {formatRoleName(item.role)}
      </button>
    );
  }

  const formatRoleName = (role: any) => {
    return role.replace(/_/g, " ").toLowerCase();
  };

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
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
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
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
      <div className="p-6 px-0">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="bg-[#eff4fa]">
            <tr>
              <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Job
                </p>
              </th>
              <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Create Date
                </p>
              </th>
              <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Role
                </p>
              </th>
              <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item: any, i: number) => (
              <tr key={i}>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center justify-between w-2/3">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&usqp=CAU"
                        alt="Spotify"
                        className="relative inline-block h-10 w-10 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      />
                      <div className="flex flex-col items-start gap-1">
                        <p className="block text-[13px] font-semibold leading-[1.23] text-left text-[#222b45]">
                          {item.firstName} {item.lastName}
                        </p>
                        <p className="block text-xs font-normal leading-[1.33] text-left text-[#8f9bb3]">
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item?.job ? item?.job.title : "None"}
                  </p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.createdAt}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    <RoleButton item={item} />
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max flex justify-center items-center gap-5">
                    <img src={Pencil} alt="" />
                    <img src={Trash} alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUsers;
