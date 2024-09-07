import React from "react";
import RChart from "./Chart";

const RevenuChart = ({ users }: any) => {
    const directUsers = users.filter((user:any) => user.recommend === true);
    const organicUsers = users.filter((user:any) => user.recommend === false);

  return (
      <div
          className="flex-1 p-5 rounded-[8px] border border-[#eff4fa] bg-white flex flex-col justify-between items-center h-auto sm:h-[444px]">

          <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
              <h6 className="text-[16px] sm:text-[17px] font-semibold leading-[1] text-left text-[#222b45]">
                  Certification
              </h6>
          </div>

          <div className="w-full h-[200px] sm:h-[250px]">
              <RChart directUsers={directUsers} organicUsers={organicUsers}/>
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
              <p className="text-md sm:text-lg font-normal leading-[1.09] text-center text-[#8f9bb3]">
                  {users.length}
              </p>
              <span
                  className="h-[20px] py-[2px] px-[8px] rounded-[4px] bg-[#14ABE3] text-[12px] sm:text-[13px] font-normal leading-[1.23] text-center text-white">
      Ouvriers
    </span>
          </div>

          <button
              className="w-full sm:w-[195px] h-[34px] mt-10 rounded-[22px] bg-[#14ABE3] text-[12px] sm:text-[13px] font-normal leading-[1.23] text-center text-white">
              Send Report
          </button>
      </div>

  );
};

export default RevenuChart;
