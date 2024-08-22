import React from "react";
import LineChartBalance from "./LineChartBalance";

const Balance = () => {
  return (
    <div className="flex-1 h-[444px] p-5 rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between  items-center">
      <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          My Balance
        </h6>
      </div>
      <div className="w-full flex flex-col gap-3 items-start mt-2">
        <h6 className="text-[15px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
          Balance
        </h6>
        <p className="text-lg font-normal leading-[1.09] text-center text-[#222b45]">
          $15,108
        </p>
      </div>
      <div className="w-full h-[250px] flex justify-start">
        <LineChartBalance />
      </div>
      <button className="w-[195px] h-[34px] mt-10 pt-[9px] pr-[60.2px] pb-[9px] pl-[59.8px] rounded-[22px] bg-[#14ABE3] text-[13px] font-normal leading-[1.23] text-center text-white">
        View More
      </button>
    </div>
  );
};

export default Balance;
