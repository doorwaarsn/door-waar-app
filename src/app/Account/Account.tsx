import { useState } from "react";
import KpiCard from "../../components/Account/KpiCard";
import ListOfInvoices from "../../components/Account/ListOfInvoices";
import ListOfPayments from "../../components/Account/Payments";
import ListOfExpenses from "../../components/Account/Expenses";

const kpiDatas = [
  {
    title: "Total Accounts",
    account: 78,
    years: "This years",
    porcent: 5,
  },
  {
    title: "New Accounts",
    account: 14,
    years: "This years",
    porcent: 5,
  },
  {
    title: "Total Current A/C",
    account: 6,
    years: "This years",
    porcent: 5,
  },
  {
    title: "Total Seving A/C",
    account: 70,
    years: "This years",
    porcent: 5,
  },
];

const Account = () => {
  const [viewsChange, setViewsChange] = useState("Invoices");

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex items-center justify-between gap-5">
        <div className=" flex items-center gap-5">
          <button
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewsChange === "Invoices" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Invoices")}
          >
            Invoices
          </button>
          <button
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewsChange === "Payments" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Payments")}
          >
            Payments
          </button>
          <button
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewsChange === "Expenses" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Expenses")}
          >
            Expenses
          </button>
        </div>
        <button className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white">
          Add New
        </button>
      </div>

      {viewsChange === "Invoices" ? (
        <>
          <div className="w-full flex items-center justify-between gap-5">
            {kpiDatas.map((item: any) => (
              <KpiCard datas={item} />
            ))}
          </div>
          <ListOfInvoices />
        </>
      ) : viewsChange === "Payments" ? (
        <ListOfPayments />
      ) : (
        <ListOfExpenses />
      )}
    </div>
  );
};

export default Account;
