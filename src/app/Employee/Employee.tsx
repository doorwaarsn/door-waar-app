import { useEffect, useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import ListOfEmployees from "../../components/Employee/ListOfEmployees";
import KpiCard from "../../components/Employee/KpiCard";
import SingleEmployee from "../../components/Employee/SingleEmployee";
import OrgChart from "../../components/Employee/OrgChart";
import { useUsers } from "../../contexts/users/users.provider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDepartments } from "../../contexts/Department/department.provider";
import { User } from "../../contexts/users/users.models";
import { Link } from "react-router-dom";

type UserType = {
  id: string;
  fullName: string;
  phoneNumber: string;
  certificate: string[];
  illustrator: [];
  avatar: string;
  address: string;
  providerType: "ENTITY" | "INDIVIDUAL";
  createdAt: string;
  isWorker: boolean;
  recommend: boolean;
  region: [];
  description: [];
  subProfession: string;
  profession?: { name: string };
  isAvailable: boolean;
  cni: [];
};

const convertUserToUserType = (user: User): UserType => ({
  id: user.id.toString(), // Conversion de number à string
  fullName: user.fullName,
  phoneNumber: user.phoneNumber,
  profession: user.profession,
  address: user.address,
  providerType: user.providerType,
  createdAt: user.createdAt,
  avatar: user.avatar[0].image,
  isWorker: user.isWorker,
  isAvailable: user.isAvailable,
  subProfession: user.subProfession,
  description: user.description,
  recommend: user.recommend,
  region: user.region,
  illustrator: user.illustrator,
  certificate: user.certificate,
  cni: user.cni,
});

const Employee = () => {
  const { id } = useParams();
  const { users, loading, error } = useUsers();
  const { getProfessionById, profession } = useDepartments();

  const [viewMode, setViewMode] = useState("All");
  const [viewDataMode, setViewDataMode] = useState(1);
  const [workerDetails, setWorkerDetails] = useState<User | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (id) {
      getProfessionById(id);
    }
  }, [id]);

  const filteredUsers = useMemo(() => {
    const professionName = profession?.name;
    const usersByProfession = id
      ? users.filter((user: User) => user.profession?.name === professionName)
      : users;

    return usersByProfession
      .filter((user) => {
        const lowerQuery = query.toLowerCase();
        return (
          user.fullName.toLowerCase().includes(lowerQuery) ||
          user.phoneNumber.toLowerCase().includes(lowerQuery) ||
          user.profession?.name?.toLowerCase().includes(lowerQuery) ||
          user.address.toLowerCase().includes(lowerQuery)
        );
      })
      .map(convertUserToUserType); // Conversion ici
  }, [users, profession, id, query]);

  // Utilisation des objets mappés avec UserType[]
  const filteredUsersByType = useMemo(() => {
    const entityUsers = filteredUsers.filter(
      (user) => user.providerType === "ENTITY"
    );
    const individualUsers = filteredUsers.filter(
      (user) => user.providerType === "INDIVIDUAL"
    );
    const newUsersToday = filterNewUsers(filteredUsers);

    return {
      1: filteredUsers,
      2: newUsersToday,
      3: entityUsers,
      4: individualUsers,
    } as { [key: number]: UserType[] };
  }, [filteredUsers]);

  const usersPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const currentUsers = useMemo(() => {
    const usersList = filteredUsersByType[viewDataMode];
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    return usersList.slice(indexOfFirstUser, indexOfLastUser);
  }, [filteredUsersByType, currentPage, viewDataMode]);

  const totalPages = useMemo(() => {
    const usersList = filteredUsersByType[viewDataMode];
    return Math.ceil(usersList.length / usersPerPage);
  }, [filteredUsersByType, viewDataMode]);

  const handlePagination = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleViewModeChange = (view: typeof viewMode) => setViewMode(view);

  return (
    <div className="w-full h-auto flex flex-col gap-4 items-center">
      <Header viewMode={viewMode} setViewMode={handleViewModeChange} />
      {viewMode === "details" ? (
        <SingleEmployee
          workerDetails={workerDetails}
          setViewMode={setViewMode}
          setWorkerDetails={setWorkerDetails}
        />
      ) : (
        <>
          <KpiCards
            setViewDataMode={setViewDataMode}
            usersFilters={filteredUsers}
            newUsersToday={filteredUsersByType[2]}
            entityUsers={filteredUsersByType[3]}
            individualUsers={filteredUsersByType[4]}
          />
          {viewMode === "All" && (
            <UserTable
              profession={profession}
              query={query}
              setQuery={setQuery}
              users={currentUsers}
              loading={loading}
              error={error}
              changeView={handleViewModeChange}
              setWorkerDetails={setWorkerDetails}
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={handlePagination}
              id={id}
            />
          )}
          {viewMode === "orgchart" && <OrgChart />}
        </>
      )}
    </div>
  );
};

