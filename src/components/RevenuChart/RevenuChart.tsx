import React from "react";
import RChart from "./Chart";

const RevenuChart = () => {
  return (
    <div className="flex-1 h-[444px] p-5 rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between  items-center">
      <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Revenue
        </h6>
      </div>
      <div className="w-full h-[200px]">
        <RChart />
      </div>

      <div className="flex justify-center items-center gap-3">
        <p className="text-lg font-normal leading-[1.09] text-center text-[#222b45]">
          1,240,301
        </p>
        <span className="w-[54px] h-[20px]   py-[2px] px-[8px] rounded-[8px] bg-[#cde7ff] text-[13px] font-semibold leading-[1.23] text-center text-[#14ABE3]">
          +3.7%
        </span>
      </div>
      <p className="text-[12px] font-normal  leading-[0.67] text-center text-[#8f9bb3]">
        Lorem ipsum dolor sit amet.
      </p>
      <button className="w-[195px] h-[34px] mt-10 pt-[9px] pr-[60.2px] pb-[9px] pl-[59.8px] rounded-[22px] bg-[#14ABE3] text-[13px] font-normal leading-[1.23] text-center text-white">
        Send Report
      </button>
    </div>
  );
};

export default RevenuChart;
