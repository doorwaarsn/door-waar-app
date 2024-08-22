import React, { useState } from "react";
import Card from "../../components/Payroll/Card";
import { CiSearch } from "react-icons/ci";
import ListOfPayroll from "../../components/Payroll/ListOfPayroll";
import PayrollDetails from "../../components/Payroll/PayrollDetails";

const Payroll = () => {
  const [viewsChange, setViewsChange] = useState("Employee");

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex items-center justify-between gap-5">
        <div className=" flex items-center gap-5">
          <button
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewsChange === "Employee" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Employee")}
          >
            Employee
          </button>
          <button
            className={`text-[13px] font-normal leading-[1.23] text-left ${
              viewsChange === "Payslip" ? "text-[#222b45]" : "text-[#8f9bb3]"
            }  cursor-pointer`}
            onClick={() => setViewsChange("Payslip")}
          >
            Payslip
          </button>
        </div>
        <button
          // onClick={() => setShowModal(true)}
          className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white"
        >
          Add New
        </button>
      </div>
      {viewsChange === "Employee" ? (
        <>
          <div className="w-full flex items-center justify-between gap-5">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} />
            ))}
          </div>
          <div className="flex-1 w-full h-[444px] mt-2  pb-[20px] flex flex-col">
            <div className="w-full flex justify-between items-center rounded-t-[8px] border border-[#eff4fa] bg-white py-[10px] px-[20px]">
              <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
                Departments
              </h6>
              <div className="flex items-center gap-4">
                <div className="relative flex items-center bg-white rounded-md border border-[#eff4fa]">
                  <input
                    className="w-full md:w-64 h-[34px] p-2 bg-transparent border-none placeholder:text-sm"
                    placeholder="Search..."
                  />
                  <span className="flex items-center px-2 text-[#8f9bb3] cursor-pointer">
                    <CiSearch size={20} />
                  </span>
                </div>
              </div>
            </div>
            <ListOfPayroll />
          </div>
        </>
      ) : (
        <PayrollDetails />
      )}
    </div>
  );
};

export default Payroll;
