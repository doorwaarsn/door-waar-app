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

  const usersPerPage = 10;
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

  const handleViewModeChange = (view: typeof viewMode) => setViewMode(view);

  const handlePagination = (pageNumber: number) => setCurrentPage(pageNumber);

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
        {id ? profession.name + "s" : "Workers"}
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
    <div className="flex-1 w-full h-[444px] pb-[20px] flex flex-col ">
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
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
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    Error loading data
                  </td>
                </tr>
              ) : (
                users.map((user: User) => (
                  <tr
                    key={user.id}
                    className="cursor-pointer"
                    onClick={() => {
                      setWorkerDetails(user);
                      changeView("details");
                    }}
                  >
                    <ListOfEmployees user={user} />
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
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
