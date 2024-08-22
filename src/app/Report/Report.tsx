import { useState } from "react";
import ListOfInvoices from "../../components/Account/ListOfInvoices";
import ListOfExpenses from "../../components/Account/Expenses";
import YearSelect from "../../components/Report/YearSelect";
import ExpensesKpi from "../../components/Report/ExpensesKpi";
import InvoicesKpi from "../../components/Report/InvoicesKpi";

const InvoiceskpiDatas = [
  {
    title: "Total Approved",
    amount: 562,
  },
  {
    title: "Pending Invoice",
    amount: 145,
  },
  {
    title: "Closed",
    amount: 982,
  },
];

const expensesDatas = [
  {
    item: "Computer",
    amount: 552,
    porcent: 23,
  },
  {
    item: "Laptop",
    amount: 2450,
    porcent: 53,
  },
  {
    item: "Accessories",
    amount: 1258,
    porcent: 27,
  },
  {
    item: "Others",
    amount: 556,
    porcent: 60,
  },
];

const Report = () => {
  const [viewsChange, setViewsChange] = useState("Expenses");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex items-center justify-between gap-5">
        <div className=" flex items-center gap-5">
          <button
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewsChange === "Expenses" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Expenses")}
          >
            Expenses
          </button>
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
              viewsChange === "Detail" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Detail")}
          >
            Detail
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-4">
            <YearSelect
              startYear={2000}
              endYear={2024}
              selectedYear={selectedYear}
              onChange={handleYearChange}
            />
          </div>
          <button className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white">
            Add New
          </button>
        </div>
      </div>

      {viewsChange === "Expenses" ? (
        <>
          <div className="w-full flex items-center justify-between gap-5">
            {expensesDatas.map((item: any) => (
              <ExpensesKpi datas={item} />
            ))}
          </div>
          <ListOfExpenses />
        </>
      ) : viewsChange === "Invoices" ? (
        <>
          <div className="w-full bg-white rounded-md flex items-center h-[115px] justify-between shadow-sm gap-5">
            {InvoiceskpiDatas.map((item: any) => (
              <InvoicesKpi datas={item} />
            ))}
          </div>
          <ListOfInvoices />
        </>
      ) : (
        <ListOfExpenses />
      )}
    </div>
  );
};

export default Report;
