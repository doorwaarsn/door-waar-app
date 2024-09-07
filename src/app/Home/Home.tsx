import { MenuCardDatas } from "../../components/MenuCard/MenuCardDatas";
import MenuCard from "../../components/MenuCard/MenuCard";
import SalaryChartBar from "../../components/SalarychartBar/SalaryChartBar";
import RevenuChart from "../../components/RevenuChart/RevenuChart";
import { Link } from "react-router-dom";
import Balance from "../../components/Balance/Balance";
import EmployeechartBar from "../../components/EmployeechartBar/EmployeechartBar";
import GrowthChart from "../../components/Growth/GrowthChart";
import Performance from "../../components/Performance/Performance";
import ProjectSummary from "../../components/ProjectSummary/ProjectSummary";
import { useContext } from "react";
import AuthContext from "../../contexts/auth/auth.context";
import { useUsers } from "../../contexts/users/users.provider";
import * as XLSX from 'xlsx';

const Home = () => {
  const { profile } = useContext(AuthContext);
  const { users, customers } = useUsers();

  const handleExport = (data: any) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Données");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
      <div className="w-full h-auto flex flex-col gap-6 items-center pb-10 px-4 md:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-3">
          <h6 className="text-lg md:text-xl lg:text-2xl font-normal leading-tight text-left text-[#222b45]">
            Bienvenue <span className="font-bold">{profile?.fullName}!</span>
          </h6>
          <p className="text-xs md:text-sm lg:text-base font-normal leading-snug text-left text-[#222b45]">
            Mesurez la croissance de vos chiffres récurrent mensuel.{" "}
            <span className="text-[#14ABE3] cursor-pointer">Voir plus</span>
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6">
          {MenuCardDatas.map((item, i) => (
              <MenuCard key={i} datas={item} className="flex-1 min-w-[200px] md:min-w-[250px]" />
          ))}
        </div>

        <div className="w-full  flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8">
          <div className="flex-1 h-[444px] pt-4 pb-6 rounded-md border border-[#eff4fa] bg-white flex flex-col gap-4 px-4 md:px-5">
            <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
              <h6 className="text-[17px] md:text-xl lg:text-2xl font-semibold text-left text-[#222b45]">
                Statistique des Ouvriers
              </h6>
            </div>
            <SalaryChartBar users={users} />
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                  onClick={() => handleExport(users)}
                  className="w-full md:w-auto h-10 py-2 px-4 rounded-full bg-[#00e096] text-xs md:text-sm lg:text-base font-normal text-center text-white">
                Exporter en Excel
              </button>
              <p className="text-xs md:text-sm lg:text-base font-normal text-center text-[#8f9bb3] mt-4 md:mt-0">
                Mesurez la vitesse à laquelle votre nombre d'utilisateurs croît chaque mois.
                <Link to={"/dashboard/workers"} className="text-[#14ABE3]">
                  Voir plus
                </Link>
              </p>
            </div>
          </div>

          <div className="flex-1 h-auto flex flex-col lg:flex-row justify-between items-center gap-6">
            <RevenuChart users={users} />
            <Balance />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8">
          <div className="flex-1 h-auto flex flex-col lg:flex-row justify-between items-start gap-6">
            <Performance />
            <GrowthChart />
          </div>
          <div className="flex-1 h-[444px] pt-4 pb-6 rounded-md border border-[#eff4fa] bg-white flex flex-col gap-4 px-4 md:px-5">
            <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
              <h6 className="text-[17px] md:text-xl lg:text-2xl font-semibold text-left text-[#222b45]">
                Utilisateurs Statistique
              </h6>
            </div>
            <EmployeechartBar users={users} customers={customers} />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <ProjectSummary />
        </div>
      </div>
  );
};

export default Home;
