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
import { useContext} from "react";
import AuthContext from "../../contexts/auth/auth.context";
import { useUsers } from "../../contexts/users/users.provider";
import * as XLSX from 'xlsx';

const Home = () => {
  const { profile } = useContext(AuthContext);
  const { users, customers } = useUsers();


    const handleExport = (data:any) => {
      const workbook = XLSX.utils.book_new();

      const worksheet = XLSX.utils.json_to_sheet(data);

      XLSX.utils.book_append_sheet(workbook, worksheet, "Données");

      XLSX.writeFile(workbook, "data.xlsx");
    };

  return (
    <div className="w-full h-auto flex flex-col gap-6 items-start pb-10">
      <div className="w-full flex flex-col gap-3">
        <h6 className="text-[22px] font-normal leading-[1.09] text-left text-[#222b45]">
          Bienvenue <span className="font-bold">{profile?.fullName}!</span>
        </h6>
        <p className="text-[13px] font-normal leading-[1.23] text-left text-[#222b45]">
          Mesurez la croissance de vos chiffres récurrent mensuel.{" "}
          <span className="text-[#14ABE3] cursor-pointer">Voir plus</span>
        </p>
      </div>
      <div className="w-full flex justify-between items-center py-4">
        {MenuCardDatas.map((item, i) => (
          <MenuCard key={i} datas={item} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-5">
        <div className="flex-1 h-[444px]  pt-[16px]  pb-[20px]  rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col gap-5 px-5">
          <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
            <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
              Statistique Des Professions
            </h6>
            <div className="flex items-center gap-4">
              {/* <h6 className="text-[13px] font-normal leading-[1.23] text-right text-[#8f9bb3]">
                Last year comparision:
              </h6>
              <img src={DefaultOn} alt="" /> */}
            </div>
          </div>
          <SalaryChartBar users={users} />

          <div className="w-full flex  items-center">
            <button
                onClick={()=>handleExport(users)}
                className="w-[170px] h-[34px] mt-[28px] mr-[15px] mb-0 ml-[20px] py-[9px] pl-[28.1px] pr-[27.9px] rounded-[22px] bg-[#00e096] text-[13px] font-normal leading-[1.23] text-center text-white">
              Exporter en Excel
            </button>
            <p className="text-[12px] font-normal leading-[0.67] text-center text-[#8f9bb3] mt-6 flex flex-col items-start gap-3">
              Mesurez la vitesse à laquelle votre nombre d'utilisateurs croît chaque mois.
              <Link to={"/dashboard/workers"} className="text-[#14ABE3]">
                Voir plus
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1 h-[444px] flex justify-between items-center gap-6">
          <RevenuChart users={users} />
          <Balance />
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-5">
        <div className="flex-1 h-[444px] flex justify-between items-center gap-5">
          <Performance />
          <GrowthChart />
        </div>
        <div className="flex-1 h-[444px] pt-[16px]  pb-[20px]  rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col gap-5 px-5">
          <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
            <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
              Utilisateurs Statistique
            </h6>
            <div className="flex items-center gap-4"></div>
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
