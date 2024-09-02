import React from "react";
import RChart from "./Chart";

const RevenuChart = ({ users }: any) => {
    const directUsers = users.filter((user:any) => user.recommend === true);
    const organicUsers = users.filter((user:any) => user.recommend === false);

  return (
      <div
          className="flex-1 h-[444px] p-5 rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between  items-center">
          <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
              <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
                  Certification
              </h6>
          </div>
          <div className="w-full h-[200px]">
              <RChart directUsers={directUsers} organicUsers={organicUsers}/>
          </div>

          <div className="flex justify-center items-center gap-3">
              <p className="text-lg font-normal leading-[1.09] text-center text-[#8f9bb3]">
                  {users.length}
              </p>
              <span
                  className="h-[20px]   py-[2px] px-[8px] rounded-[4px] bg-[#14ABE3] text-[13px] font-normal leading-[1.23] text-center text-white">
          Ouviers
        </span>
          </div>
          <button
              className="w-[195px] h-[34px] mt-10 pt-[9px] pr-[60.2px] pb-[9px] pl-[59.8px] rounded-[22px] bg-[#14ABE3] text-[13px] font-normal leading-[1.23] text-center text-white">
              Send Report
          </button>
      </div>
  );
};

export default RevenuChart;
