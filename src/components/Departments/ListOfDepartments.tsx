import { API_URL } from "../../env";
import { useEffect, useState } from "react";
import Eye from "../../assets/icons/eye.svg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const ListOfDepartments = ({ datas, loading }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProfessions, setFilteredProfessions] = useState([]);
  const [query, setQuery] = useState("");

  const usersPerPage = 10;

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

  // Calculer les utilisateurs affichés sur la page actuelle
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredProfessions.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(datas.length / usersPerPage);

  // Changer de page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[800px] ">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#14ABE3] animate-spin"></div>
        </div>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="text-center h-[800px] flex flex-col justify-center items-center">
  //       <h1 className="mb-4 text-6xl font-semibold text-red-500">
  //         {error.code}
  //       </h1>
  //       <p className="mb-4 text-lg text-gray-600">Oops! {error}.</p>
  //       <div className="animate-bounce">
  //         <svg
  //           className="mx-auto h-16 w-16 text-red-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  //           ></path>
  //         </svg>
  //       </div>
  //       <p className="mt-4 text-gray-600">
  //         Let's get you back{" "}
  //         <Link to="/dashboard" className="text-blue-500">
  //           home
  //         </Link>
  //         .
  //       </p>
  //     </div>
  //   );
  // }

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
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full border border-[#eff4fa] bg-white rounded-b-[8px]">
          <thead className="bg-[#eff4fa]">
            <tr>
              <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                #
              </th>
              <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                Proféssions
              </th>
              <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                Sous Proféssion
              </th>
              <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {currentUsers.map((item: any, i: any) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                  {i}
                </td>
                <td className="px-4 py-2 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800 flex gap-4 items-center">
                  <img
                    src={`${API_URL}/resources/${item.iconProfession[0].image}`}
                    alt="User"
                    className="h-10 w-10 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 object-cover"
                  />
                  {item.name}
                </td>
                <td className="px-4 py-2 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                  {item?.subProfession.map((sub: any) => (
                    <span className="">{sub.name}, </span>
                  ))}
                </td>
                <td className="px-4 py-2 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                  <div className="w-max flex justify-center items-center">
                    <Link
                      to={`/dashboard/professions/${item.id}`}
                      className="flex items-center justify-center"
                    >
                      <img src={Eye} alt="Delete" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4 w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="isolate inline-flex -space-x-px gap-4 w-full justify-center items-center"
      aria-label="Pagination"
    >
      <span
        onClick={() => paginate(`${currentPage--}`)}
        className="flex ml-1 cursor-pointer"
      >
        <FaChevronLeft size="0.6rem" className="text-[#14ABE3]" />
        <FaChevronLeft
          size="0.6rem"
          className="-translate-x-1/2 text-[#14ABE3]"
        />
      </span>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`flex flex-col cursor-pointer items-center justify-center w-6 h-6 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
              ${
                number === currentPage
                  ? "bg-[#14ABE3] text-white"
                  : "text-[#14ABE3]"
              }

              `}
        >
          {number}
        </button>
      ))}

      <span
        onClick={() => paginate(`${currentPage++}`)}
        className="flex ml-1 cursor-pointer"
      >
        <FaChevronRight size="0.6rem" className="text-[#14ABE3]" />
        <FaChevronRight
          size="0.6rem"
          className="-translate-x-1/2 text-[#14ABE3]"
        />
      </span>
    </nav>
  );
};

export default ListOfDepartments;
