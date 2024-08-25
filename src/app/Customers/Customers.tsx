import React, { useMemo, useState } from "react";
import { useUsers } from "../../contexts/users/users.provider";
import ListOfCustomers from "../../components/Customers/ListOfCustomers";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type UserType = {
  id: string;
  fullName: string;
  phoneNumber: string;
  createdAt: string;
  role: string;
  updatedAt: string;
};

const convertUserToUserType = (user: any): UserType => ({
  id: user.id.toString(),
  fullName: user.fullName,
  phoneNumber: user.phoneNumber,
  role: user.role,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const Customers = () => {
  const { customers, loading, error } = useUsers();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 15;

  const { filteredUsers, totalPages } = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsers = customers.slice(indexOfFirstUser, indexOfLastUser);
    const filtered = currentUsers
      .filter(
        (user) =>
          user.fullName.toLowerCase().includes(lowerQuery) ||
          user.phoneNumber.toLowerCase().includes(lowerQuery)
      )
      .map(convertUserToUserType);

    return {
      filteredUsers: filtered,
      totalPages: Math.ceil(customers.length / usersPerPage),
    };
  }, [customers, currentPage, query, usersPerPage]);

  const handlePagination = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex items-center justify-between gap-5">
        <div></div>
        <button className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white">
          Add New
        </button>
      </div>
      <div className="flex-1 w-full h-[444px] pt-[16px] flex flex-col">
        <div className="w-full flex justify-between items-center rounded-t-[8px] border border-[#eff4fa] bg-white py-[10px] px-[20px]">
          <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
            Liste des clients ({query ? filteredUsers.length : customers.length}
            )
          </h6>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center bg-white rounded-md border border-[#eff4fa]">
              <input
                className="w-full md:w-64 h-[34px] p-2 bg-transparent border-none placeholder:text-sm"
                placeholder="Search..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
                <td className="px-4 py-3 border-b border-blue-gray-50">
                  <input type="checkbox" />
                </td>
                <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Nom complet
                </th>
                <th className="px-4 py-3 text-[15px] font-normal text-center text-[#8f9bb3]">
                  Téléphone
                </th>
                <th className="px-4 py-3 text-[15px] font-normal text-center text-[#8f9bb3]">
                  Rôle
                </th>
                <th className="px-4 py-3 text-[15px] font-normal text-center text-[#8f9bb3]">
                  Date de création
                </th>
                <th className="px-4 py-3 text-[15px] font-normal text-center text-[#8f9bb3]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <ListOfCustomers datas={filteredUsers} />
            </tbody>
          </table>

          <div className="flex justify-center mt-4 w-full">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              paginate={handlePagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(currentPage - 5, 1);
  const endPage = Math.min(currentPage + 4, totalPages);

  return (
    <nav
      className="isolate inline-flex -space-x-px gap-4 w-full justify-center items-center"
      aria-label="Pagination"
    >
      <button
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
        className="flex ml-1 cursor-pointer"
      >
        <FaChevronLeft size="0.6rem" className="text-[#14ABE3]" />
        <FaChevronLeft
          size="0.6rem"
          className="-translate-x-1/2 text-[#14ABE3]"
        />
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => paginate(1)}
            className={`flex flex-col cursor-pointer items-center justify-center w-6 h-6 shadow-sm text-sm font-normal transition-colors rounded-lg ${
              1 === currentPage ? "bg-[#14ABE3] text-white" : "text-[#14ABE3]"
            }`}
          >
            1
          </button>
          {startPage > 2 && <span className="text-[#14ABE3]">...</span>}
        </>
      )}

      {pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`flex flex-col cursor-pointer items-center justify-center w-5 h-5 shadow-sm text-sm font-normal transition-colors rounded-lg ${
            number === currentPage
              ? "bg-[#14ABE3] text-white"
              : "text-[#14ABE3]"
          }`}
        >
          {number}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-[#14ABE3]">...</span>
          )}
          <button
            onClick={() => paginate(totalPages)}
            className={`flex flex-col cursor-pointer items-center justify-center w-5 h-5 shadow-sm text-sm font-normal transition-colors rounded-lg ${
              totalPages === currentPage
                ? "bg-[#14ABE3] text-white"
                : "text-[#14ABE3]"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => paginate(currentPage + 1)}
        className="flex ml-1 cursor-pointer"
        disabled={currentPage === totalPages}
      >
        <FaChevronRight size="0.6rem" className="text-[#14ABE3]" />
        <FaChevronRight
          size="0.6rem"
          className="-translate-x-1/2 text-[#14ABE3]"
        />
      </button>
    </nav>
  );
};

export default Customers;