const Header = ({
  viewMode,
  setViewMode,
}: {
  viewMode: string;
  setViewMode: (view: string) => void;
}) => (
  <div className="w-full flex items-center justify-between gap-5">
    {viewMode === "details" ? (
      <button onClick={() => setViewMode("All")}>
        <MdOutlineKeyboardBackspace size={25} />
      </button>
    ) : (
      <div className="flex items-center gap-5">
        {["All", "orgchart", "Leave", "details"].map((view) => (
          <button
            key={view}
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewMode === view ? "text-[#222b45]" : "text-[#8f9bb3]"
            } cursor-pointer`}
            onClick={() => setViewMode(view)}
          >
            {view}
          </button>
        ))}
      </div>
    )}
  </div>
);

const KpiCards = ({
  setViewDataMode,
  usersFilters,
  newUsersToday,
  entityUsers,
  individualUsers,
}: any) => (
  <div className="w-full flex items-center justify-between gap-5">
    {[
      { num: 1, users: usersFilters, title: "Total Workers" },
      { num: 2, users: newUsersToday, title: "Total Workers Journée" },
      { num: 3, users: entityUsers, title: "Total Entités" },
      { num: 4, users: individualUsers, title: "Total Paticuliers" },
    ].map((item) => (
      <KpiCard
        key={item.num}
        num={item.num}
        users={item.users}
        totaluser={usersFilters}
        title={item.title}
        setViewsDatasChange={setViewDataMode}
      />
    ))}
  </div>
);

const UserTable = ({
  query,
  setQuery,
  users,
  loading,
  error,
  changeView,
  setWorkerDetails,
  currentPage,
  totalPages,
  paginate,
  profession,
  id,
}: any) => (
  <div className="flex-1 w-full h-[444px] pt-[16px] flex flex-col">
    <div className="w-full flex justify-between items-center rounded-t-[8px] border border-[#eff4fa] bg-white py-[10px] px-[20px]">
      <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
        {id ? profession.name + "s" : "Ouvriers"}
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
    {loading ? (
      <div className="flex items-center justify-center h-[800px]  w-full">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#14ABE3] animate-spin"></div>
        </div>
      </div>
    ) : error ? (
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
    ) : (
      <div className="flex-1 w-full h-[444px] pb-[20px] flex flex-col ">
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border pb-6">
          <div className="pb-6 px-0">
            <table className="w-full text-left table-auto min-w-max">
              <thead className="bg-[#eff4fa]">
                <tr>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    Nom complet
                  </th>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    Profession
                  </th>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    Adresse
                  </th>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    Téléphone
                  </th>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    Date de création
                  </th>
                  <th className="px-4 py-3 text-[15px] font-normal text-left text-[#8f9bb3]">
                    Role
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user: User) => (
                  <tr
                    key={user.id}
                    className="cursor-pointer hover:bg-[#eff4fa]"
                    onClick={() => {
                      setWorkerDetails(user);
                      changeView("details");
                    }}
                  >
                    <ListOfEmployees user={user} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-4 w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    )}
  </div>
);

const filterNewUsers = (users: UserType[]) => {
  const today = new Date().toISOString().split("T")[0];
  return users.filter((user) => user.createdAt.split("T")[0] === today);
};

const Pagination = ({ totalPages, currentPage, paginate }: any) => {
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

export default Employee;
