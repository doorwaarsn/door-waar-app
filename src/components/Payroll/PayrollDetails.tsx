import React from "react";
import Mail from "../../assets/icons/mail.svg";
import Print from "../../assets/icons/print.svg";
import ExpensesTable from "./ExpensesTable";

const PayrollDetails = () => {
  return (
    <div className="w-full flex flex-col gap-3 mt-4 bg-white border rounded-md p-5">
      <div className="w-full flex justify-between">
        <div className="flex items-start gap-2">
          <img
            className="w-16 h-16 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <p className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
              Order ID : <span className="text-[#0067b2]">04FA</span>
            </p>
            <p className="text-[15px] font-semibold leading-[1.07] text-left text-[#222b45]">
              Devin Harmon
            </p>
            <p className="text-[12px] font-normal leading-[1.07] text-left text-[#222b45]">
              795 Folsom Ave, Suite 546 San Francisco, CA 54656
            </p>
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center">
                <img src={Mail} alt="Edit" />
              </button>
              <button className="flex items-center justify-center">
                <img src={Print} alt="Edit" />
              </button>
            </div>
          </div>
        </div>
        <p className="text-[15px] font-semibold leading-[1.07] text-right text-[#222b45]">
          15 Otc, 2019
        </p>
      </div>
      <ExpensesTable />
      <div className="flex justify-between w-[90%]">
        <p className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
          Note:{" "}
          <span className="text-[#222b45]">
            I'm speaking with myseft, number one.
          </span>
        </p>
        <button className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-[#0067b2] text-[13px] font-semibold leading-[1.23] text-center text-white self-end mt-4">
          Print
        </button>
      </div>
    </div>
  );
};

export default PayrollDetails;
